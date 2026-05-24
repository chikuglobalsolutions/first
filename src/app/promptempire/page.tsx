import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PromptEmpire — 500 AI Business Prompts for Neurodivergent Entrepreneurs",
  description:
    "500 battle-tested AI prompts for freelancers and entrepreneurs with ADHD. Cold emails, sales pages, SOPs, client onboarding — works with free ChatGPT. Buy once, own forever.",
  openGraph: {
    title: "PromptEmpire — 500 AI Business Prompts",
    description: "Stop staring at a blank screen. 500 done-for-you AI prompts. Works with free ChatGPT. Buy once, use forever.",
    type: "website",
  },
};

const STRIPE_LINKS = {
  prompts: "https://buy.stripe.com/5kA5kFbpgcTY5Sg4gh",
  freelancer: "https://buy.stripe.com/cNi5kF50Kf2a6WkbLU08g01",
  bundle: "https://buy.stripe.com/7sI8wR50Kf2adoI28X",
};

const CATEGORIES = [
  { icon: "📧", name: "Cold Outreach", count: "60+", desc: "Email + DM sequences that book calls without feeling salesy" },
  { icon: "📝", name: "Sales Pages", count: "50+", desc: "Persuasive copy for any offer — done in under 10 minutes" },
  { icon: "🤝", name: "Client Onboarding", count: "45+", desc: "Proposals, contracts, welcome sequences that set the tone" },
  { icon: "📱", name: "Social Content", count: "80+", desc: "30-day content calendars for any niche in minutes" },
  { icon: "📊", name: "SOPs & Systems", count: "55+", desc: "Document any business process instantly — no blank page" },
  { icon: "💬", name: "Customer Support", count: "40+", desc: "Handle objections, FAQs, and refunds professionally" },
  { icon: "🔍", name: "Research & Strategy", count: "70+", desc: "Market research, competitor analysis, positioning copy" },
  { icon: "🧾", name: "Finance & Admin", count: "50+", desc: "Invoice language, pricing strategy, scope creep scripts" },
  { icon: "📣", name: "Launch Sequences", count: "35+", desc: "Pre-launch, launch day, and post-launch email funnels" },
  { icon: "🎯", name: "Lead Generation", count: "65+", desc: "Opt-in copy, lead magnets, and nurture sequences" },
];

const PRODUCTS = [
  {
    id: "prompts",
    name: "500 AI Business Prompts",
    price: "$37",
    originalPrice: null,
    badge: null,
    highlight: false,
    desc: "The complete prompt library. Works with free ChatGPT, Claude, or Gemini. Instant download.",
    features: [
      "500 ready-to-use prompts across 10 categories",
      "Cold email, sales pages, content, SOPs & more",
      "PDF + searchable Notion template",
      "Lifetime updates included",
      "Works with free AI tiers — no paid plan needed",
    ],
    cta: "Get 500 Prompts",
    href: STRIPE_LINKS.prompts,
  },
  {
    id: "freelancer",
    name: "Freelancer Command Center",
    price: "$47",
    originalPrice: null,
    badge: "Most Popular",
    highlight: true,
    desc: "Your AI-powered business OS. Close clients, run projects, and scale — all with prompts.",
    features: [
      "Everything in the 500 Prompts pack",
      "Client onboarding & proposal prompts",
      "Invoice & contract language templates",
      "Notion workspace (ready to duplicate)",
      "30-day email support from the founder",
    ],
    cta: "Get Command Center",
    href: STRIPE_LINKS.freelancer,
  },
  {
    id: "bundle",
    name: "Empire Bundle",
    price: "$67",
    originalPrice: "$134",
    badge: "Best Value",
    highlight: false,
    desc: "The full stack. Everything you need to run a $10K/mo freelance business using AI.",
    features: [
      "Everything in the Command Center",
      "Agency scaling prompts & SOPs",
      "White-label templates for client delivery",
      "Cold outreach sequences (3 industries)",
      "Priority support + all future drops free",
    ],
    cta: "Get the Empire Bundle",
    href: STRIPE_LINKS.bundle,
  },
];

