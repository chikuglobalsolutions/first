import type { Metadata } from "next";
import Link from "next/link";
import IntakeForm from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Chiku AI Systems — AI-Powered Growth Systems for Any Business",
  description:
    "Done-for-you AI systems that automate follow-ups, generate reviews, optimize bookings, and convert more leads — for any business type. Monthly retainer. Results in 30 days.",
  openGraph: {
    title: "Chiku AI Systems — AI-Powered Growth for Your Business",
    description: "We build the AI systems. You keep the revenue. Any industry, any size.",
    type: "website",
  },
};

const RESULTS = [
  { metric: "2–4×", label: "lead follow-up speed", detail: "Automated within minutes, not days" },
  { metric: "40–80%", label: "fewer missed bookings", detail: "Automated reminders + rescheduling" },
  { metric: "3–5×", label: "more reviews generated", detail: "Automated post-visit review requests" },
  { metric: "10–30hrs", label: "staff time saved/week", detail: "Repetitive tasks handed off to AI" },
];

const SYSTEMS = [
  {
    icon: "📞",
    name: "Lead Follow-Up Engine",
    desc: "Every new lead gets an instant, personalized follow-up sequence across email and SMS — automatically. No lead falls through the cracks.",
    fits: ["Local service businesses", "Real estate", "Professional services", "Coaching"],
  },
  {
    icon: "⭐",
    name: "Review Generation System",
    desc: "Automatically request reviews from happy customers at the perfect moment. More 5-star reviews = more organic traffic and trust.",
    fits: ["Restaurants", "Medical practices", "Salons & spas", "Contractors"],
  },
  {
    icon: "📅",
    name: "Booking Optimization System",
    desc: "Reduce no-shows with automated reminders, fill cancellations with a waitlist, and maximize your schedule without extra staff.",
    fits: ["Healthcare", "Fitness studios", "Law firms", "Consultants"],
  },
  {
    icon: "🤖",
    name: "AI Sales Assistant",
    desc: "An always-on assistant that answers FAQs, qualifies leads, quotes pricing, and books calls — 24/7, no hiring required.",
    fits: ["E-commerce", "Agencies", "SaaS", "Service businesses"],
  },
  {
    icon: "📧",
    name: "Reactivation Campaigns",
    desc: "Turn dormant leads and past customers into revenue with automated AI-personalized win-back sequences.",
    fits: ["Any business with a contact list"],
  },
  {
    icon: "📊",
    name: "Reporting & Insights Automation",
    desc: "Get a weekly snapshot of what's working, what isn't, and where your next dollar should go — without building dashboards.",
    fits: ["Agency owners", "Multi-location businesses", "E-commerce brands"],
  },
];

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    setup: "$1,497",
    monthly: "$297/mo",
    highlight: false,
    badge: null,
    desc: "One AI system installed, configured, and running in your business within 2 weeks.",
    includes: [
      "1 core AI system of your choice",
      "Full setup & integration",
      "30-day optimization period",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Apply for Starter",
  },
  {
    id: "growth",
    name: "Growth",
    setup: "$2,497",
    monthly: "$497/mo",
    highlight: true,
    badge: "Most Popular",
    desc: "Three integrated AI systems working together — follow-ups, reviews, and booking optimization.",
    includes: [
      "3 AI systems (your choice)",
      "Cross-system integration",
      "Priority 2-week setup",
      "Bi-weekly strategy calls",
      "Monthly performance reports",
      "Priority support",
    ],
    cta: "Apply for Growth",
  },
  {
    id: "premium",
    name: "Premium",
    setup: "$4,997",
    monthly: "$997/mo",
    highlight: false,
    badge: "Full Stack",
    desc: "Complete AI infrastructure for your business. All systems, all integrations, custom-built for your workflow.",
    includes: [
      "All 6 AI systems",
      "Full tech stack audit & setup",
      "Custom AI assistant (your brand)",
      "Weekly strategy calls",
      "Dedicated account manager",
      "First priority support",
    ],
    cta: "Apply for Premium",
  },
];

const INDUSTRIES = [
  "Dental & medical practices",
  "Law firms & legal services",
  "Real estate brokerages",
  "HVAC, plumbing & local services",
  "Restaurants & hospitality",
  "Fitness studios & gyms",
  "Coaching & consulting",
  "E-commerce & DTC brands",
  "Agencies & creative studios",
  "Financial services",
  "Automotive & dealerships",
  "Any business with leads",
];

