import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { AuditService } from "@/lib/services/audit";
import { z } from "zod";

const AnnouncementPatchSchema = z.object({
  title: z.string().min(5).max(200).optional(),
  content: z.string().min(10).max(10000).optional(),
  category: z.string().min(2).max(50).optional(),
  isActive: z.boolean().optional(),
});

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session || !["ADMIN", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const parsed = AnnouncementPatchSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { title, content, category, isActive } = parsed.data;
    const oldVal = await prisma.announcement.findUnique({ where: { id: id } });

    const definedData = Object.fromEntries(Object.entries({ title, content, category, isActive }).filter(([, v]) => v !== undefined));
    const updated = await prisma.announcement.update({
      where: { id: id },
      data: definedData,
      include: { author: { select: { name: true } } },
    });

    await AuditService.log({
      userId: session.user.id,
      action: "UPDATE_ANNOUNCEMENT",
      table: "Announcement",
      recordId: updated.id,
      oldValue: oldVal || undefined,
      newValue: updated,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("[ANNOUNCEMENT_PATCH]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session || !["ADMIN", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const deleted = await prisma.announcement.delete({
      where: { id: id },
    });

    await AuditService.log({
      userId: session.user.id,
      action: "DELETE_ANNOUNCEMENT",
      table: "Announcement",
      recordId: deleted.id,
      oldValue: deleted,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[ANNOUNCEMENT_DELETE]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