const FAQS = [
  {
    q: "Do I need a paid AI subscription?",
    a: "No. Every prompt works with the free tier of ChatGPT, Claude, or Gemini. You do not need ChatGPT Plus or any paid plan.",
  },
  {
    q: "What format do I get?",
    a: "Instant PDF download + a Notion template you can duplicate in one click. Works on any device.",
  },
  {
    q: "I have ADHD. Will this actually work for me?",
    a: "Yes — it was built for you. The prompts are structured so you can copy, paste, and get output immediately. No setup, no blank screens.",
  },
  {
    q: "Will this work for my niche?",
    a: "The prompts cover freelancing, e-commerce, content creation, consulting, agencies, coaching, and more. Most prompts include a fill-in-the-blank niche slot.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "14-day no-questions-asked refund. Email and I'll send the money back the same day.",
  },
];

export default function PromptEmpirePage() {
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
            <span className="font-extrabold text-white tracking-tight text-sm">PromptEmpire</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/chiku-fit" className="text-xs text-gray-400 hover:text-white transition-colors font-medium hidden sm:block">
              Chiku Fit
            </Link>
            <a
              href={STRIPE_LINKS.bundle}
              className="text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Get the Bundle — $67 →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 text-violet-400 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            🤖 Digital download · Instant access · Works with free ChatGPT
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Stop staring at a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">
              blank screen.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            500 battle-tested AI prompts that replace a $5,000/month copywriter.
            Cold emails, sales pages, SOPs, and more — copy, paste, done.
          </p>
          <p className="text-base text-violet-300/80 mb-10 font-medium">
            Built specifically for entrepreneurs with ADHD who can&apos;t afford to lose 3 hours to writer&apos;s block.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={STRIPE_LINKS.bundle}
              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-lg px-9 py-4 rounded-xl transition-all shadow-2xl shadow-violet-900/60 hover:shadow-violet-900/80 hover:-translate-y-0.5"
            >
              Get the Empire Bundle — $67 →
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center font-semibold text-base px-8 py-4 rounded-xl border border-white/10 hover:border-white/25 text-gray-400 hover:text-white transition-all"
            >
              See all options
            </a>
          </div>

          <p className="text-sm text-gray-500">14-day money-back guarantee · Instant PDF delivery · No subscription ever</p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-white/5 bg-white/[0.015] py-6 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["500+", "Done-for-you prompts"],
            ["10", "Business categories"],
            ["$0", "Extra AI tools needed"],
            ["14-day", "Money-back guarantee"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="text-2xl md:text-3xl font-extrabold text-white">{stat}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pain points */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Sound familiar?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              The blank page is the enemy.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "⏳",
                title: "3 hours. One email.",
                desc: "You sit down to write a cold email, hyperfocus on the wrong sentence, and send nothing. The client goes to someone else.",
              },
              {
                icon: "🧠",
                title: "Decision paralysis on every task",
                desc: "What do I write first? How do I structure this proposal? You open 12 tabs and close them all without starting.",
              },
              {
                icon: "💸",
                title: "Too broke to hire a copywriter",
                desc: "Good copywriters cost $3–10K/month. You need pro-level output right now, on a budget that doesn't exist yet.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-violet-300">
              PromptEmpire solves all three. Copy. Paste. Ship.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">What&apos;s inside</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              500 prompts. 10 categories. Zero fluff.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every part of running an online business, covered. No filler, no generic advice — prompts that produce real output.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.name}
                className="flex items-start gap-4 bg-white/[0.03] border border-white/8 hover:border-violet-500/30 rounded-xl p-5 transition-colors group"
              >
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-white text-sm">{cat.name}</p>
                    <span className="text-xs font-semibold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">{cat.count}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Built for you if...</p>
            <h2 className="text-3xl font-extrabold text-white leading-tight mb-6">
              You have a brain that moves fast but struggles to start.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              PromptEmpire was built by Aku Nwabeke — a founder with ADHD who got tired of losing hours to writer&apos;s block.
              Every prompt is structured for immediate output: no setup, no decision trees, no blank screen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              You get the exact copy frameworks that eliminate the &quot;where do I even start&quot; paralysis
              and let your brain do what it actually does well: react, refine, and execute fast.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["✅", "Freelancers", "building a client base"],
              ["✅", "Agency owners", "scaling with AI systems"],
              ["✅", "Solopreneurs", "doing everything themselves"],
              ["✅", "ADHD founders", "who need structure, not motivation"],
              ["✅", "Side hustlers", "trying to go full-time"],
              ["✅", "Beginners", "who don't know what to write"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
                <p className="text-sm font-bold text-white mb-0.5">{icon} {title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              One payment. No subscription. Yours forever.
            </h2>
            <p className="text-gray-400">Start where it makes sense for your budget.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className={`relative rounded-2xl p-7 flex flex-col border transition-all ${
                  product.highlight
                    ? "bg-gradient-to-b from-violet-600/90 to-violet-700/90 border-violet-400/40 shadow-2xl shadow-violet-900/50"
                    : "bg-white/[0.04] border-white/10 hover:border-white/20"
                }`}
              >
                {product.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap ${
                      product.highlight ? "bg-yellow-400 text-gray-900" : "bg-violet-600 text-white"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${product.highlight ? "text-violet-200" : "text-gray-500"}`}>
                    {product.name}
                  </p>
                  <div className="flex items-end gap-2 mb-3">
                    <span className="text-5xl font-extrabold text-white">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-lg mb-1">{product.originalPrice}</span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${product.highlight ? "text-violet-100" : "text-gray-400"}`}>
                    {product.desc}
                  </p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${product.highlight ? "text-violet-200" : "text-violet-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={product.highlight ? "text-violet-50" : "text-gray-300"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={product.href}
                  className={`block text-center font-extrabold py-4 rounded-xl transition-all text-base ${
                    product.highlight
                      ? "bg-white text-violet-700 hover:bg-violet-50"
                      : "bg-violet-600 hover:bg-violet-500 text-white"
                  }`}
                >
                  {product.cta} — {product.price}
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
      <section className="py-20 px-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Frequently asked</h2>
          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className={`py-6 ${i < FAQS.length - 1 ? "border-b border-white/8" : ""}`}>
                <p className="font-bold text-white mb-2 text-base">{faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-5 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 to-transparent pointer-events-none" />
        <div className="max-w-xl mx-auto relative">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Ready to stop guessing?</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Start your empire today.
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            500 prompts. One payment. Works while you sleep.
          </p>
          <a
            href={STRIPE_LINKS.bundle}
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-xl px-10 py-5 rounded-xl transition-all shadow-2xl shadow-violet-900/60 hover:-translate-y-0.5"
          >
            Get the Empire Bundle — $67 →
          </a>
          <p className="mt-5 text-xs text-gray-600">
            Also available:{" "}
            <a href={STRIPE_LINKS.prompts} className="text-gray-400 hover:text-white underline">500 Prompts $37</a>
            {" · "}
            <a href={STRIPE_LINKS.freelancer} className="text-gray-400 hover:text-white underline">Command Center $47</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            <span className="text-gray-400 font-bold">PromptEmpire</span>
            {" · "}A product of{" "}
            <Link href="/" className="text-gray-400 hover:text-white font-semibold transition-colors">
              Chiku Global Solutions LLC
            </Link>
            {" (Wyoming)"}
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <Link href="/chiku-fit" className="hover:text-gray-400 transition-colors">Chiku Fit</Link>
            <a href="mailto:chikuglobalsolutions@gmail.com" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
          <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
        </div>
      </footer>
    </main>
  );
}
