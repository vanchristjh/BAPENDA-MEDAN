import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { AuditService } from "@/lib/services/audit";
import { z } from "zod";

const TaxObjectSchema = z.object({
  nop: z.string().min(5).max(32),
  type: z.string().min(2).max(50),
  name: z.string().min(3).max(200),
  address: z.string().min(5).max(500),
  luasTanah: z.coerce.number().nonnegative().max(1e9).optional().default(0),
  luasBangun: z.coerce.number().nonnegative().max(1e9).optional().default(0),
}).refine((data) => data.address && data.address.trim().length > 0, {
  message: "Alamat objek pajak wajib diisi",
  path: ["address"],
});

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const objects = await prisma.taxObject.findMany({
      where: { ownerId: session.user.id },
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    return NextResponse.json(objects);
  } catch (error) {
    console.error("[TAX_OBJECTS_GET]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const parsed = TaxObjectSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { nop, type, name, address, luasTanah, luasBangun } = parsed.data;

    const object = await prisma.taxObject.create({
      data: {
        nop,
        type,
        name,
        address,
        luasTanah: luasTanah ?? 0,
        luasBangun: luasBangun ?? 0,
        ownerId: session.user.id,
        status: "PENDING",
      },
    });

    await AuditService.log({
      userId: session.user.id,
      action: "CREATE_TAX_OBJECT",
      table: "TaxObject",
      recordId: object.id,
      newValue: object,
    });

    return NextResponse.json(object);
  } catch (error) {
    console.error("[TAX_OBJECTS_POST]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
