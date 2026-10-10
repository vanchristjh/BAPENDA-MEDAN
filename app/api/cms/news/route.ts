import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { CMSService } from "@/lib/services/cms";
import { AuditService } from "@/lib/services/audit";
import { z } from "zod";

const NewsSchema = z.object({
  title: z.string().min(5).max(200),
  summary: z.string().min(10).max(500),
  content: z.string().min(20).max(20000),
  category: z.string().min(2).max(50).optional(),
});

export const dynamic = "force-dynamic";

export async function GET() {
  console.log("[GET] Request received for /api/cms/news");
  try {
    const news = await CMSService.getNews(true);
    console.log("[GET] News fetched successfully, count:", news?.length || 0);
    return NextResponse.json(news || []);
  } catch (err: unknown) {
    console.error("[API_NEWS_GET_ERROR]", err);
    // Explicitly return JSON even on error
    return NextResponse.json({ 
      error: "SERVER_ERROR", 
      message: err instanceof Error ? err.message : "Unexpected database error" 
    }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !["ADMIN", "DEVELOPER"].includes((session.user as { role: string }).role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const parsed = NewsSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { title, summary, content, category } = parsed.data;
    const news = await CMSService.createNews({
      title,
      summary,
      content,
      category,
      authorId: session.user.id as string,
    });

    await AuditService.log({
      userId: session.user.id as string,
      action: "CREATE_NEWS",
      table: "News",
      recordId: news.id,
      newValue: news
    });
    return NextResponse.json(news);
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to create news";
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
