import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { AuditService } from "@/lib/services/audit";
import { NotificationService } from "@/lib/services/notification";
import { z } from "zod";

const AnnouncementSchema = z.object({
  title: z.string().min(5).max(200),
  content: z.string().min(10).max(10000),
  category: z.string().min(2).max(50),
  isActive: z.boolean().optional(),
});

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const isAdmin = session?.user && ["ADMIN", "OFFICER", "DEVELOPER"].includes(session.user.role);
    const announcements = await prisma.announcement.findMany({
      where: isAdmin ? {} : { isActive: true },
      orderBy: { createdAt: "desc" },
      include: { author: { select: { name: true } } },
      take: 100,
    });
    return NextResponse.json(announcements);
  } catch (error) {
    console.error("[ANNOUNCEMENTS_GET]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !["ADMIN", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const parsed = AnnouncementSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { title, content, category, isActive } = parsed.data;
    const slug = title.toLowerCase().replace(/ /g, "-") + "-" + Date.now();

    const announcement = await prisma.announcement.create({
      data: {
        title,
        content,
        category,
        isActive: isActive ?? true,
        slug,
        authorId: session.user.id,
      },
      include: { author: { select: { name: true } } },
    });

    await AuditService.log({
      userId: session.user.id,
      action: "CREATE_ANNOUNCEMENT",
      table: "Announcement",
      recordId: announcement.id,
      newValue: announcement,
    });

    const users = await prisma.user.findMany({ where: { isActive: true, role: { in: ["USER", "MAHASISWA"] } }, select: { id: true }, take: 500 });
    for (const u of users) {
      await NotificationService.notify({
        userId: u.id,
        title: `Pengumuman: ${announcement.title}`,
        message: announcement.content.substring(0, 120) + "...",
        type: "INFO",
        category: "DASHBOARD",
      });
    }

    return NextResponse.json(announcement);
  } catch (error) {
    console.error("[ANNOUNCEMENTS_POST]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
