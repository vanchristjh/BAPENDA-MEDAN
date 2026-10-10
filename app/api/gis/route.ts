import { NextRequest, NextResponse } from "next/server";
import { GISService } from "@/lib/services/gis";
import { rateLimit, clientKey } from "@/lib/rate-limit";

export async function GET(req: NextRequest) {
  if (!rateLimit(`gis:${clientKey(req)}`, 30, 60_000)) {
    return NextResponse.json({ error: "Terlalu banyak permintaan. Coba lagi nanti." }, { status: 429 });
  }
  try {
    const { success, data, error } = await GISService.getTaxObjectCoordinates();
    
    if (!success) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error("[GIS_API_ERROR]", error);
    return NextResponse.json({ error: "GIS process failed" }, { status: 500 });
  }
}
