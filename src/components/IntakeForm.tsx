"use client";

import { useState } from "react";

const BUSINESS_TYPES = [
  "Dental / medical practice",
  "Law firm / professional services",
  "Real estate / brokerage",
  "Local services (HVAC, plumbing, etc.)",
  "Restaurant / hospitality",
  "E-commerce / DTC brand",
  "SaaS / digital product",
  "Coaching / consulting",
  "Agency / creative",
  "Fitness / wellness",
  "Other",
];

const REVENUE_RANGES = [
  "Pre-revenue",
  "Under $10K/mo",
  "$10K–$50K/mo",
  "$50K–$250K/mo",
  "$250K+/mo",
];

const TEAM_SIZES = ["Just me", "2–5 people", "6–20 people", "20+ people"];

const BUDGET_RANGES = [
  "Under $1,500/mo",
  "$1,500–$3,000/mo",
  "$3,000–$5,000/mo",
  "$5,000+/mo",
];

const PLANS = [
  { id: "starter", label: "Starter — $1,497 setup + $297/mo" },
  { id: "growth", label: "Growth — $2,497 setup + $497/mo" },
  { id: "premium", label: "Premium — $4,997 setup + $997/mo" },
  { id: "unsure", label: "Not sure yet — recommend something" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function IntakeForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [form, setForm] = useState({
    businessName: "",
    businessType: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    monthlyRevenue: "",
    teamSize: "",
    currentChallenge: "",
    goalsIn90Days: "",
    budgetRange: "",
    preferredPlan: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validateStep = (current: number): string | null => {
    if (current === 1) {
      if (!form.businessName.trim()) return "Business name is required";
      if (!form.businessType) return "Pick the closest business type";
    }
    if (current === 2) {
      if (!form.currentChallenge.trim()) return "Share what's not working";
      if (!form.goalsIn90Days.trim()) return "Share your 90-day goal";
    }
    if (current === 3) {
      if (!form.contactName.trim()) return "Your name is required";
      if (!form.contactEmail.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail))
        return "Enter a valid email";
    }
    return null;
  };

  const next = () => {
    const err = validateStep(step);
    if (err) {
      setErrorMsg(err);
      return;
    }
    setErrorMsg(null);
    setStep((s) => s + 1);
  };

  const back = () => {
    setErrorMsg(null);
    setStep((s) => Math.max(1, s - 1));
  };

  const submit = async () => {
    const err = validateStep(3);
    if (err) {
      setErrorMsg(err);
      return;
    }
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Submission failed");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/[0.03] border border-emerald-500/30 rounded-2xl p-10 text-center">
        <div className="text-5xl mb-5">✅</div>
        <h3 className="text-2xl font-extrabold text-white mb-3">
          We&apos;ve got it. You&apos;ll hear back within 24 hours.
        </h3>
        <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
          A response with next steps and a discovery call link is heading to{" "}
          <span className="text-white font-semibold">{form.contactEmail}</span>.
          Check spam if you don&apos;t see it.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 md:p-10">
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 w-10 rounded-full transition-colors ${
                s <= step ? "bg-sky-500" : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          Step {step} of 3
        </span>
      </div>

      {/* STEP 1: business basics */}
      {step === 1 && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-1">Tell us about your business</h3>
            <p className="text-sm text-gray-400">
              We tailor the system to your business type — not a one-size-fits-all template.
            </p>
          </div>

          <Field label="Business name *">
            <input
              type="text"
              value={form.businessName}
              onChange={(e) => update("businessName", e.target.value)}
              placeholder="Acme Co."
              className="form-input"
            />
          </Field>

          <Field label="What kind of business? *">
            <select
              value={form.businessType}
              onChange={(e) => update("businessType", e.target.value)}
              className="form-input"
            >
              <option value="">Pick the closest match…</option>
              {BUSINESS_TYPES.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Monthly revenue (optional)">
              <select
                value={form.monthlyRevenue}
                onChange={(e) => update("monthlyRevenue", e.target.value)}
                className="form-input"
              >
                <option value="">Prefer not to say</option>
                {REVENUE_RANGES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </Field>

            <Field label="Team size (optional)">
              <select
                value={form.teamSize}
                onChange={(e) => update("teamSize", e.target.value)}
                className="form-input"
              >
                <option value="">Prefer not to say</option>
                {TEAM_SIZES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>
        </div>
      )}

      {/* STEP 2: problem + goal */}
      {step === 2 && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-1">What&apos;s not working?</h3>
            <p className="text-sm text-gray-400">
              The clearer you are, the better the system we build.
            </p>
          </div>

          <Field label="What's the #1 thing slowing your business down right now? *">
            <textarea
              value={form.currentChallenge}
              onChange={(e) => update("currentChallenge", e.target.value)}
              rows={4}
              placeholder="e.g. We get 200 leads/mo but only book 15% of them. Most never get a follow-up call."
              className="form-input resize-none"
            />
          </Field>

          <Field label="What does the next 90 days look like if it&apos;s a win? *">
            <textarea
              value={form.goalsIn90Days}
              onChange={(e) => update("goalsIn90Days", e.target.value)}
              rows={4}
              placeholder="e.g. Book rate goes from 15% to 40% by automating follow-ups and review collection."
              className="form-input resize-none"
            />
          </Field>
        </div>
      )}

      {/* STEP 3: contact + budget */}
      {step === 3 && (
        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-1">How do we reach you?</h3>
            <p className="text-sm text-gray-400">
              We&apos;ll send a tailored proposal within 24 hours.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your name *">
              <input
                type="text"
                value={form.contactName}
                onChange={(e) => update("contactName", e.target.value)}
                placeholder="Jane Doe"
                className="form-input"
              />
            </Field>
            <Field label="Phone (optional)">
              <input
                type="tel"
                value={form.contactPhone}
                onChange={(e) => update("contactPhone", e.target.value)}
                placeholder="(555) 555-5555"
                className="form-input"
              />
            </Field>
          </div>

          <Field label="Email *">
            <input
              type="email"
              value={form.contactEmail}
              onChange={(e) => update("contactEmail", e.target.value)}
              placeholder="you@business.com"
              className="form-input"
            />
          </Field>

          <Field label="Budget range (optional)">
            <select
              value={form.budgetRange}
              onChange={(e) => update("budgetRange", e.target.value)}
              className="form-input"
            >
              <option value="">Prefer to discuss</option>
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </Field>

          <Field label="Which plan are you leaning toward? (optional)">
            <select
              value={form.preferredPlan}
              onChange={(e) => update("preferredPlan", e.target.value)}
              className="form-input"
            >
              <option value="">Not sure yet</option>
              {PLANS.map((p) => (
                <option key={p.id} value={p.id}>{p.label}</option>
              ))}
            </select>
          </Field>
        </div>
      )}

      {errorMsg && (
        <div className="mt-5 bg-red-900/20 border border-red-700/30 rounded-lg px-4 py-3 text-sm text-red-300">
          {errorMsg}
        </div>
      )}

      {/* Nav buttons */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="px-5 py-3 rounded-xl border border-white/10 hover:border-white/25 text-gray-400 hover:text-white font-semibold transition-colors"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <button
            type="button"
            onClick={next}
            className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition-colors shadow-lg shadow-sky-900/40"
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={status === "submitting"}
            className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold transition-colors shadow-lg shadow-sky-900/40"
          >
            {status === "submitting" ? "Sending…" : "Send my intake →"}
          </button>
        )}
      </div>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: white;
          font-size: 0.9375rem;
          transition: border-color 0.15s;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: rgba(14, 165, 233, 0.6);
        }
        :global(.form-input::placeholder) {
          color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