export default function AISystemsPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-medium">
              Chiku Global Solutions
            </Link>
            <span className="text-white/20 text-sm">›</span>
            <span className="font-extrabold text-white tracking-tight text-sm">Chiku AI Systems</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/promptempire" className="text-xs text-gray-400 hover:text-white transition-colors hidden sm:block">PromptEmpire</Link>
            <Link href="/chiku-fit" className="text-xs text-gray-400 hover:text-white transition-colors hidden sm:block">Chiku Fit</Link>
            <a
              href="#intake"
              className="text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            🤖 Done-for-you AI systems · Any industry · Monthly retainer
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            We build the AI.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
              You keep the revenue.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            AI-powered growth systems that automate your follow-ups, fill your calendar, generate reviews,
            and close more leads — built specifically for your business, from scratch.
          </p>
          <p className="text-base text-sky-300/80 mb-10 font-medium">
            Works for any business type. Setup in 2 weeks. Results in 30 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="#intake"
              className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-lg px-9 py-4 rounded-xl transition-all shadow-2xl shadow-sky-900/60 hover:-translate-y-0.5"
            >
              Apply for a system →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center font-semibold text-base px-8 py-4 rounded-xl border border-white/10 hover:border-white/25 text-gray-400 hover:text-white transition-all"
            >
              See how it works
            </a>
          </div>

          <p className="text-sm text-gray-500">From $1,497 setup + $297/mo · No long-term contracts · Cancel anytime</p>
        </div>
      </section>

      {/* Results bar */}
      <div className="border-y border-white/5 bg-white/[0.015] py-8 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {RESULTS.map((r) => (
            <div key={r.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-sky-400">{r.metric}</p>
              <p className="text-sm font-semibold text-white mt-1">{r.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industries */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Works for any business type</p>
          <h2 className="text-2xl font-extrabold text-white mb-8">We&apos;ve built systems across every industry</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="bg-white/[0.04] border border-white/10 text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">The process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              From application to results in under 3 weeks.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["01", "Apply & Intake", "Fill out the form below. Tell us your business, your bottlenecks, and your 90-day goal."],
              ["02", "Discovery Call", "We map your tech stack, identify the 1–2 highest-leverage AI systems for your business, and scope the build."],
              ["03", "We Build It", "Our team builds, integrates, and tests your AI systems in your existing tools. You don't touch a line of code."],
              ["04", "You See Results", "Go live in 2 weeks. We monitor, optimize, and report monthly. You focus on the business."],
            ].map(([num, title, desc]) => (
              <div key={num} className="text-center">
                <div className="w-12 h-12 bg-sky-500/10 border border-sky-500/25 rounded-xl flex items-center justify-center text-sky-400 font-extrabold text-sm mx-auto mb-4">
                  {num}
                </div>
                <p className="font-bold text-white mb-2">{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">What we build</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              6 AI systems. Mix and match for your business.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every system is custom-built for your business — not a template, not a plugin, not a generic automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SYSTEMS.map((sys) => (
              <div key={sys.name} className="bg-white/[0.03] border border-white/8 hover:border-sky-500/30 rounded-2xl p-6 transition-colors">
                <div className="text-3xl mb-4">{sys.icon}</div>
                <h3 className="font-extrabold text-white mb-2">{sys.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{sys.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {sys.fits.map((f) => (
                    <span key={f} className="text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              One-time setup. Monthly retainer. Cancel anytime.
            </h2>
            <p className="text-gray-400">All plans include setup, integration, and ongoing optimization.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 flex flex-col border transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-b from-sky-900/50 to-sky-950/50 border-sky-500/40 shadow-2xl shadow-sky-900/30"
                    : "bg-white/[0.03] border-white/10 hover:border-white/20"
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap ${
                    plan.highlight ? "bg-sky-400 text-gray-900" : "bg-white/10 text-white"
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.highlight ? "text-sky-300" : "text-gray-500"}`}>
                    {plan.name}
                  </p>
                  <p className="text-4xl font-extrabold text-white">{plan.setup}</p>
                  <p className={`text-sm mt-1 ${plan.highlight ? "text-sky-200" : "text-gray-400"}`}>setup + {plan.monthly}</p>
                  <p className={`text-sm mt-3 leading-relaxed ${plan.highlight ? "text-sky-100" : "text-gray-400"}`}>{plan.desc}</p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-sky-300" : "text-sky-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.highlight ? "text-sky-50" : "text-gray-300"}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#intake"
                  className={`block text-center font-extrabold py-4 rounded-xl transition-all ${
                    plan.highlight
                      ? "bg-sky-500 hover:bg-sky-400 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-gray-500">
            Not sure which plan fits? Fill out the intake form below — we&apos;ll recommend the right one.
          </p>
        </div>
      </section>

      {/* Intake form */}
      <section id="intake" className="py-20 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Apply now</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Tell us about your business.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Takes 3 minutes. We read every submission and respond within 24 hours
              with a tailored proposal and a discovery call link.
            </p>
          </div>

          <IntakeForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            <span className="text-gray-400 font-bold">Chiku AI Systems</span>
            {" · "}A service of{" "}
            <Link href="/" className="text-gray-400 hover:text-white font-semibold transition-colors">
              Chiku Global Solutions LLC
            </Link>
            {" (Wyoming)"}
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <Link href="/promptempire" className="hover:text-gray-400 transition-colors">PromptEmpire</Link>
            <Link href="/chiku-fit" className="hover:text-gray-400 transition-colors">Chiku Fit</Link>
            <a href="mailto:chikuglobalsolutions@gmail.com" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
          <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
        </div>
      </footer>
    </main>
  );
}
