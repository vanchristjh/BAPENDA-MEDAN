import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NotificationService } from "@/lib/services/notification";
import { AuditService } from "@/lib/services/audit";
import { z } from "zod";

const MockPaySchema = z.object({ paymentId: z.string().min(1).max(100) });

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const parsed = MockPaySchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "paymentId wajib diisi", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { paymentId } = parsed.data;

    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
    });

    if (!payment) {
      return NextResponse.json({ error: "Tagihan tidak ditemukan" }, { status: 404 });
    }

    if (payment.status === "PAID") {
      return NextResponse.json({ error: "Tagihan sudah dibayar" }, { status: 400 });
    }

    if (payment.userId !== session.user.id) {
      return NextResponse.json({ error: "Tagihan bukan milik Anda" }, { status: 403 });
    }

    const updatedPayment = await prisma.payment.update({
      where: { id: paymentId },
      data: {
        status: "PAID",
        method: "MOCK_BANK_TRANSFER",
        paidAt: new Date(),
      },
    });

    // Notify user
    await NotificationService.notify({
      userId: updatedPayment.userId,
      title: "Pembayaran Berhasil (Simulasi)!",
      message: `Terima kasih! Pembayaran ${updatedPayment.taxPeriod} senilai Rp ${Number(updatedPayment.amount).toLocaleString("id-ID")} telah berhasil disimulasikan.`,
      type: "SUCCESS",
    });

    // Log the audit
    await AuditService.log({
      userId: updatedPayment.userId,
      action: "MOCK_PAYMENT_PAID",
      table: "Payment",
      recordId: updatedPayment.id,
      newValue: { status: "PAID", method: "MOCK_BANK_TRANSFER" },
    });

    return NextResponse.json({ success: true, payment: updatedPayment });
  } catch (error) {
    console.error("[MOCK_PAYMENT_POST]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
