import { NextRequest, NextResponse } from "next/server";
import { TaxService } from "@/lib/services/tax";
import { rateLimit, clientKey } from "@/lib/rate-limit";
import { z } from "zod";

const NopSchema = z.string().min(5).max(32);
const SimulateSchema = z.object({
  type: z.string().min(2).max(50),
  value: z.coerce.number().nonnegative().max(1e15),
});

/**
 * GET /api/tax/check?nop=12.71.000.000...
 */
export async function GET(req: NextRequest) {
  if (!rateLimit(`tax-check:${clientKey(req)}`, 30, 60_000)) {
    return NextResponse.json({ success: false, message: "Terlalu banyak permintaan. Coba lagi nanti." }, { status: 429 });
  }
  const { searchParams } = new URL(req.url);
  const nop = searchParams.get("nop");

  if (!nop || !NopSchema.safeParse(nop).success) {
     return NextResponse.json({ 
       success: false, 
       message: "Nomor Objek Pajak (NOP) harus diisi." 
     }, { status: 400 });
  }

  const result = await TaxService.getTaxBillByNOP(nop);

  if (!result.success) {
     return NextResponse.json({ 
       success: false, 
       message: result.error 
     }, { status: 404 });
  }

  return NextResponse.json(result);
}

/**
 * POST /api/tax/simulate
 */
export async function POST(req: NextRequest) {
  try {
    const parsed = SimulateSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({
        success: false,
        message: "Tipe pajak dan nilai dasar harus diisi.",
        details: parsed.error.flatten().fieldErrors,
      }, { status: 400 });
    }
    const { type, value } = parsed.data;

    const result = await TaxService.calculateSimulation(type, value);
    return NextResponse.json(result);
  } catch (err: unknown) {
    console.error("[TAX_SIMULATE_ERROR]", err);
    return NextResponse.json({ 
      success: false, 
      message: "Internal Server Error" 
    }, { status: 500 });
  }
}
