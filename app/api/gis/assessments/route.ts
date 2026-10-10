import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AuditService } from "@/lib/services/audit";
import { NotificationService } from "@/lib/services/notification";
import { z } from "zod";

const AssessmentSchema = z.object({
  objectTaxId: z.string().min(1).max(100),
  newNJOP: z.coerce.number().positive().max(1e15),
  reason: z.string().min(10).max(1000),
});

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !["ADMIN", "OFFICER", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const assessments = await prisma.taxAssessment.findMany({
      take: 100,
      include: {
        objectTax: {
          select: {
            nop: true,
            name: true,
            type: true
          }
        },
        assessor: {
          select: {
            name: true
          }
        }
      },
      orderBy: {
        assessmentDate: "desc"
      }
    });

    // Top 10 Increases
    const allObjWithDiff = assessments.map(a => {
      const diff = Number(a.newNJOP) - Number(a.oldNJOP);
      const pct = (diff / Number(a.oldNJOP)) * 100;
      return {
        id: a.id,
        nop: a.objectTax.nop,
        name: a.objectTax.name,
        type: a.objectTax.type,
        oldNJOP: Number(a.oldNJOP),
        newNJOP: Number(a.newNJOP),
        diff,
        pct,
        date: a.assessmentDate.toISOString()
      };
    });

    const topIncreases = [...allObjWithDiff]
      .filter(item => item.diff > 0)
      .sort((a, b) => b.diff - a.diff)
      .slice(0, 10);

    const topDecreases = [...allObjWithDiff]
      .filter(item => item.diff < 0)
      .sort((a, b) => a.diff - b.diff)
      .slice(0, 10);

    return NextResponse.json({
      assessments,
      analytics: {
        topIncreases,
        topDecreases
      }
    });
  } catch (error) {
    console.error("[GET_ASSESSMENTS_API]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !["ADMIN", "OFFICER", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const parsed = AssessmentSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { objectTaxId, newNJOP, reason } = parsed.data;

    const taxObject = await prisma.taxObject.findUnique({
      where: { id: objectTaxId }
    });

    if (!taxObject) {
      return NextResponse.json({ error: "Objek Pajak tidak ditemukan" }, { status: 404 });
    }

    const oldNJOP = Number(taxObject.njop || 0);
    const newNJOPVal = Number(newNJOP);

    // Create the assessment record
    const assessment = await prisma.taxAssessment.create({
      data: {
        objectTaxId,
        oldNJOP,
        newNJOP: newNJOPVal,
        assessmentReason: reason,
        assessorId: session.user.id
      }
    });

    // Update the tax object's NJOP
    await prisma.taxObject.update({
      where: { id: objectTaxId },
      data: {
        njop: newNJOPVal
      }
    });

    // Trigger Notification to owner
    await NotificationService.notify({
      userId: taxObject.ownerId,
      title: "Penilaian Ulang NJOP",
      message: `Objek pajak Anda (${taxObject.name} - NOP: ${taxObject.nop}) telah dinilai kembali. NJOP baru: Rp ${newNJOPVal.toLocaleString("id-ID")}. Alasan: ${reason}`,
      type: "INFO"
    });

    // Log the change
    await AuditService.log({
      userId: session.user.id,
      action: "TAX_OBJECT_REVALUATION",
      table: "TaxObject",
      recordId: taxObject.id,
      oldValue: { njop: oldNJOP },
      newValue: { njop: newNJOPVal, reason }
    });

    return NextResponse.json({ success: true, assessment });
  } catch (error) {
    console.error("[POST_ASSESSMENT_API]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
