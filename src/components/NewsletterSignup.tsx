"use client";

import { useState } from "react";

type Brand = "promptempire" | "chiku-fit" | "ai-systems" | "qr" | "chiku";
type Status = "idle" | "submitting" | "success" | "error";

// Full static class strings per brand — Tailwind purges dynamically
// constructed names (`bg-${x}-600`), so every class must appear literally.
const THEME: Record<
  Brand,
  { successBorder: string; incentive: string; button: string; check: string }
> = {
  promptempire: {
    successBorder: "border-violet-500/30",
    incentive: "text-violet-300 bg-violet-500/10 border-violet-500/20",
    button: "bg-violet-600 hover:bg-violet-500 shadow-violet-900/40",
    check: "accent-violet-500",
  },
  "chiku-fit": {
    successBorder: "border-emerald-500/30",
    incentive: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
    button: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/40",
    check: "accent-emerald-500",
  },
  "ai-systems": {
    successBorder: "border-sky-500/30",
    incentive: "text-sky-300 bg-sky-500/10 border-sky-500/20",
    button: "bg-sky-600 hover:bg-sky-500 shadow-sky-900/40",
    check: "accent-sky-500",
  },
  qr: {
    successBorder: "border-indigo-500/30",
    incentive: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
    button: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-900/40",
    check: "accent-indigo-500",
  },
  chiku: {
    successBorder: "border-sky-500/30",
    incentive: "text-sky-300 bg-sky-500/10 border-sky-500/20",
    button: "bg-sky-600 hover:bg-sky-500 shadow-sky-900/40",
    check: "accent-sky-500",
  },
};

export default function NewsletterSignup({
  brand = "chiku",
  source = "site-signup",
  heading = "Get the good stuff first",
  subheading = "Join the list. No spam, unsubscribe anytime.",
  cta = "Sign me up",
  incentive,
}: {
  brand?: Brand;
  source?: string;
  heading?: string;
  subheading?: string;
  cta?: string;
  incentive?: string;
}) {
  const theme = THEME[brand] ?? THEME.chiku;
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const consentText = `I agree to receive ${brand} email updates from Chiku Global Solutions and can unsubscribe anytime.`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email");
      return;
    }
    if (!consent) {
      setError("Please tick the box to confirm you want these emails");
      return;
    }
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), brand, source, consent: true, consentText }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className={`bg-white/[0.03] border ${theme.successBorder} rounded-2xl p-8 text-center`}>
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-xl font-extrabold text-white mb-2">You&apos;re in.</h3>
        <p className="text-gray-400 text-sm max-w-sm mx-auto">
          Check your inbox (and spam, just in case). We only send stuff worth opening.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 md:p-8">
      <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">{heading}</h3>
      <p className="text-sm text-gray-400 mb-5">{subheading}</p>
      {incentive && (
        <div className={`mb-5 text-sm font-semibold border rounded-lg px-4 py-2.5 ${theme.incentive}`}>
          🎁 {incentive}
        </div>
      )}
      <form onSubmit={submit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Email address"
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-[0.9375rem] outline-none focus:border-white/30 transition-colors placeholder:text-white/30"
        />
        <label className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed cursor-pointer select-none">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className={`mt-0.5 h-4 w-4 shrink-0 ${theme.check}`}
          />
          <span>{consentText}</span>
        </label>
        {error && (
          <div className="bg-red-900/20 border border-red-700/30 rounded-lg px-4 py-2.5 text-sm text-red-300">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`w-full px-6 py-3 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold transition-colors shadow-lg ${theme.button}`}
        >
          {status === "submitting" ? "Signing you up…" : cta}
        </button>
      </form>
    </div>
  );
}
