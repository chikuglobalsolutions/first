import { NextRequest, NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { stripe } from "@/lib/stripe";
import {
  PDF_FILES,
  matchProductByName,
  type PdfKey,
} from "@/lib/promptempire-catalog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PDF_KEYS = new Set(Object.keys(PDF_FILES));

function isLikelySessionId(value: string): boolean {
  return /^cs_(test|live)_[a-zA-Z0-9]+$/.test(value);
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ product: string }> }
) {
  const { product } = await params;
  if (!PDF_KEYS.has(product)) {
    return NextResponse.json({ error: "Unknown product" }, { status: 404 });
  }

  const sessionId = req.nextUrl.searchParams.get("session_id");
  if (!sessionId || !isLikelySessionId(sessionId)) {
    return NextResponse.json({ error: "Missing or invalid session_id" }, { status: 400 });
  }

  // Re-validate the Stripe session — defense in depth even though /delivery already
  // checked. Someone landing here with a shared URL still needs a paid session that
  // entitles them to *this specific* product.
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"],
    });
  } catch {
    return NextResponse.json({ error: "Session not found" }, { status: 404 });
  }

  if (session.payment_status !== "paid") {
    return NextResponse.json({ error: "Order not paid" }, { status: 402 });
  }

  const unlocked = new Set<PdfKey>();
  for (const item of session.line_items?.data ?? []) {
    const sp = item.price?.product;
    const name = sp && typeof sp === "object" && "name" in sp ? sp.name : "";
    const matched = matchProductByName(name);
    if (matched) for (const k of matched.includes) unlocked.add(k);
  }

  if (!unlocked.has(product as PdfKey)) {
    return NextResponse.json(
      { error: "This product was not included in that purchase" },
      { status: 403 }
    );
  }

  const file = PDF_FILES[product as PdfKey];
  const pdfPath = join(process.cwd(), "private", "pdfs", file.filename);

  let bytes: Buffer;
  try {
    bytes = await readFile(pdfPath);
  } catch {
    return NextResponse.json({ error: "File not available" }, { status: 500 });
  }

  // Copy into a fresh ArrayBuffer to satisfy strict BodyInit typing — TS 5.7+
  // narrows Node's Buffer to ArrayBufferLike, which Response doesn't accept.
  const buf = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(buf).set(bytes);

  return new Response(buf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": String(bytes.byteLength),
      "Content-Disposition": `attachment; filename="${file.displayName}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
