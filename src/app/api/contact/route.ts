import { NextRequest, NextResponse } from "next/server";
import { validateContact } from "@/lib/validation/contact";
import { rateLimit } from "@/lib/rateLimit";
import { deliverContactEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const rl = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 });
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter) } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  const sent = await deliverContactEmail(result.data);
  if (!sent.ok) {
    return NextResponse.json(
      {
        error:
          "We could not deliver your message right now. Please email meridianbillingco@gmail.com directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
