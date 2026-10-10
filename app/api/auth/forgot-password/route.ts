import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { rateLimit, clientKey } from "@/lib/rate-limit";
import { AuditService } from "@/lib/services/audit";
import { NotificationService } from "@/lib/services/notification";

const ForgotSchema = z.object({ email: z.string().email().max(100) });

export async function POST(req: NextRequest) {
  if (!rateLimit(`forgot:${clientKey(req)}`, 5, 60_000)) {
    return NextResponse.json({ error: "Terlalu banyak percobaan. Coba lagi nanti." }, { status: 429 });
  }
  try {
    const parsed = ForgotSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Email tidak valid", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { email } = parsed.data;
    const user = await prisma.user.findUnique({ where: { email }, select: { id: true, email: true, isActive: true } });
    // Generic response to prevent enumeration; no token model yet (needs migration + email infra).
    if (user?.id) {
      await AuditService.log({ userId: user.id, action: "REQUEST_PASSWORD_RESET", table: "User", recordId: user.id });
      await NotificationService.notify({
        userId: user.id,
        title: "Permintaan Reset Kata Sandi",
        message: "Permintaan reset diterima. Hubungi admin untuk reset manual sampai email aktif.",
        type: "WARNING",
        category: "SYSTEM",
      });
    }
    return NextResponse.json({ success: true, message: "Jika email terdaftar, instruksi reset telah dicatat. Hubungi admin untuk bantuan." });
  } catch (error) {
    console.error("[FORGOT_PASSWORD]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
