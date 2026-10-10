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

    const zones = await prisma.landValueZone.findMany({ take: 100, orderBy: { createdAt: "desc" } });

    // DB-side count + avg per zone (was per-zone findMany 2k + JS reduce)
    const zoneStats = await Promise.all(zones.map(async (zone) => {
      const where = { address: { contains: zone.district, mode: "insensitive" as const } };
      const [taxObjectCount, njopAgg] = await Promise.all([
        prisma.taxObject.count({ where }),
        prisma.taxObject.aggregate({ where, _avg: { njop: true } }),
      ]);
      const avgNJOP = Math.round(Number(njopAgg._avg?.njop ?? 0));

      return {
        ...zone,
        taxObjectCount,
        avgNJOP
      };
    }));

    return NextResponse.json({ zones: zoneStats });
  } catch (error) {
    console.error("[GET_ZNT_API]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
