"use client";

import { useState, useRef } from "react";

type Plan = "free" | "pro" | "business";

interface GeneratedQR {
  dataUrl: string;
  shortCode: string;
  id: string;
}

export default function QRGenerator({ plan = "free" }: { plan?: Plan }) {
  const [url, setUrl] = useState("");
  const [label, setLabel] = useState("");
  const [color, setColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(300);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<GeneratedQR | null>(null);
  const imgRef = useRef<HTMLButtonElement>(null);

  const isPro = plan === "pro" || plan === "business";

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, label, color, bgColor, size }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Generation failed");
      }

      const data = await res.json();
      setResult(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function handleDownload() {
    if (!result) return;
    const link = document.createElement("a");
    link.href = result.dataUrl;
    link.download = `qr-${label || "code"}.png`;
    link.click();
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleGenerate} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Destination URL <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://your-link.com"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Label <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="e.g. Restaurant Menu"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>

        {isPro ? (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">QR Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-12 h-10 rounded-lg border border-gray-200 cursor-pointer"
                />
                <span className="text-sm text-gray-500 font-mono">{color}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Background</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-12 h-10 rounded-lg border border-gray-200 cursor-pointer"
                />
                <span className="text-sm text-gray-500 font-mono">{bgColor}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-3 bg-brand-50 border border-brand-100 rounded-xl p-4">
            <span className="text-brand-600 text-lg">🎨</span>
            <div>
              <p className="text-sm font-semibold text-brand-900">Custom colors available on Pro</p>
              <p className="text-xs text-brand-700 mt-0.5">
                Upgrade to add your brand colors and logo overlay.{" "}
                <a href="/#pricing" className="underline font-medium">See plans →</a>
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-100 text-red-700 text-sm rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors text-base"
        >
          {loading ? "Generating…" : "Generate QR Code"}
        </button>
      </form>

      {result && (
        <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center gap-6">
          <h3 className="text-lg font-bold text-gray-900">Your QR Code is ready!</h3>
          <img
            src={result.dataUrl}
            alt="Generated QR code"
            width={size}
            height={size}
            className="rounded-xl border border-gray-100 shadow-sm"
            style={{ maxWidth: 300 }}
          />
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              ref={imgRef}
              className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PNG
            </button>
            <button
              onClick={() => { setResult(null); setUrl(""); setLabel(""); }}
              className="px-6 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-300 transition-colors"
            >
              New QR code
            </button>
          </div>

          {!isPro && (
            <div className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600">
                Want to track how many times this QR is scanned?{" "}
                <a href="/#pricing" className="text-brand-600 font-semibold underline">
                  Upgrade to Pro →
                </a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
