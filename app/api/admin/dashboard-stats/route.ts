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

    // Counts + payment totals via DB aggregates (exact even when rows >5k).
    // Charts (monthly/sector/district) use bounded 5k sample for 1-year window.
    const yearStart = new Date(new Date().getFullYear(), 0, 1);
    const [userCount, taxObjectCount, spptCount, activeWpCount, paidAgg, tunggakanAgg, paidCountDb, unpaidCountDb, payments] = await Promise.all([
      prisma.user.count({ where: { role: "USER" } }),
      prisma.taxObject.count(),
      prisma.sppt.count(),
      prisma.user.count({ where: { role: "USER", isActive: true } }),
      prisma.payment.aggregate({ where: { status: "PAID", createdAt: { gte: yearStart } }, _sum: { amount: true } }),
      prisma.payment.aggregate({ where: { status: { in: ["PENDING", "EXPIRED"] }, createdAt: { gte: yearStart } }, _sum: { amount: true } }),
      prisma.payment.count({ where: { status: "PAID", createdAt: { gte: yearStart } } }),
      prisma.payment.count({ where: { status: { in: ["PENDING", "EXPIRED"] }, createdAt: { gte: yearStart } } }),
      prisma.payment.findMany({
        where: { createdAt: { gte: yearStart } },
        orderBy: { createdAt: "desc" },
        take: 5000,
        select: {
          id: true,
          amount: true,
          status: true,
          createdAt: true,
          taxObject: {
            select: {
              type: true,
              address: true,
            }
          }
        },
      }),
    ]);

    const totalRevenueSum = Number(paidAgg._sum.amount ?? 0);
    const totalTunggakanSum = Number(tunggakanAgg._sum.amount ?? 0);
    const paidCount = paidCountDb;
    const unpaidCount = unpaidCountDb;

    const monthlyStats = Array.from({ length: 12 }, (_, i) => ({
      month: i,
      revenue: 0,
      tunggakan: 0,
    }));

    // Sektor Pajak & District aggregates
    const sectorRevenueMap: Record<string, number> = {
      "PKB": 0,
      "BBN-KB": 0,
      "PBB-KB": 0,
      "P. ROKOK": 0,
      "P. REKLAME": 0,
      "PAT": 0,
      "PBB-P2": 0,
      "BPHTB": 0,
      "PAB": 0,
      "PBJT Jasa Perhotelan": 0,
      "PBJT Makanan dan/atau Minuman": 0,
      "PBJT Kesenian dan Hiburan": 0,
      "PBJT Tenaga Listrik": 0,
      "PBJT Jasa Parkir": 0,
      "Pajak Sarang Burung Walet": 0,
      "Lainnya": 0,
    };

    const districtRevenueMap: Record<string, number> = {
      "Medan Baru": 0,
      "Medan Petisah": 0,
      "Medan Sunggal": 0,
      "Medan Polonia": 0,
      "Medan Helvetia": 0,
      "Medan Johor": 0,
      "Medan Area": 0,
    };

    // Category distribution counts for Obj Pajak berdasarkan kategori chart
    const objCategoryCounts: Record<string, number> = {
      "PKB": 0,
      "BBN-KB": 0,
      "PBB-KB": 0,
      "P. ROKOK": 0,
      "P. REKLAME": 0,
      "PAT": 0,
      "PBB-P2": 0,
      "BPHTB": 0,
      "PAB": 0,
      "PBJT Jasa Perhotelan": 0,
      "PBJT Makanan dan/atau Minuman": 0,
      "PBJT Kesenian dan Hiburan": 0,
      "PBJT Tenaga Listrik": 0,
      "PBJT Jasa Parkir": 0,
      "Pajak Sarang Burung Walet": 0,
      "Lainnya": 0,
    };

    // Category distribution counts via DB groupBy (was full-table findMany scan)
    const typeGroups = await prisma.taxObject.groupBy({ by: ["type"], _count: { type: true } });
    typeGroups.forEach((g) => {
      const type = g.type || "PBB-P2";
      if (type in objCategoryCounts) {
        objCategoryCounts[type] += g._count.type;
      } else {
        objCategoryCounts["Lainnya"] += g._count.type;
      }
    });

    // Charts only — totals/counts already exact from DB aggregates above.
    payments.forEach((pay) => {
      const date = new Date(pay.createdAt);
      const month = date.getMonth();
      const amt = Number(pay.amount);
      if (pay.status === "PAID") {
        monthlyStats[month].revenue += amt;

        // Sector distribution
        const type = pay.taxObject?.type || "PBB-P2";
        if (type in sectorRevenueMap) {
          sectorRevenueMap[type] += amt;
        } else {
          sectorRevenueMap["Lainnya"] += amt;
        }

        // District distribution (only real address matches; unmatched left unassigned)
        const address = (pay.taxObject?.address || "").toLowerCase();
        for (const dist of Object.keys(districtRevenueMap)) {
          if (address.includes(dist.toLowerCase())) {
            districtRevenueMap[dist] += amt;
            break;
          }
        }
      } else if (pay.status === "PENDING" || pay.status === "EXPIRED") {
        monthlyStats[month].tunggakan += amt;
      }
    });

    const totalBills = paidCount + unpaidCount;
    const kepatuhanRate = totalBills > 0 ? Math.round((paidCount / totalBills) * 100) : 100;
    const totalPajakTerutang = totalRevenueSum + totalTunggakanSum;

    // Format sector list with percentages
    const sectorStats = Object.entries(sectorRevenueMap).map(([name, amount]) => {
      const typeLabels: Record<string, string> = {
        "PKB": "Pajak Kendaraan Bermotor (PKB)",
        "BBN-KB": "Bea Balik Nama Kendaraan Bermotor (BBN-KB)",
        "PBB-KB": "Pajak Bahan Bakar Kendaraan Bermotor (PBB-KB)",
        "P. ROKOK": "Pajak Rokok",
        "P. REKLAME": "Pajak Reklame",
        "PAT": "Pajak Air Tanah (PAT)",
        "PBB-P2": "Pajak Bumi dan Bangunan (PBB-P2)",
        "BPHTB": "Bea Perolehan Hak atas Tanah & Bangunan (BPHTB)",
        "PAB": "Pajak Alat Berat (PAB)",
        "PBJT Jasa Perhotelan": "PBJT Jasa Perhotelan",
        "PBJT Makanan dan/atau Minuman": "PBJT Makanan dan/atau Minuman",
        "PBJT Kesenian dan Hiburan": "PBJT Kesenian dan Hiburan",
        "PBJT Tenaga Listrik": "PBJT Tenaga Listrik",
        "PBJT Jasa Parkir": "PBJT Jasa Parkir",
        "Pajak Sarang Burung Walet": "Pajak Sarang Burung Walet",
        "Lainnya": "Sektor Fiskal Lainnya"
      };
      return {
        name: typeLabels[name] || name,
        amount,
        pct: totalRevenueSum > 0 ? Math.round((amount / totalRevenueSum) * 100) : 0
      };
    });

    // Format district list with ranks (real amounts only; no simulated fallback)
    const districtStats = Object.entries(districtRevenueMap).map(([name, amount]) => ({
      name,
      amount,
      simulatedVal: amount,
    }))
    .sort((a, b) => b.simulatedVal - a.simulatedVal)
    .slice(0, 5)
    .map((d, index) => {
      return {
        name: d.name,
        amount: d.amount,
        simulatedVal: d.simulatedVal,
        pct: 100 - (index * 12)
      };
    });

    // 6. Recent Submissions (batched — was 4 sequential round-trips)
    const [research, ppid, complaints, taxSubmissions, recentActivity] = await Promise.all([
      prisma.researchRequest.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true } } },
      }),
      prisma.pPIDRequest.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true } } },
      }),
      prisma.complaint.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true } } },
      }),
      prisma.taxSubmission.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true } } },
      }),
      prisma.auditLog.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true } } },
      }),
    ]);

    const submissions = [
      ...research.map((r) => ({
        id: r.id,
        number: r.requestNumber,
        type: "Riset Mahasiswa",
        title: r.title,
        status: r.status,
        createdAt: r.createdAt.toISOString(),
        owner: r.user.name,
      })),
      ...ppid.map((p) => ({
        id: p.id,
        number: p.ticketNumber,
        type: "Layanan PPID",
        title: p.title,
        status: p.status,
        createdAt: p.createdAt.toISOString(),
        owner: p.user.name,
      })),
      ...complaints.map((c) => ({
        id: c.id,
        number: c.ticketNumber,
        type: "E-Pengaduan",
        title: c.subject,
        status: c.status,
        createdAt: c.createdAt.toISOString(),
        owner: c.user?.name || "Anonymous",
      })),
      ...taxSubmissions.map((t) => ({
        id: t.id,
        number: t.ticketNumber,
        type: t.type === "KEBERATAN" ? "Keberatan Pajak" : "Perubahan Data",
        title: t.title,
        status: t.status,
        createdAt: t.createdAt.toISOString(),
        owner: t.user.name,
      })),
    ]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 10);

    // 7-8. Counts batched (was 8 sequential round-trips)
    const [
      pendingPPID,
      pendingComplaints,
      pendingResearch,
      pendingTaxSubmissions,
      pendingVerificationObjects,
      inProgressPPID,
      inProgressComplaints,
      inProgressTaxSubmissions,
    ] = await Promise.all([
      prisma.pPIDRequest.count({ where: { status: "OPEN" } }),
      prisma.complaint.count({ where: { status: "OPEN" } }),
      prisma.researchRequest.count({ where: { status: "PENDING" } }),
      prisma.taxSubmission.count({ where: { status: "PENDING" } }),
      prisma.taxObject.count({ where: { status: "PENDING" } }),
      prisma.pPIDRequest.count({ where: { status: "IN_PROGRESS" } }),
      prisma.complaint.count({ where: { status: "IN_PROGRESS" } }),
      prisma.taxSubmission.count({ where: { status: "IN_PROGRESS" } }),
    ]);

    const inProgressSubmissions = inProgressPPID + inProgressComplaints + inProgressTaxSubmissions;

    const fieldTasksToday = pendingVerificationObjects + Math.min(pendingComplaints, 5);

    return NextResponse.json({
      stats: {
        userCount,
        taxObjectCount,
        spptCount,
        totalPajakTerutang,
        totalPembayaranMasuk: totalRevenueSum,
        totalTunggakanPajak: totalTunggakanSum,
        activeWpCount,
        kepatuhanRate,
        paidCount,
        unpaidCount,
        totalRevenue: totalRevenueSum,
        pendingPPID,
        pendingComplaints,
        pendingResearch,
        pendingTaxSubmissions,
        pendingVerificationObjects,
        inProgressSubmissions,
        fieldTasksToday,
      },
      monthlyStats,
      sectorStats,
      districtStats,
      submissions,
      recentActivity,
      objCategoryCounts, // count data for category chart
    });
  } catch (error) {
    console.error("[ADMIN_STATS_GET]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
