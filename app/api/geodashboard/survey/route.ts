import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AuditService } from "@/lib/services/audit";
import { NotificationService } from "@/lib/services/notification";
import { z } from "zod";

const SurveySchema = z.object({
  taxObjectId: z.string().min(1).max(100),
  status: z.enum(["PENDING", "VERIFIED", "REJECTED", "ACTIVE"]).optional(),
  latitude: z.coerce.number().min(-90).max(90).optional(),
  longitude: z.coerce.number().min(-180).max(180).optional(),
  image: z.string().max(500).optional(),
  note: z.string().max(1000).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !["ADMIN", "OFFICER", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const parsed = SurveySchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { taxObjectId, status, latitude, longitude, image, note } = parsed.data;

    const taxObject = await prisma.taxObject.findUnique({
      where: { id: taxObjectId },
    });

    if (!taxObject) {
      return NextResponse.json({ error: "Objek Pajak tidak ditemukan" }, { status: 404 });
    }

    // Update tax object status & coordinates
    const updatedObject = await prisma.taxObject.update({
      where: { id: taxObjectId },
      data: {
        status: status || taxObject.status,
        lat: latitude ?? taxObject.lat,
        lng: longitude ?? taxObject.lng,
      },
    });

    // Handle ObjectTaxLocation polygon updates or positioning
    let updatedLocation = null;
    if (latitude !== undefined && longitude !== undefined) {
      const latVal = latitude;
      const lngVal = longitude;
      const offset = 0.00015;
      const polygon = [
        [latVal - offset, lngVal - offset],
        [latVal + offset, lngVal - offset],
        [latVal + offset, lngVal + offset],
        [latVal - offset, lngVal + offset],
        [latVal - offset, lngVal - offset]
      ];

      updatedLocation = await prisma.objectTaxLocation.upsert({
        where: { objectTaxId: taxObjectId },
        update: {
          latitude: latVal,
          longitude: lngVal,
          polygonData: JSON.stringify(polygon)
        },
        create: {
          objectTaxId: taxObjectId,
          latitude: latVal,
          longitude: lngVal,
          polygonData: JSON.stringify(polygon)
        }
      });
    }

    // Send notifications to the owner of the object tax
    await NotificationService.notify({
      userId: taxObject.ownerId,
      title: "Verifikasi Lapangan Objek Pajak",
      message: `Status objek pajak Anda (${taxObject.name} - NOP: ${taxObject.nop}) diubah menjadi ${status} oleh Petugas Lapangan. Catatan: ${note || "-"}`,
      type: status === "VERIFIED" ? "SUCCESS" : "WARNING",
    });

    // Log the change
    await AuditService.log({
      userId: session.user.id,
      action: "FIELD_SURVEY_UPDATE",
      table: "TaxObject",
      recordId: taxObject.id,
      oldValue: { status: taxObject.status, lat: taxObject.lat, lng: taxObject.lng },
      newValue: { status, latitude, longitude, image, note }
    });

    return NextResponse.json({
      success: true,
      taxObject: updatedObject,
      location: updatedLocation
    });
  } catch (error) {
    console.error("[POST_SURVEY_API]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
