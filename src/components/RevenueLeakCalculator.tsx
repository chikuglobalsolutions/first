"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const RESPONSE_RECOVERY: Record<string, { rate: number; label: string }> = {
  "under-1": { rate: 0, label: "Under 1 hour" },
  "1-4": { rate: 0.08, label: "1–4 hours" },
  "4-24": { rate: 0.15, label: "4–24 hours" },
  "over-24": { rate: 0.22, label: "Over 24 hours" },
};

// Recoverable share of no-shows once reminders + waitlist auto-fill are running.
const NO_SHOW_RECOVERY = 0.45;
// Dormant list is worked in staggered batches to protect deliverability.
const DORMANT_BATCH_DIVISOR = 6;
const DORMANT_CONVERSION = 0.02;

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

type Leak = {
  key: string;
  title: string;
  monthly: number;
  formula: string;
  system: { name: string; slug: string };
};

export default function RevenueLeakCalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(80);
  const [dealValue, setDealValue] = useState(1200);
  const [closeRate, setCloseRate] = useState(25);
  const [responseTime, setResponseTime] = useState("4-24");
  const [appointments, setAppointments] = useState(60);
  const [noShowRate, setNoShowRate] = useState(18);
  const [dormant, setDormant] = useState(1500);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const leaks = useMemo<Leak[]>(() => {
    const close = closeRate / 100;
    const recovery = RESPONSE_RECOVERY[responseTime]?.rate ?? 0;

    const slowResponse = monthlyLeads * recovery * close * dealValue;
    const noShows = appointments * (noShowRate / 100) * NO_SHOW_RECOVERY * close * dealValue;
    const dormantValue = (dormant / DORMANT_BATCH_DIVISOR) * DORMANT_CONVERSION * dealValue;

    return [
      {
        key: "response",
        title: "Slow lead response",
        monthly: slowResponse,
        formula: `${monthlyLeads} leads × ${(recovery * 100).toFixed(0)}% recoverable × ${closeRate}% close × ${money(dealValue)}`,
        system: { name: "Lead Follow-Up Engine", slug: "lead-followup" },
      },
      {
        key: "noshow",
        title: "No-shows & cancellations",
        monthly: noShows,
        formula: `${appointments} appts × ${noShowRate}% no-show × ${(NO_SHOW_RECOVERY * 100).toFixed(0)}% recoverable × ${closeRate}% close × ${money(dealValue)}`,
        system: { name: "Booking Optimization System", slug: "booking-optimization" },
      },
      {
        key: "dormant",
        title: "Dormant contacts never worked",
        monthly: dormantValue,
        formula: `${dormant} contacts ÷ ${DORMANT_BATCH_DIVISOR} batches × ${(DORMANT_CONVERSION * 100).toFixed(0)}% reactivation × ${money(dealValue)}`,
        system: { name: "Reactivation Campaigns", slug: "reactivation-campaigns" },
      },
    ];
  }, [monthlyLeads, dealValue, closeRate, responseTime, appointments, noShowRate, dormant]);

  const totalMonthly = leaks.reduce((sum, l) => sum + l.monthly, 0);
  const totalAnnual = totalMonthly * 12;
  // Growth tier: $2,497 setup amortized over year one + $497/mo retainer.
  const yearOneCost = 2497 + 497 * 12;
  const roiMultiple = yearOneCost > 0 ? totalAnnual / yearOneCost : 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: business,
          businessType: "Calculator lead",
          contactName: name,
          contactEmail: email,
          currentChallenge: `Revenue leak calculator: ${money(totalMonthly)}/mo leak identified. Breakdown — ${leaks
            .map((l) => `${l.title}: ${money(l.monthly)}`)
            .join("; ")}`,
          goalsIn90Days: `Recover ${money(totalAnnual)} in annual leaked revenue`,
          monthlyRevenue: `${monthlyLeads} leads/mo at ${money(dealValue)} avg deal`,
        }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-7">
        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-6">Your numbers</p>

        <div className="space-y-6">
          <Field
            label="New leads per month"
            value={monthlyLeads}
            onChange={setMonthlyLeads}
            min={0}
            max={1000}
            step={5}
          />
          <Field
            label="Average deal / customer value"
            value={dealValue}
            onChange={setDealValue}
            min={50}
            max={25000}
            step={50}
            prefix="$"
          />
          <Field label="Close rate" value={closeRate} onChange={setCloseRate} min={1} max={100} step={1} suffix="%" />

          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              How fast do you respond to a new lead?
            </label>
            <select
              value={responseTime}
              onChange={(e) => setResponseTime(e.target.value)}
              className="w-full bg-gray-900 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:border-sky-500 focus:outline-none"
            >
              {Object.entries(RESPONSE_RECOVERY).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>

          <Field
            label="Appointments / calls booked per month"
            value={appointments}
            onChange={setAppointments}
            min={0}
            max={1000}
            step={5}
          />
          <Field label="No-show rate" value={noShowRate} onChange={setNoShowRate} min={0} max={60} step={1} suffix="%" />
          <Field
            label="Dormant contacts in your CRM / list"
            value={dormant}
            onChange={setDormant}
            min={0}
            max={50000}
            step={100}
          />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-5">
        <div className="bg-gradient-to-br from-sky-950/60 to-gray-900 border border-sky-500/25 rounded-2xl p-7 text-center">
          <p className="text-xs text-sky-400 uppercase tracking-widest font-bold mb-3">Estimated revenue leak</p>
          <p className="text-5xl font-extrabold text-white mb-1">{money(totalMonthly)}</p>
          <p className="text-sm text-gray-400 mb-5">per month</p>
          <div className="pt-5 border-t border-white/10">
            <p className="text-3xl font-extrabold text-sky-400">{money(totalAnnual)}</p>
            <p className="text-xs text-gray-500 mt-1">per year</p>
          </div>
        </div>

        <div className="space-y-3">
          {leaks.map((leak) => (
            <div key={leak.key} className="bg-white/[0.03] border border-white/8 rounded-xl p-5">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-bold text-white text-sm">{leak.title}</h3>
                <span className="font-extrabold text-sky-400 whitespace-nowrap">{money(leak.monthly)}/mo</span>
              </div>
              <p className="text-[11px] text-gray-600 font-mono leading-relaxed mb-3">{leak.formula}</p>
              <Link
                href={`/ai-systems/systems/${leak.system.slug}`}
                className="text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
              >
                Fixed by: {leak.system.name} →
              </Link>
            </div>
          ))}
        </div>

        {totalAnnual > yearOneCost && (
          <div className="bg-white/[0.03] border border-white/8 rounded-xl p-5 text-sm text-gray-300 leading-relaxed">
            Recovering this leak is worth{" "}
            <span className="font-extrabold text-sky-400">{roiMultiple.toFixed(1)}×</span> the year-one cost of our
            Growth tier ({money(yearOneCost)} including setup and 12 months of retainer).
          </div>
        )}

        {/* Lead capture */}
        <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-7">
          {status === "done" ? (
            <div className="text-center py-4">
              <p className="text-3xl mb-3">✓</p>
              <h3 className="font-extrabold text-white mb-2">Got it — check your inbox.</h3>
              <p className="text-sm text-gray-400">
                We&apos;ll send your full breakdown and respond within 24 hours with which system to build first.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <h3 className="font-extrabold text-white mb-1">Get the full breakdown</h3>
              <p className="text-xs text-gray-500 mb-4">
                We&apos;ll send this analysis plus which system to build first for your situation.
              </p>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-gray-900 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:border-sky-500 focus:outline-none"
              />
              <input
                required
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Business name"
                className="w-full bg-gray-900 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:border-sky-500 focus:outline-none"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="w-full bg-gray-900 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:border-sky-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-extrabold py-3.5 rounded-xl transition-colors"
              >
                {status === "sending" ? "Sending…" : "Send me the breakdown →"}
              </button>
              {status === "error" && (
                <p className="text-xs text-red-400 text-center">
                  Something went wrong. Email chikuglobalsolutions@gmail.com directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-semibold text-white">{label}</label>
        <span className="text-sm font-extrabold text-sky-400 tabular-nums">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-sky-500"
      />
    </div>
  );
}
