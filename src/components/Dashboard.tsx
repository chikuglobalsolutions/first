"use client";

import { useState } from "react";

interface QRCodeData {
  id: string;
  url: string;
  label: string | null;
  scans: number;
  shortCode: string;
  createdAt: string;
}

interface DashboardProps {
  qrCodes: QRCodeData[];
  plan: string;
  userEmail: string;
}

export default function Dashboard({ qrCodes, plan, userEmail }: DashboardProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const totalScans = qrCodes.reduce((acc, qr) => acc + qr.scans, 0);
  const isPro = plan === "pro" || plan === "business";

  async function copyLink(shortCode: string) {
    const baseUrl = window.location.origin;
    await navigator.clipboard.writeText(`${baseUrl}/api/scan/${shortCode}`);
    setCopied(shortCode);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">{userEmail}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
            isPro ? "bg-brand-100 text-brand-700" : "bg-gray-100 text-gray-600"
          }`}>
            {plan} plan
          </span>
          {!isPro && (
            <a
              href="/#pricing"
              className="text-sm font-semibold bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors"
            >
              Upgrade →
            </a>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        {[
          { label: "QR Codes", value: qrCodes.length },
          { label: "Total Scans", value: isPro ? totalScans : "—" },
          { label: "Plan", value: plan.charAt(0).toUpperCase() + plan.slice(1) },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <p className="text-3xl font-extrabold text-gray-900 mt-1">{stat.value}</p>
            {!isPro && stat.label === "Total Scans" && (
              <p className="text-xs text-brand-600 mt-1 font-medium">
                <a href="/#pricing">Upgrade to unlock →</a>
              </p>
            )}
          </div>
        ))}
      </div>

      {/* QR list */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <h2 className="font-bold text-gray-900">Your QR Codes</h2>
          <a
            href="/generate"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            + New QR code
          </a>
        </div>

        {qrCodes.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            <p className="text-4xl mb-4">📱</p>
            <p className="font-medium">No QR codes yet</p>
            <a href="/generate" className="text-brand-600 font-semibold text-sm mt-2 inline-block">
              Create your first one →
            </a>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {qrCodes.map((qr) => (
              <div key={qr.id} className="px-6 py-4 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900 truncate">{qr.label || "Untitled"}</p>
                  <p className="text-sm text-gray-400 truncate">{qr.url}</p>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  {isPro && (
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{qr.scans}</p>
                      <p className="text-xs text-gray-400">scans</p>
                    </div>
                  )}

                  <button
                    onClick={() => copyLink(qr.shortCode)}
                    className="text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {copied === qr.shortCode ? "Copied!" : "Copy link"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {!isPro && (
        <div className="mt-8 bg-brand-50 border border-brand-100 rounded-2xl p-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-bold text-brand-900">Unlock analytics & custom branding</p>
            <p className="text-sm text-brand-700 mt-1">
              See how many times each QR is scanned, from where, and on what device.
            </p>
          </div>
          <a
            href="/api/stripe/checkout?plan=pro"
            className="flex-shrink-0 bg-brand-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-brand-700 transition-colors text-sm"
          >
            Upgrade to Pro
          </a>
        </div>
      )}
    </div>
  );
}
