import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Bounded + DB-side averages (was two full-table scans with JS reduce)
    const [properties, marketAgg, njopAgg] = await Promise.all([
      prisma.propertyMarket.findMany({ take: 500, orderBy: { createdAt: "desc" } }),
      prisma.propertyMarket.aggregate({ _avg: { marketPrice: true } }),
      prisma.taxObject.aggregate({ where: { type: "PBB-P2" }, _avg: { njop: true } }),
    ]);

    // Average price and comparisons
    const avgMarketPrice = Number(marketAgg._avg.marketPrice ?? 0);

    // Let's get the average NJOP of PBB-P2 objects for comparison
    const avgNJOP = Number(njopAgg._avg.njop ?? 0);

    const pctDiff = avgNJOP > 0 ? ((avgMarketPrice - avgNJOP) / avgNJOP) * 100 : 0;

    return NextResponse.json({
      properties,
      statistics: {
        avgMarketPrice,
        avgNJOP,
        pctDiff
      }
    });
  } catch (error) {
    console.error("[GET_PROPERTY_MARKET_API]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
