import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !["ADMIN", "OFFICER", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const totalUsers = await prisma.user.count({ where: { role: "USER" } });
    const totalTaxObjects = await prisma.taxObject.count();
    const totalSppts = await prisma.sppt.count();

    // Payments totals via DB-side aggregates (was bounded 5k in-memory scan; totals now exact)
    const yearStart = new Date(new Date().getFullYear(), 0, 1);
    const [paidAgg, tunggakanAgg, paidCountYear] = await Promise.all([
      prisma.payment.aggregate({ where: { status: "PAID", createdAt: { gte: yearStart } }, _sum: { amount: true } }),
      prisma.payment.aggregate({ where: { status: { in: ["PENDING", "EXPIRED"] }, createdAt: { gte: yearStart } }, _sum: { amount: true } }),
      prisma.payment.count({ where: { status: "PAID", createdAt: { gte: yearStart } } }),
    ]);

    const totalRevenue = Number(paidAgg._sum.amount ?? 0);
    const totalTunggakan = Number(tunggakanAgg._sum.amount ?? 0);
    const totalPembayaran = paidCountYear;

    // Submissions total (batched; was 5 sequential round-trips)
    const [totalResearch, totalPpid, totalComplaints, totalTaxSubmissions, totalAssessments] = await Promise.all([
      prisma.researchRequest.count(),
      prisma.pPIDRequest.count(),
      prisma.complaint.count(),
      prisma.taxSubmission.count(),
      prisma.taxAssessment.count(),
    ]);
    const totalSubmissions = totalResearch + totalPpid + totalComplaints + totalTaxSubmissions;

    return NextResponse.json({
      totalUsers,
      totalTaxObjects,
      totalSppts,
      totalPembayaran,
      totalRevenue,
      totalTunggakan,
      totalSubmissions,
      totalAssessments
    });
  } catch (error) {
    console.error("[GET_INTEGRATION_DASHBOARD_API]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
