import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AuditService } from "@/lib/services/audit";
import { NotificationService } from "@/lib/services/notification";
import { z } from "zod";

const ResponseSchema = z.object({
  response: z.string().min(5).max(5000),
  status: z.enum(["OPEN", "IN_PROGRESS", "RESOLVED", "REJECTED"]).optional(),
});

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session || !["ADMIN", "OFFICER", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const parsed = ResponseSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Respon tidak valid", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { response, status } = parsed.data;

    const oldVal = await prisma.complaint.findUnique({ where: { id: id } });
    const updated = await prisma.complaint.update({
      where: { id: id },
      data: {
        response,
        responseAt: new Date(),
        status: status || "RESOLVED",
      },
    });

    await AuditService.log({
      userId: session.user.id,
      action: "RESPOND_COMPLAINT",
      table: "Complaint",
      recordId: updated.id,
      oldValue: oldVal || undefined,
      newValue: updated,
    });

    await NotificationService.notify({
      userId: updated.userId,
      type: "SUCCESS",
      title: "Respon Pengaduan",
      message: `Aduan Anda (${updated.ticketNumber}) telah ditanggapi oleh petugas Bapenda.`,
    });

    return NextResponse.json({ success: true, complaint: updated });
  } catch (error) {
    console.error("[COMPLAINT_RESPONSE_PATCH]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
