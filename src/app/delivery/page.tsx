import type { Metadata } from "next";
import Link from "next/link";
import { stripe } from "@/lib/stripe";
import {
  PDF_FILES,
  matchProductByName,
  type PdfKey,
} from "@/lib/promptempire-catalog";
import Stripe from "stripe";

export const metadata: Metadata = {
  title: "Your Downloads — PromptEmpire",
  robots: { index: false, follow: false },
};

function isLikelySessionId(value: string): boolean {
  return /^cs_(test|live)_[a-zA-Z0-9]+$/.test(value);
}

type Verified = {
  ok: true;
  session: Stripe.Checkout.Session;
  pdfs: PdfKey[];
  productNames: string[];
};

type Failed = {
  ok: false;
  reason: "no-session" | "bad-format" | "not-found" | "not-paid" | "no-products";
};

async function verifySession(sessionId: string | undefined): Promise<Verified | Failed> {
  if (!sessionId) return { ok: false, reason: "no-session" };
  if (!isLikelySessionId(sessionId)) return { ok: false, reason: "bad-format" };

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"],
    });
  } catch {
    return { ok: false, reason: "not-found" };
  }

  if (session.payment_status !== "paid") return { ok: false, reason: "not-paid" };

  const productNames: string[] = [];
  const unlocked = new Set<PdfKey>();
  for (const item of session.line_items?.data ?? []) {
    const product = item.price?.product;
    const name = product && typeof product === "object" && "name" in product ? product.name : "";
    if (!name) continue;
    productNames.push(name);
    const matched = matchProductByName(name);
    if (matched) for (const k of matched.includes) unlocked.add(k);
  }

  if (unlocked.size === 0) return { ok: false, reason: "no-products" };
  return { ok: true, session, pdfs: Array.from(unlocked), productNames };
}

