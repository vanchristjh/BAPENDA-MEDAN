import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { CMSService } from "@/lib/services/cms";
import { z } from "zod";

const NewsPatchSchema = z.object({
  title: z.string().min(5).max(200).optional(),
  summary: z.string().min(10).max(500).optional(),
  content: z.string().min(20).max(20000).optional(),
  category: z.string().min(2).max(50).optional(),
  isActive: z.boolean().optional(),
});

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session || !["ADMIN", "DEVELOPER"].includes((session.user as { role: string }).role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const parsed = NewsPatchSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const updated = await CMSService.updateNews(id, session.user.id, parsed.data);
    return NextResponse.json(updated);
  } catch (err: unknown) {
    console.error("[NEWS_PATCH_ERROR]", err);
    return NextResponse.json({ error: "Failed to update news" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await getServerSession(authOptions);
    if (!session || !["ADMIN", "DEVELOPER"].includes((session.user as { role: string }).role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await CMSService.deleteNews(id, session.user.id);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("[NEWS_DELETE_ERROR]", err);
    return NextResponse.json({ error: "Failed to delete news" }, { status: 500 });
  }
}
