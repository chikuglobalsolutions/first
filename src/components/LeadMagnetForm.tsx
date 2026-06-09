"use client";

import { useState } from "react";

type Props = {
  /** Tag the source for attribution in the leads table. */
  source: string;
  /** Optional CTA description that gets stored as context. */
  context?: string;
  /** Headline above the form. */
  headline?: string;
  /** Sub-line under the headline. */
  sub?: string;
  /** Button label. */
  cta?: string;
};

export function LeadMagnetForm({
  source,
  context,
  headline = "Want the highest-converting prompt in the pack? Free.",
  sub = "Drop your email — we'll send the 30-Day Content Machine PDF + one bonus prompt we usually charge for.",
  cta = "Send me the free PDF",
}: Props) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, context }),
      });
      const data = (await res.json()) as { ok: boolean; downloadUrl?: string; error?: string };
      if (!data.ok) {
        setState("error");
        setErrorMsg(data.error ?? "Something went wrong. Try again?");
        return;
      }
      setDownloadUrl(data.downloadUrl ?? null);
      setState("success");
    } catch {
      setState("error");
      setErrorMsg("Network error — try again in a sec.");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-violet-500/10 border border-violet-500/30 rounded-2xl p-6 text-center">
        <p className="text-xs font-bold text-violet-300 uppercase tracking-widest mb-3">You&apos;re in</p>
        <h3 className="text-xl font-extrabold text-white mb-2">Check your inbox for the PDF.</h3>
        <p className="text-sm text-gray-400 mb-5">
          If it&apos;s not there in 2 minutes, you can also grab it directly here.
        </p>
        {downloadUrl ? (
          <a
            href={downloadUrl}
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Download the 30-Day Content Machine →
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 md:p-7 max-w-xl mx-auto"
    >
      <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-3">Free download</p>
      <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight">{headline}</h3>
      <p className="text-sm text-gray-400 mb-5 leading-relaxed">{sub}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourbusiness.com"
          autoComplete="email"
          inputMode="email"
          className="flex-1 bg-gray-900 border border-white/10 focus:border-violet-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors whitespace-nowrap"
        >
          {state === "loading" ? "Sending…" : cta}
        </button>
      </div>
      {errorMsg ? <p className="text-xs text-red-400 mt-3">{errorMsg}</p> : null}
      <p className="text-xs text-gray-600 mt-4">
        No spam. Unsubscribe with one click. We never share your email.
      </p>
    </form>
  );
}
