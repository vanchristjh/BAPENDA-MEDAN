const buckets = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, max = 30, windowMs = 60_000): boolean {
  const now = Date.now();
  const hit = buckets.get(key);
  if (!hit || now > hit.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  hit.count += 1;
  return hit.count <= max;
}

export function clientKey(req: Request): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";
}
