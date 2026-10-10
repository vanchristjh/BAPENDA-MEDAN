import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NotificationService } from "@/lib/services/notification";
import { z } from "zod";

const MarkSchema = z.object({
  id: z.string().min(1).max(100).optional(),
  all: z.boolean().optional(),
});

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const notifications = await NotificationService.getUserNotifications(session.user.id, 50);
    return NextResponse.json({ notifications });
  } catch (error) {
    console.error("[NOTIFICATIONS_GET]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const parsed = MarkSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { id, all } = parsed.data;

    if (all) {
      await NotificationService.markAllAsRead(session.user.id);
    } else if (id) {
      await NotificationService.markAsRead(id, session.user.id);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[NOTIFICATIONS_PATCH]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