function formatAmount(amount: number | null, currency: string | null): string | null {
  if (amount == null || !currency) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

function formatDate(unix: number | null): string | null {
  if (!unix) return null;
  return new Date(unix * 1000).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function DeliveryPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const result = await verifySession(session_id);

  if (!result.ok) return <ErrorState reason={result.reason} />;

  const { session, pdfs, productNames } = result;
  const sessionId = session.id;
  const customerName = session.customer_details?.name ?? null;
  const customerEmail = session.customer_details?.email ?? null;
  const orderTotal = formatAmount(session.amount_total, session.currency);
  const orderDate = formatDate(session.created);
  const firstName = customerName ? customerName.split(" ")[0] : null;

  return (
    <main className="min-h-screen bg-pe-softBg">
      {/* Top confirmation strip */}
      <div className="bg-emerald-600 text-white text-center py-3 px-4 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
        Order confirmed · Your downloads are below
      </div>

      <header className="bg-white border-b border-pe-cloud/60 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold tracking-[0.18em] text-pe-cyan uppercase">Chiku Global Solutions</p>
          <p className="text-lg font-extrabold text-pe-navy leading-tight tracking-tight">PromptEmpire</p>
        </div>
        <span className="text-[10px] font-bold bg-pe-mist text-pe-navy border border-pe-cyan/30 px-3 py-1 rounded-full uppercase tracking-[0.14em]">
          Delivery
        </span>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-pe-navy to-pe-navyDeep text-white text-center px-5 pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pe-cyan/40 to-transparent" />
        <div className="relative max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.1] tracking-tight">
            {firstName ? <>Welcome in, <span className="text-pe-cyan">{firstName}.</span></> : <>Welcome to <span className="text-pe-cyan">PromptEmpire.</span></>}
          </h1>
          <p className="text-pe-cloud/90 text-lg max-w-lg mx-auto leading-relaxed">
            Your files are ready below. Save them to your device — they&apos;re yours for life.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 -mt-14 relative pb-14">
        {/* Receipt summary card */}
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_-12px_rgba(27,58,107,0.25)] border border-pe-cloud/60 p-5 sm:p-6 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <ReceiptCell label="Order date" value={orderDate ?? "—"} />
            <ReceiptCell label="Email" value={customerEmail ?? "—"} mono />
            <ReceiptCell label="Total" value={orderTotal ?? "—"} />
            <ReceiptCell
              label="Order ID"
              value={`#${sessionId.slice(-8).toUpperCase()}`}
              mono
            />
          </div>
          {productNames.length > 0 && (
            <p className="mt-5 pt-4 border-t border-pe-cloud/60 text-xs text-pe-slate">
              <span className="font-semibold text-pe-navy">You unlocked:</span>{" "}
              {productNames.join(" · ")}
            </p>
          )}
        </div>

        {/* Downloads */}
        <h2 className="text-xs font-bold text-pe-cyan tracking-[0.16em] uppercase mb-3 px-1">
          Your downloads · {pdfs.length} {pdfs.length === 1 ? "file" : "files"}
        </h2>
        <div className="space-y-3">
          {pdfs.map((key, i) => {
            const file = PDF_FILES[key];
            const isPrimary = i === 0;
            return (
              <div
                key={key}
                className={`relative group bg-white rounded-2xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 transition-all ${
                  isPrimary
                    ? "border-2 border-pe-cyan shadow-[0_8px_24px_-10px_rgba(0,180,216,0.45)]"
                    : "border border-pe-cloud/60 hover:border-pe-cyan/50 hover:shadow-sm"
                }`}
              >
                {isPrimary && (
                  <span className="absolute -top-2.5 left-5 bg-pe-cyan text-pe-ink text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-[0.14em] uppercase">
                    Start here
                  </span>
                )}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isPrimary ? "bg-pe-mist" : "bg-pe-softBg"
                }`}>
                  <svg className="w-7 h-7 text-pe-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" strokeWidth={1.5} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-extrabold text-pe-navy leading-tight">{file.displayName}</p>
                  <p className="text-xs text-pe-slate mt-1 flex items-center gap-2">
                    <span>PDF</span>
                    <span className="text-pe-cloud">·</span>
                    <span>~{file.sizeKb} KB</span>
                  </p>
                </div>
                <a
                  href={`/api/delivery/download/${key}?session_id=${encodeURIComponent(sessionId)}`}
                  className={`flex-shrink-0 font-bold text-sm rounded-xl transition-all whitespace-nowrap inline-flex items-center gap-2 ${
                    isPrimary
                      ? "bg-pe-cyan hover:bg-pe-navy text-pe-ink hover:text-white px-5 py-3"
                      : "bg-white hover:bg-pe-mist text-pe-navy border border-pe-cloud px-4 py-2.5"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </a>
              </div>
            );
          })}
        </div>

        {/* What to do next */}
        <div className="mt-8 bg-white border border-pe-cloud/60 rounded-2xl p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold text-pe-cyan tracking-[0.16em] uppercase">First 30 minutes</span>
            <span className="h-px bg-pe-cloud flex-1" />
          </div>
          <ol className="space-y-3">
            {[
              "Save every file somewhere you'll actually find it (Drive, Notion, or a dedicated folder).",
              "Open the 500 AI Business Prompts PDF and skim the section table on page 2.",
              "Pick the section that matches your biggest current problem and run prompt #1 in Claude or ChatGPT.",
              "Bookmark this page — your downloads stay valid for lifetime access.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-pe-ink leading-relaxed">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pe-mist text-pe-navy text-xs font-bold flex items-center justify-center mt-px">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Trust + support row */}
        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <div className="bg-pe-mist/40 border border-pe-cyan/20 rounded-2xl px-5 py-4 flex items-center gap-3">
            <svg className="w-5 h-5 text-pe-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-xs font-bold text-pe-navy uppercase tracking-[0.1em]">Lifetime access</p>
              <p className="text-xs text-pe-slate mt-0.5">Re-download anytime from this page.</p>
            </div>
          </div>
          <div className="bg-white border border-pe-cloud/60 rounded-2xl px-5 py-4 flex items-center gap-3">
            <svg className="w-5 h-5 text-pe-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-xs text-pe-slate leading-relaxed">
              Trouble downloading?{" "}
              <a
                href={`mailto:chikuglobalsolutions@gmail.com?subject=PromptEmpire%20download%20help&body=Order%20ID%3A%20${encodeURIComponent(sessionId.slice(-8).toUpperCase())}%0AEmail%3A%20${encodeURIComponent(customerEmail ?? "")}`}
                className="text-pe-cyan font-bold hover:text-pe-navy"
              >
                Email support
              </a>{" "}— replies within 24h.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-pe-navyDeep text-pe-cloud/70 text-center text-xs py-7 px-4">
        <p>
          <Link href="/" className="text-white hover:text-pe-cyan font-semibold transition-colors">
            Chiku Global Solutions LLC
          </Link>
          {" · "}Wyoming{" · "}chikuglobalsolutions@gmail.com
        </p>
        <p className="mt-1 text-pe-cloud/50">© {new Date().getFullYear()} Chiku Global Solutions LLC — All rights reserved</p>
      </footer>
    </main>
  );
}

function ReceiptCell({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p className="text-[10px] font-bold text-pe-slate uppercase tracking-[0.12em]">{label}</p>
      <p
        className={`text-sm font-semibold text-pe-navy mt-1 truncate ${
          mono ? "font-mono text-[13px]" : ""
        }`}
        title={value}
      >
        {value}
      </p>
    </div>
  );
}

function ErrorState({ reason }: { reason: Failed["reason"] }) {
  const messages: Record<Failed["reason"], { title: string; body: string }> = {
    "no-session": {
      title: "We need your order to find your downloads.",
      body: "Open the link in your order confirmation email — it includes the Stripe session ID we use to verify your purchase. If you can't find it, email us below and we'll resend the files.",
    },
    "bad-format": {
      title: "That order ID doesn't look right.",
      body: "Double-check the link in your order confirmation email, or email us and we'll send the files directly.",
    },
    "not-found": {
      title: "We couldn't find that order.",
      body: "Stripe doesn't recognize that session ID. It may have expired (sessions older than ~24 hours can drop out of the API). Email us and we'll verify your purchase and resend the files.",
    },
    "not-paid": {
      title: "Payment is still processing.",
      body: "We saw your order but Stripe hasn't marked it paid yet. Wait a minute and refresh — if it still won't load, email us.",
    },
    "no-products": {
      title: "We don't have a download for that purchase.",
      body: "Your payment went through, but it doesn't match any of our PromptEmpire products. Email us and we'll sort it out.",
    },
  };
  const m = messages[reason];

  return (
    <main className="min-h-screen bg-pe-softBg flex flex-col">
      <header className="bg-white border-b border-pe-cloud/60 px-6 py-4">
        <p className="text-[10px] font-bold tracking-[0.18em] text-pe-cyan uppercase">Chiku Global Solutions</p>
        <p className="text-lg font-extrabold text-pe-navy leading-tight tracking-tight">PromptEmpire</p>
      </header>

      <div className="flex-1 flex items-center justify-center px-5 py-16">
        <div className="max-w-md w-full bg-white border border-pe-cloud/60 rounded-2xl p-8 text-center shadow-[0_10px_30px_-12px_rgba(27,58,107,0.18)]">
          <div className="w-14 h-14 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-pe-navy mb-3 leading-tight">{m.title}</h1>
          <p className="text-sm text-pe-slate leading-relaxed mb-6">{m.body}</p>
          <a
            href="mailto:chikuglobalsolutions@gmail.com?subject=PromptEmpire%20download%20help"
            className="inline-flex items-center gap-2 bg-pe-cyan hover:bg-pe-navy text-pe-ink hover:text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email support
          </a>
        </div>
      </div>

      <footer className="bg-pe-navyDeep text-pe-cloud/70 text-center text-xs py-7 px-4">
        <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
      </footer>
    </main>
  );
}
