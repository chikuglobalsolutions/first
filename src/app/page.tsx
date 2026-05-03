import Link from "next/link";

const STRIPE_LINKS = {
  prompts: "https://buy.stripe.com/5kA5kFbpgcTY5Sg4gh",
  freelancer: "https://buy.stripe.com/cNi5kF50Kf2a6WkbLU08g01",
  bundle: "https://buy.stripe.com/7sI8wR50Kf2adoI28X",
};

const products = [
  {
    id: "prompts",
    name: "500 AI Business Prompts",
    price: "$37",
    badge: null,
    desc: "The exact prompts that replace a $5,000/mo copywriter. Works with ChatGPT, Claude, and Gemini.",
    features: [
      "500 ready-to-use prompts across 10 business categories",
      "Cold email, sales pages, content, SOPs & more",
      "Instant download — PDF + searchable Notion template",
      "Lifetime updates included",
    ],
    cta: "Get 500 Prompts — $37",
    href: STRIPE_LINKS.prompts,
    highlight: false,
  },
  {
    id: "freelancer",
    name: "Freelancer Command Center",
    price: "$47",
    badge: "Most Popular",
    desc: "Your complete AI-powered business OS. Client management, proposals, invoices — all built with prompts.",
    features: [
      "Everything in the 500 Prompts pack",
      "Client onboarding & proposal prompts",
      "Invoice & contract language templates",
      "Notion workspace included",
      "30-day email support",
    ],
    cta: "Get Command Center — $47",
    href: STRIPE_LINKS.freelancer,
    highlight: true,
  },
  {
    id: "bundle",
    name: "Empire Bundle",
    price: "$67",
    badge: "Best Value",
    desc: "The full stack. Everything you need to run a $10K/mo freelance business using AI, from day one.",
    features: [
      "Everything in Command Center",
      "Agency scaling prompts & SOPs",
      "White-label templates for clients",
      "Cold outreach sequences (3 industries)",
      "Priority support + future drops free",
    ],
    cta: "Get Empire Bundle — $67",
    href: STRIPE_LINKS.bundle,
    highlight: false,
  },
];

const faqs = [
  {
    q: "Do I need any special AI subscription?",
    a: "No. These prompts work with the free tier of ChatGPT, Claude, or Gemini. No paid AI plan required.",
  },
  {
    q: "What format do I get?",
    a: "Instant PDF download + a ready-to-duplicate Notion template. Works on any device.",
  },
  {
    q: "Will this work for my niche?",
    a: "Yes. The prompts cover freelancing, e-commerce, content creation, consulting, agencies, and more.",
  },
  {
    q: "Is there a refund policy?",
    a: "14-day no-questions-asked refund. If you don't love it, email and I'll send the money back same day.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/80 backdrop-blur border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-white tracking-tight">PromptEmpire</span>
          <div className="flex items-center gap-3">
            <Link href="/chiku-fit" className="text-xs text-gray-400 hover:text-white transition-colors font-medium">
              Chiku Fit
            </Link>
            <a
              href={STRIPE_LINKS.bundle}
              className="text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Get the Bundle →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            Digital download · instant access
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            500 AI Prompts That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-gold-400">
              Work While You Sleep
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop guessing what to type into ChatGPT. These 500 battle-tested prompts cover every part of running a
            freelance business — from cold emails to proposals to client SOPs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={STRIPE_LINKS.bundle}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-xl shadow-brand-900/50"
            >
              Get the Empire Bundle — $67
              <span>→</span>
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center font-semibold text-lg px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-gray-300 transition-colors"
            >
              See all options
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">14-day money-back guarantee · Instant download · Works with free ChatGPT</p>
        </div>
      </section>

      {/* Social proof bar */}
      <div className="border-y border-white/5 bg-white/[0.02] py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            ["500+", "Prompts included"],
            ["10", "Business categories"],
            ["$0", "Extra AI subscription needed"],
            ["14-day", "Money-back guarantee"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="text-2xl font-extrabold text-white">{num}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What you get */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-4">
            What's inside the prompt library
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Every category a freelancer or online business owner needs — no fluff.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["📧", "Cold Outreach", "Email + DM sequences that actually get replies"],
              ["📝", "Sales Pages", "Persuasive copy for any offer in under 10 minutes"],
              ["🤝", "Client Onboarding", "Proposals, contracts, and welcome sequences"],
              ["📱", "Social Content", "30-day content calendars for any niche"],
              ["📊", "SOPs & Systems", "Document any process in your business instantly"],
              ["💬", "Customer Support", "Handle objections, FAQs, and refund requests"],
              ["🔍", "Research & Strategy", "Market research, competitor analysis, positioning"],
              ["🧾", "Finance & Admin", "Invoice language, pricing strategy, scope creep handling"],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white/[0.03] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-4">
            Pick your stack
          </h2>
          <p className="text-gray-400 text-center mb-12">
            One-time payment. No subscription. No upsells.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className={`relative rounded-2xl p-7 flex flex-col ${
                  p.highlight
                    ? "bg-brand-600 border border-brand-500 shadow-2xl shadow-brand-900/50"
                    : "bg-white/[0.04] border border-white/10"
                }`}
              >
                {p.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full ${
                      p.highlight ? "bg-gold-400 text-gray-900" : "bg-brand-600 text-white"
                    }`}
                  >
                    {p.badge}
                  </div>
                )}

                <div className="mb-5">
                  <p className={`text-sm font-semibold mb-1 ${p.highlight ? "text-brand-100" : "text-gray-400"}`}>
                    {p.name}
                  </p>
                  <p className="text-4xl font-extrabold text-white">{p.price}</p>
                  <p className={`text-sm mt-2 leading-relaxed ${p.highlight ? "text-brand-100" : "text-gray-400"}`}>
                    {p.desc}
                  </p>
                </div>

                <ul className="flex-1 space-y-2.5 mb-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.highlight ? "text-brand-100" : "text-brand-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={p.highlight ? "text-white" : "text-gray-300"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href}
                  className={`text-center font-bold py-3.5 rounded-xl transition-colors ${
                    p.highlight
                      ? "bg-white text-brand-700 hover:bg-brand-50"
                      : "bg-brand-600 text-white hover:bg-brand-700"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-gray-500">
            Secure checkout via Stripe · 14-day refund guarantee · Instant delivery to your inbox
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Frequently asked</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/10 pb-6">
                <p className="font-semibold text-white mb-2">{faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center border-t border-white/5">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Start your empire today
          </h2>
          <p className="text-gray-400 mb-8">
            500 prompts. One payment. Works while you sleep.
          </p>
          <a
            href={STRIPE_LINKS.bundle}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-xl shadow-brand-900/50"
          >
            Get the Empire Bundle — $67 →
          </a>
          <p className="mt-4 text-xs text-gray-600">
            Also available: <a href={STRIPE_LINKS.prompts} className="text-gray-400 hover:text-white">500 Prompts $37</a> ·{" "}
            <a href={STRIPE_LINKS.freelancer} className="text-gray-400 hover:text-white">Command Center $47</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5 text-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} PromptEmpire by Chiku Global Solutions · All rights reserved</p>
        <p className="mt-1">
          Questions? <a href="mailto:chikuglobalsolutions@gmail.com" className="hover:text-gray-400">chikuglobalsolutions@gmail.com</a>
        </p>
      </footer>
    </main>
  );
}
