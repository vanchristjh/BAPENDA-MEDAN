import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AuditService } from "@/lib/services/audit";
import { z } from "zod";

const ProfileSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  phone: z.string().max(20).optional(),
  address: z.string().max(500).optional(),
});

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // Users can only update their own profile; admins can update anyone
    if (session.user.id !== id && !["ADMIN", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const parsed = ProfileSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { name, phone, address } = parsed.data;

    const oldUser = await prisma.user.findUnique({ where: { id } });
    if (!oldUser) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const updated = await prisma.user.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(phone !== undefined && { phone }),
        ...(address !== undefined && { address }),
      },
      select: { id: true, name: true, email: true, phone: true, address: true, role: true },
    });

    await AuditService.log({
      userId: session.user.id,
      action: "UPDATE_PROFILE",
      table: "User",
      recordId: id,
      oldValue: oldUser,
      newValue: updated,
    });

    return NextResponse.json({ success: true, user: updated });
  } catch (error) {
    console.error("[USER_PATCH_ERROR]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session?.user || !["ADMIN", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    
    if (id === session.user.id) {
       return NextResponse.json({ error: "Cannot delete your own account" }, { status: 400 });
    }

    const oldUser = await prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, role: true },
    });

    if (!oldUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if user has relations to prevent database constraint errors and preserve financial history
    const hasRelations = await prisma.user.findFirst({
      where: {
        id,
        OR: [
          { taxObjects: { some: {} } },
          { payments: { some: {} } },
          { sppts: { some: {} } },
          { taxSubmissions: { some: {} } },
        ]
      }
    });

    // Always soft delete to preserve financial history and audit trail,
    // regardless of whether the user has related records. This ensures
    // consistent behavior and prevents accidental permanent data loss.
    await prisma.user.update({
      where: { id },
      data: { isActive: false }
    });

    await AuditService.log({
      userId: session.user.id,
      action: "SOFT_DELETE_USER",
      table: "User",
      recordId: id,
      oldValue: oldUser,
      newValue: { ...oldUser, isActive: false },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[USER_DELETE_ERROR]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
