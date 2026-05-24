import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiku Global Solutions LLC — Built for Neurodivergent Entrepreneurs",
  description:
    "Chiku Global Solutions LLC empowers neurodivergent entrepreneurs with ADHD to build sustainable businesses through community, digital tools, and AI-powered systems.",
  openGraph: {
    title: "Chiku Global Solutions LLC",
    description: "Built for neurodivergent entrepreneurs. Community, digital products, and AI systems.",
    type: "website",
  },
};

const BRANDS = [
  {
    emoji: "🤖",
    name: "PromptEmpire",
    tag: "Digital Products",
    tagColor: "text-violet-400",
    tagBg: "bg-violet-500/10 border-violet-500/20",
    cardBorder: "hover:border-violet-500/40",
    desc: "500 AI prompts that replace a $5,000/mo copywriter. Cold emails, sales pages, SOPs — built for entrepreneurs who can't afford to waste time staring at a blank screen.",
    price: "From $37",
    cta: "See Prompts",
    href: "/promptempire",
    items: ["Cold outreach sequences", "Sales page copy", "Client SOPs & onboarding", "Content calendars"],
  },
  {
    emoji: "💪",
    name: "Chiku Fit",
    tag: "Fitness Guides",
    tagColor: "text-emerald-400",
    tagBg: "bg-emerald-500/10 border-emerald-500/20",
    cardBorder: "hover:border-emerald-500/40",
    desc: "Training and nutrition guides for skinny beginners on a budget. Structure, progression, and results — no $200/mo coach required.",
    price: "From $29.99",
    cta: "See Guides",
    href: "/chiku-fit",
    items: ["8-Week Mass Accelerator", "Broke Bulk Meal Plan", "Complete Bulking Bundle"],
  },
  {
    emoji: "🦷",
    name: "Dental AI Agency",
    tag: "B2B Retainer",
    tagColor: "text-sky-400",
    tagBg: "bg-sky-500/10 border-sky-500/20",
    cardBorder: "hover:border-sky-500/40",
    desc: "AI-powered growth systems for dental practices. Automated patient follow-ups, review generation, and booking optimization — billed as a monthly retainer.",
    price: "From $1,497/mo",
    cta: "Learn More",
    href: "https://chiku-global-solutions.netlify.app",
    external: true,
    items: ["Starter · $1,497 + $297/mo", "Growth · $2,497 + $497/mo", "Premium · $4,997 + $997/mo"],
  },
];

const TRUST = [
  { label: "Wyoming LLC", detail: "Registered entity, Cheyenne WY" },
  { label: "SAM.gov", detail: "Unique Entity ID registered" },
  { label: "3 Revenue Streams", detail: "Digital products · Agency · Community" },
  { label: "Neurodivergent-First", detail: "Built by a founder with ADHD" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white tracking-tight">Chiku Global</span>
            <span className="hidden sm:inline text-gray-600 text-sm">Solutions LLC</span>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <Link href="/promptempire" className="text-gray-400 hover:text-white transition-colors font-medium hidden sm:block">PromptEmpire</Link>
            <Link href="/chiku-fit" className="text-gray-400 hover:text-white transition-colors font-medium hidden sm:block">Chiku Fit</Link>
            <a
              href="mailto:chikuglobalsolutions@gmail.com"
              className="text-xs font-semibold border border-white/20 hover:border-white/40 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-5 text-center relative">
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent pointer-events-none" />

        <div className="max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
            Wyoming LLC · SAM.gov Registered · Est. 2025
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Built for minds that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400">
              work differently
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Chiku Global Solutions LLC creates digital products, AI systems, and communities
            that help neurodivergent entrepreneurs — especially those with ADHD — build
            businesses that actually stick.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/promptempire"
              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold text-base px-7 py-3.5 rounded-xl transition-colors shadow-xl shadow-violet-900/40"
            >
              Explore PromptEmpire →
            </Link>
            <a
              href="mailto:chikuglobalsolutions@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-colors"
            >
              Work with us
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y border-white/5 bg-white/[0.015] py-5 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST.map((t) => (
            <div key={t.label} className="text-center">
              <p className="font-bold text-white text-sm">{t.label}</p>
              <p className="text-gray-500 text-xs mt-0.5">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Business lines */}
      <section className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Our portfolio</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Three ways we generate income
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Each brand is a standalone revenue stream — digital products, fitness guides, and B2B AI services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className={`group bg-white/[0.03] border border-white/8 ${brand.cardBorder} rounded-2xl p-7 flex flex-col transition-all duration-200`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${brand.tagBg} ${brand.tagColor}`}>
                    {brand.tag}
                  </div>
                  <span className="text-3xl">{brand.emoji}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{brand.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{brand.desc}</p>

                <ul className="space-y-1.5 mb-6 flex-1">
                  {brand.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-gray-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5">
                  <span className="text-sm font-semibold text-white">{brand.price}</span>
                  {brand.external ? (
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold transition-colors ${brand.tagColor} hover:opacity-80`}
                    >
                      {brand.cta} →
                    </a>
                  ) : (
                    <Link
                      href={brand.href}
                      className={`text-sm font-bold transition-colors ${brand.tagColor} hover:opacity-80`}
                    >
                      {brand.cta} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-5 border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Our mission</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
              Neurodivergent entrepreneurs deserve systems that work with their brain, not against it.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Founded by Aku Nwabeke — an entrepreneur with ADHD — Chiku Global Solutions LLC exists to close the gap between having great ideas and actually executing them. Every product we build is practical, repeatable, and designed for real implementation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["🧠", "ADHD-aware", "Structured for execution, not perfection"],
              ["📦", "Buy once", "No recurring fees on digital products"],
              ["🤝", "Community-first", "Skool platform for peer accountability"],
              ["📈", "Scalable", "Systems that grow without adding hours"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="bg-white/[0.03] border border-white/8 rounded-xl p-5">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="font-semibold text-white text-sm mb-1">{title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to start?
          </h2>
          <p className="text-gray-400 mb-8">
            Grab a digital product today — or reach out if you want AI systems built for your dental practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/promptempire"
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Browse PromptEmpire
            </Link>
            <Link
              href="/chiku-fit"
              className="bg-emerald-700/60 hover:bg-emerald-700/80 text-white font-bold px-7 py-3.5 rounded-xl transition-colors border border-emerald-600/30"
            >
              Browse Chiku Fit
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-gray-600">
          <div>
            <p className="text-gray-300 font-bold text-sm">Chiku Global Solutions LLC</p>
            <p className="mt-1">1621 Central Ave, Ste 8572 · Cheyenne, WY 82001</p>
            <p>(781) 375-9585 · chikuglobalsolutions@gmail.com</p>
          </div>
          <div className="flex gap-6">
            <Link href="/promptempire" className="hover:text-gray-400 transition-colors">PromptEmpire</Link>
            <Link href="/chiku-fit" className="hover:text-gray-400 transition-colors">Chiku Fit</Link>
            <a href="https://chiku-global-solutions.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Dental Agency</a>
          </div>
          <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
        </div>
      </footer>
    </main>
  );
}
