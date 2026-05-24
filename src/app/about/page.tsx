import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Chiku Global Solutions LLC — Built for Neurodivergent Entrepreneurs",
  description:
    "The story behind Chiku Global Solutions LLC — a Wyoming company founded by Akujuobi Nwabeke to build sustainable, ADHD-friendly businesses through digital products, AI systems, and community.",
};

const TIMELINE = [
  {
    year: "2024",
    title: "The frustration",
    desc: "After years of building businesses that stalled because of executive function, founder Akujuobi 'Aku' Nwabeke realized that almost every productivity tool was built for neurotypical brains — and was failing the millions of entrepreneurs with ADHD.",
  },
  {
    year: "Early 2025",
    title: "The first product",
    desc: "Aku built PromptEmpire — 500 AI prompts designed to eliminate the blank-page paralysis that destroys ADHD productivity. The first version sold within weeks.",
  },
  {
    year: "Mid 2025",
    title: "Wyoming LLC formed",
    desc: "Chiku Global Solutions LLC was registered in Wyoming with full SAM.gov registration. The mission: build a multi-brand company specifically for neurodivergent entrepreneurs.",
  },
  {
    year: "Late 2025",
    title: "Chiku Fit launches",
    desc: "After helping skinny beginners get strong on a budget, Aku turned the framework into the 8-Week Mass Accelerator — a structured, ADHD-friendly fitness program for people who can't follow random YouTube routines.",
  },
  {
    year: "2026",
    title: "Chiku AI Systems",
    desc: "The B2B services arm launches — done-for-you AI growth systems that automate the boring parts of running any business so owners can focus on what they're actually great at.",
  },
];

const VALUES = [
  {
    icon: "🧠",
    title: "ADHD-aware by default",
    desc: "Every product, page, and process is built assuming the user has limited working memory and is fighting decision fatigue. Clear inputs, clear outputs, no fluff.",
  },
  {
    icon: "📦",
    title: "Buy once, own forever",
    desc: "We don't trap people in subscriptions for digital products. Pay once, get lifetime access. The only recurring billing is our agency services — and only because they require ongoing work.",
  },
  {
    icon: "🚀",
    title: "Ship beats perfect",
    desc: "Done is better than polished. Every product launches at v1.0 and improves based on real feedback. Customers get every update for free.",
  },
  {
    icon: "🤝",
    title: "Real founders, real replies",
    desc: "When you email chikuglobalsolutions@gmail.com, Aku reads it. No support tickets. No bots. No tier-3 escalation queue.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-white tracking-tight">
            Chiku Global <span className="text-gray-600 text-sm font-medium hidden sm:inline">Solutions LLC</span>
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <Link href="/promptempire" className="text-gray-400 hover:text-white transition-colors font-medium hidden sm:block">PromptEmpire</Link>
            <Link href="/chiku-fit" className="text-gray-400 hover:text-white transition-colors font-medium hidden sm:block">Chiku Fit</Link>
            <Link href="/ai-systems" className="text-gray-400 hover:text-white transition-colors font-medium hidden md:block">AI Systems</Link>
            <Link href="/contact" className="text-xs font-semibold border border-white/20 hover:border-white/40 text-white px-4 py-2 rounded-lg transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-5 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">About the company</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            We build for the brains{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400">
              traditional business advice forgot.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Chiku Global Solutions LLC is a Wyoming-registered company that exists for one reason:
            to make sustainable entrepreneurship accessible to people whose brains don&apos;t follow the rules.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 px-5 border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="aspect-square bg-gradient-to-br from-violet-600/30 to-pink-600/20 border border-white/10 rounded-2xl flex items-center justify-center text-7xl">
              👤
            </div>
            <p className="mt-4 text-center font-extrabold text-white">Akujuobi &quot;Aku&quot; Nwabeke</p>
            <p className="text-center text-sm text-gray-500">Founder & CEO</p>
          </div>
          <div className="md:col-span-2 space-y-5 text-gray-400 leading-relaxed">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">The founder</p>
            <p>
              Aku is an entrepreneur with ADHD who got tired of watching brilliant ideas die at the implementation
              stage — his own, and those of friends and clients. The pattern was always the same: the strategy was sound,
              the motivation was real, but the actual work of building, writing, and following through was where everything broke down.
            </p>
            <p>
              Most productivity tools made it worse. They assumed users could maintain focus across long projects,
              tolerate ambiguity, and start from a blank screen without dissolving into doom-scrolling.
              For ADHD brains, that&apos;s a recipe for guilt and abandoned drafts.
            </p>
            <p>
              Chiku Global Solutions is the company Aku wished existed when he started.
              Every product is built around one principle: <em className="text-white not-italic font-semibold">eliminate the friction between deciding to act and actually acting.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">How we got here</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">The timeline</h2>
          </div>
          <div className="space-y-6">
            {TIMELINE.map((item) => (
              <div key={item.year} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex flex-col sm:flex-row gap-5">
                <div className="sm:w-32 flex-shrink-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-violet-400">{item.year}</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">What we believe</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our operating principles</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-extrabold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Legal & registration</p>
          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
            <div>
              <p className="text-gray-500">Legal entity</p>
              <p className="text-white font-semibold">Chiku Global Solutions LLC</p>
            </div>
            <div>
              <p className="text-gray-500">State of incorporation</p>
              <p className="text-white font-semibold">Wyoming</p>
            </div>
            <div>
              <p className="text-gray-500">Registered address</p>
              <p className="text-white font-semibold">1621 Central Ave, Ste 8572<br />Cheyenne, WY 82001</p>
            </div>
            <div>
              <p className="text-gray-500">Federal registration</p>
              <p className="text-white font-semibold">SAM.gov Unique Entity ID</p>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <p className="text-white font-semibold">chikuglobalsolutions@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="text-white font-semibold">(781) 375-9585</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 text-center border-t border-white/5">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Want to work with us?</h2>
          <p className="text-gray-400 mb-8">Whether you&apos;re a buyer, a partner, or want help building your AI system — start here.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-7 py-3.5 rounded-xl transition-colors">
              Contact us
            </Link>
            <Link href="/ai-systems" className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              See our AI services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-5 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-gray-600">
        <div>
          <p className="text-gray-300 font-bold text-sm">Chiku Global Solutions LLC</p>
          <p className="mt-1">1621 Central Ave, Ste 8572 · Cheyenne, WY 82001</p>
          <p>(781) 375-9585 · chikuglobalsolutions@gmail.com</p>
        </div>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-gray-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
          <Link href="/promptempire" className="hover:text-gray-400 transition-colors">PromptEmpire</Link>
          <Link href="/chiku-fit" className="hover:text-gray-400 transition-colors">Chiku Fit</Link>
          <Link href="/ai-systems" className="hover:text-gray-400 transition-colors">AI Systems</Link>
        </div>
        <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
      </div>
    </footer>
  );
}
