import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { AuditService } from "@/lib/services/audit";
import bcrypt from "bcryptjs";
import { z } from "zod";

const UpdateUserSchema = z.object({
  id: z.string().min(1).max(100),
  name: z.string().min(2).max(100).optional(),
  email: z.string().email().max(100).optional(),
  phone: z.string().max(20).optional(),
  nik: z.string().length(16).optional().or(z.literal("")),
  role: z.enum(["USER", "OFFICER", "ADMIN", "MAHASISWA", "DEVELOPER"]).optional(),
  isActive: z.boolean().optional(),
  password: z.string().min(8).max(100).optional(),
});

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || !["ADMIN", "DEVELOPER", "OFFICER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const url = new URL(req.url);
    const hasPagination = url.searchParams.has("page") || url.searchParams.has("pageSize");
    const page = Math.max(1, parseInt(url.searchParams.get("page") || "1"));
    const pageSize = hasPagination ? Math.min(100, Math.max(1, parseInt(url.searchParams.get("pageSize") || "20"))) : 20;
    const search = url.searchParams.get("search") || "";
    const role = url.searchParams.get("role") || "";
    const status = url.searchParams.get("status") || "";
    const region = url.searchParams.get("region") || "";

    const where: Record<string, unknown> = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { nik: { contains: search } },
      ];
    }

    if (role && ["USER", "OFFICER", "ADMIN", "MAHASISWA", "DEVELOPER"].includes(role)) {
      where.role = role;
    }

    if (status === "ACTIVE") where.isActive = true;
    else if (status === "INACTIVE") where.isActive = false;

    if (region) {
      where.address = { contains: region, mode: "insensitive" };
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          nik: true,
          phone: true,
          address: true,
          isActive: true,
          createdAt: true,
          _count: { select: { taxObjects: true, payments: true } },
          payments: {
            take: 5,
            orderBy: { createdAt: "desc" },
            select: {
              id: true,
              amount: true,
              status: true,
              createdAt: true,
              taxObject: {
                select: {
                  name: true,
                  nop: true
                }
              }
            }
          },
          auditLogs: {
            take: 5,
            orderBy: { createdAt: "desc" },
            select: {
              id: true,
              action: true,
              table: true,
              createdAt: true,
            }
          }
        },
      }),
      prisma.user.count({ where }),
    ]);

    return NextResponse.json({
      users,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("[USERS_GET_ERROR]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || !["ADMIN", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const parsed = UpdateUserSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { id, name, email, phone, nik, role, isActive, password } = parsed.data;
    const oldUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!oldUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const data: Record<string, unknown> = {
      ...(name !== undefined && { name }),
      ...(email !== undefined && { email }),
      ...(phone !== undefined && { phone }),
      ...(nik !== undefined && { nik }),
      ...(role !== undefined && { role }),
      ...(isActive !== undefined && { isActive }),
    };

    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    const updated = await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        nik: true,
        phone: true,
        isActive: true,
      },
    });

    await AuditService.log({
      userId: session.user.id,
      action: "UPDATE_USER",
      table: "User",
      recordId: updated.id,
      oldValue: oldUser || undefined,
      newValue: updated,
    });

    return NextResponse.json({ user: updated });
  } catch (error) {
    console.error("[USER_PATCH_ERROR]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

const CreateUserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(100),
  password: z.string().min(8).max(100),
  role: z.enum(["USER", "OFFICER", "ADMIN", "MAHASISWA", "DEVELOPER"]).optional(),
  nik: z.string().length(16).optional().or(z.literal("")),
  phone: z.string().max(20).optional(),
  address: z.string().max(500).optional(),
  isActive: z.boolean().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || !["ADMIN", "DEVELOPER"].includes(session.user.role)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const parsed = CreateUserSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Validasi gagal", details: parsed.error.flatten().fieldErrors }, { status: 400 });
    }
    const { name, email, password, role, nik, phone, address, isActive } = parsed.data;
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return NextResponse.json({ error: "Email already exists" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || "USER",
        nik: nik || null,
        phone: phone || null,
        address: address || null,
        isActive: isActive !== undefined ? isActive : true,
      },
    });

    await AuditService.log({
      userId: session.user.id,
      action: "CREATE_USER",
      table: "User",
      recordId: user.id,
      newValue: { id: user.id, email: user.email, role: user.role },
    });

    return NextResponse.json({ success: true, user: { id: user.id, email: user.email } });
  } catch (error) {
    console.error("[USER_POST_ERROR]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
