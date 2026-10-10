import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { AuditService } from "@/lib/services/audit";
import { NotificationService } from "@/lib/services/notification";
import { z } from "zod";

const PasswordSchema = z.object({
  currentPassword: z.string().min(1).max(200),
  newPassword: z.string().min(8).max(100).regex(/[A-Z]/, "Password harus mengandung minimal 1 huruf kapital").regex(/[a-z]/, "Password harus mengandung minimal 1 huruf kecil").regex(/[0-9]/, "Password harus mengandung minimal 1 angka"),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const parsed = PasswordSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { currentPassword, newPassword } = parsed.data;

    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    if (!user?.password) return NextResponse.json({ error: "User tidak ditemukan" }, { status: 404 });

    const valid = await bcrypt.compare(currentPassword, user.password);
    if (!valid) return NextResponse.json({ error: "Password saat ini tidak sesuai" }, { status: 400 });

    const hashed = await bcrypt.hash(newPassword, 12);
    await prisma.user.update({ where: { id: session.user.id }, data: { password: hashed } });

    await AuditService.log({
      userId: session.user.id,
      action: "CHANGE_PASSWORD",
      table: "User",
      recordId: session.user.id,
    });

    await NotificationService.notify({
      userId: session.user.id,
      title: "Kata Sandi Diubah",
      message: "Kata sandi akun Anda baru saja diperbarui. Jika ini bukan Anda, segera hubungi admin.",
      type: "WARNING",
      category: "SYSTEM",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CHANGE_PASSWORD]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
