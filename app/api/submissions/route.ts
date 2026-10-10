import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AuditService } from "@/lib/services/audit";
import { NotificationService } from "@/lib/services/notification";
import { z } from "zod";

const SubmissionSchema = z.object({
  type: z.enum(["KEBERATAN", "PERUBAHAN"]),
  title: z.string().min(5).max(200),
  description: z.string().min(20).max(5000),
  documentUrl: z.string().max(500).optional(),
});

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || undefined;
    const status = searchParams.get("status") || undefined;
    const search = searchParams.get("search") || "";
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const limit = Math.min(100, Math.max(5, parseInt(searchParams.get("limit") || "20")));
    const skip = (page - 1) * limit;

    const whereClause: Record<string, unknown> = {};

    if (session.user.role === "USER" || session.user.role === "MAHASISWA") {
      whereClause.userId = session.user.id;
    } else if (!["ADMIN", "DEVELOPER", "OFFICER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    if (type) {
      whereClause.type = type;
    }

    if (status) {
      whereClause.status = status;
    }

    if (search) {
      whereClause.OR = [
        { ticketNumber: { contains: search, mode: "insensitive" } },
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { user: { name: { contains: search, mode: "insensitive" } } },
      ];
    }

    const [submissions, total] = await Promise.all([
      prisma.taxSubmission.findMany({
        where: whereClause,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              nik: true,
              phone: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.taxSubmission.count({ where: whereClause }),
    ]);

    return NextResponse.json({ submissions, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } });
  } catch (error) {
    console.error("[SUBMISSIONS_GET_ERROR]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const parsed = SubmissionSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { type, title, description, documentUrl } = parsed.data;

    // Generate unique ticket number
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const rand = Math.floor(1000 + Math.random() * 9000);
    const ticketNumber = `SUB-${dateStr}-${rand}`;

    const submission = await prisma.taxSubmission.create({
      data: {
        ticketNumber,
        type,
        title,
        description,
        documentUrl,
        userId: session.user.id,
      },
    });

    // Write to audit log
    await AuditService.log({
      action: "CREATE",
      table: "TaxSubmission",
      recordId: submission.id,
      userId: session.user.id,
      newValue: {
        ticketNumber,
        type,
        title,
      },
    });

    const admins = await prisma.user.findMany({ where: { role: { in: ["ADMIN", "OFFICER"] } }, select: { id: true }, take: 100 });
    for (const admin of admins) {
      await NotificationService.notify({
        userId: admin.id,
        title: "Pengajuan Baru",
        message: `Pengajuan ${type} "${title}" (${ticketNumber}) telah diterima.`,
        type: "INFO",
        category: "DASHBOARD",
      });
    }

    return NextResponse.json(submission);
  } catch (error) {
    console.error("[SUBMISSIONS_POST_ERROR]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
