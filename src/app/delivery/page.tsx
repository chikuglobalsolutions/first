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

// Stripe Checkout Session IDs that we should accept.
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
  reason:
    | "no-session"
    | "bad-format"
    | "not-found"
    | "not-paid"
    | "no-products";
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

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-emerald-600 text-white text-center py-3 px-4 text-sm font-bold tracking-wide flex items-center justify-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
        ORDER CONFIRMED — YOUR DOWNLOADS ARE BELOW
      </div>

      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold tracking-widest text-sky-500 uppercase">Chiku Global Solutions</p>
          <p className="text-lg font-extrabold text-gray-900 leading-tight">PromptEmpire</p>
        </div>
        <span className="text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1 rounded-full uppercase tracking-widest">
          Delivery Page
        </span>
      </header>

      <div className="bg-gray-900 text-white text-center py-14 px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
          {customerName ? `Welcome, ${customerName.split(" ")[0]}.` : "Welcome to PromptEmpire."}
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Your downloads are ready. Save them to your device and open them in any PDF reader.
        </p>
        {productNames.length > 0 && (
          <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">
            You purchased: {productNames.join(" · ")}
          </p>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-5 py-10 -mt-6 relative">
        <div className="space-y-4">
          {pdfs.map((key, i) => {
            const file = PDF_FILES[key];
            return (
              <div
                key={key}
                className={`bg-white rounded-2xl p-6 flex items-center gap-5 shadow-sm ${
                  i === 0 ? "border-2 border-sky-400" : "border border-gray-200"
                }`}
              >
                <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" strokeWidth={1.5} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-extrabold text-gray-900 mb-1">{file.displayName}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Save to your device — opens in any modern PDF reader.
                  </p>
                </div>
                <a
                  href={`/api/delivery/download/${key}?session_id=${encodeURIComponent(sessionId)}`}
                  className="flex-shrink-0 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
                >
                  Download
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-sky-50 border-l-4 border-sky-400 rounded-xl p-6">
          <h3 className="font-extrabold text-gray-900 mb-4">What to do next</h3>
          <ol className="space-y-2.5 list-decimal list-inside text-sm text-gray-700 leading-relaxed">
            <li>Save every file above somewhere you&apos;ll actually find it.</li>
            <li>Open the 500 AI Business Prompts PDF and browse the categories.</li>
            <li>Try Prompt #1 in your niche in ChatGPT (free) or Claude.</li>
            <li>Bookmark this page — your download link stays valid for lifetime access.</li>
          </ol>
        </div>

        <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-sm text-gray-500">
            Trouble downloading? Email{" "}
            <a href="mailto:chikuglobalsolutions@gmail.com" className="text-sky-500 font-bold hover:text-sky-700">
              chikuglobalsolutions@gmail.com
            </a>{" "}
            with your order email — we&apos;ll resend the files.
          </p>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-500 text-center text-xs py-6 px-4 mt-10">
        <p>
          <Link href="/" className="text-gray-400 hover:text-white font-semibold">
            Chiku Global Solutions LLC
          </Link>
          {" · "}Wyoming{" · "}chikuglobalsolutions@gmail.com
        </p>
        <p className="mt-1">© {new Date().getFullYear()} Chiku Global Solutions LLC — All rights reserved</p>
      </footer>
    </main>
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
      body: "Stripe doesn't recognize that session ID. It may have expired (Stripe sessions older than ~24 hours can drop out of the API). Email us and we'll verify your purchase and resend the files.",
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
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <p className="text-xs font-bold tracking-widest text-sky-500 uppercase">Chiku Global Solutions</p>
        <p className="text-lg font-extrabold text-gray-900 leading-tight">PromptEmpire</p>
      </header>

      <div className="flex-1 flex items-center justify-center px-5 py-16">
        <div className="max-w-md w-full bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <div className="w-12 h-12 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-3">{m.title}</h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">{m.body}</p>
          <a
            href="mailto:chikuglobalsolutions@gmail.com?subject=PromptEmpire%20download%20help"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Email support
          </a>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-500 text-center text-xs py-6 px-4">
        <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
      </footer>
    </main>
  );
}
