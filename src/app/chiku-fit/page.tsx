import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiku Fit — Build Mass on a Budget | Training Guides for Skinny Beginners",
  description:
    "Training and nutrition guides for skinny beginners who want real size and strength without expensive coaching or crazy food budgets. Start the 8-Week Mass Accelerator for $49.99.",
  openGraph: {
    title: "Chiku Fit — Build Mass on a Budget",
    description: "8-week training program + budget meal plans for skinny beginners. No coach required.",
    type: "website",
  },
};

const PRODUCTS = [
  {
    id: "broke-bulk",
    name: "Broke Bulk Meal Plan Pack",
    price: "$29.99",
    badge: "Entry Point",
    badgeColor: "bg-white/10 text-gray-400",
    highlight: false,
    live: false,
    gumroadHref: null,
    desc: "A budget-built nutrition strategy for lifters who need calorie surplus without burning through their paycheck.",
    features: [
      "Surplus strategy for controlled, clean bulk",
      "High-calorie shake protocol for hard-to-eat days",
      "Budget grocery guide (real foods, real prices)",
      "Sample 3,500-calorie daily meal layout",
      "Common beginner mistakes that keep you small",
    ],
    cta: "Get the Meal Plan",
  },
  {
    id: "mass-accelerator",
    name: "8-Week Mass Accelerator",
    price: "$49.99",
    badge: "Start Here",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
    highlight: true,
    live: true,
    gumroadHref: "https://chikuglobal.gumroad.com/l/teliz",
    desc: "The definitive 8-week blueprint to pack on real size and strength — structured, progressive, and beginner-proof.",
    features: [
      "Quick-start protocol — zero wasted weeks",
      "Double-progression overload system (week by week)",
      "8-week training structure with repeatable sessions",
      "Beginner breakdown of hypertrophy & mechanical tension",
      "Consistency framework for when motivation drops",
    ],
    cta: "Start the Program — $49.99",
  },
  {
    id: "complete-system",
    name: "Complete Bulking System",
    price: "$89.99",
    badge: "Full Bundle",
    badgeColor: "bg-white/10 text-gray-400",
    highlight: false,
    live: false,
    gumroadHref: null,
    desc: "Training + nutrition + recovery in one complete stack. Everything a skinny beginner needs to transform in one purchase.",
    features: [
      "Everything in the 8-Week Mass Accelerator",
      "Everything in the Broke Bulk Meal Plan Pack",
      "Recovery protocols built around sleep & simplicity",
      "Mobility work to support training quality",
      "One aligned system — training and nutrition together",
    ],
    cta: "Get the Full Bundle",
  },
];

const FAQS = [
  {
    q: "I've never lifted before. Will this work?",
    a: "Yes — it's built for complete beginners. Every session is explained, every progression is mapped, and there's no prior experience required.",
  },
  {
    q: "Do I need a gym membership?",
    a: "The 8-Week Mass Accelerator is designed for a standard gym with barbells and dumbbells. Most commercial gyms work perfectly.",
  },
  {
    q: "What if I can't eat 3,000+ calories a day?",
    a: "The Broke Bulk Meal Plan covers this. It includes a high-calorie shake strategy for days when solid food isn't cutting it.",
  },
  {
    q: "Is this a subscription?",
    a: "No. One payment, yours forever. PDF delivered instantly to your email.",
  },
  {
    q: "What's the refund policy?",
    a: "14-day money-back guarantee. If it's not right for you, email and you'll get a full refund — no questions.",
  },
];

export default function ChikuFitPage() {
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
            <span className="font-extrabold text-white tracking-tight text-sm">Chiku Fit</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/promptempire" className="text-xs text-gray-400 hover:text-white transition-colors font-medium hidden sm:block">
              PromptEmpire
            </Link>
            <a
              href="https://chikuglobal.gumroad.com/l/teliz"
              className="text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Start Now — $49.99 →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            💪 Digital guides · Instant PDF delivery · No coach required
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Build real size.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              On a budget.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            Training and nutrition guides for skinny beginners who want size and strength
            without spending $200/month on a coach or $500/month on food.
          </p>
          <p className="text-base text-emerald-300/80 mb-10 font-medium">
            A structured 8-week program with progressive overload, built for people starting from zero.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://chikuglobal.gumroad.com/l/teliz"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-lg px-9 py-4 rounded-xl transition-all shadow-2xl shadow-emerald-900/60 hover:shadow-emerald-900/80 hover:-translate-y-0.5"
            >
              Start the 8-Week Program — $49.99 →
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center font-semibold text-base px-8 py-4 rounded-xl border border-white/10 hover:border-white/25 text-gray-400 hover:text-white transition-all"
            >
              See all guides
            </a>
          </div>

          <p className="text-sm text-gray-500">14-day money-back guarantee · Digital PDF · No subscription</p>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-white/5 bg-white/[0.015] py-6 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["8 weeks", "Structured program"],
            ["$0", "Coach required"],
            ["Budget", "Nutrition strategy"],
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
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">The real problem</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              You&apos;re not making gains because nobody gave you a real plan.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "🍽️",
                title: "You're not eating enough.",
                desc: "Your body hasn't changed because your calories haven't changed. Skinny guys almost always under-eat — even when they think they don't.",
              },
              {
                icon: "🎲",
                title: "Your workouts are random.",
                desc: "No progression means no reason for your body to grow. Random lifting = random results. You need a system, not a YouTube routine.",
              },
              {
                icon: "💸",
                title: "Coaching is out of budget.",
                desc: "Real coaches cost $200–500/month. You need structure now, on a budget that actually exists at your income level.",
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
            <p className="text-lg font-semibold text-emerald-300">
              Chiku Fit fixes the plan, the food, and the progression. All under $90.
            </p>
          </div>
        </div>
      </section>

      {/* What you get from the hero offer */}
      <section className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              8-Week Mass Accelerator · $49.99
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
              A training blueprint you can actually follow.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Built around double-progression overload — the proven method for beginner muscle growth.
              Every session is mapped out. Every week builds on the last. No guesswork.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you&apos;re in a commercial gym or a bare-bones facility, this program adapts.
              You don&apos;t need specialty equipment, you need a system.
            </p>
            <a
              href="https://chikuglobal.gumroad.com/l/teliz"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all"
            >
              Get the 8-Week Program — $49.99 →
            </a>
          </div>

          <div className="space-y-4">
            {[
              ["⚡", "Quick-start protocol", "Day 1 instructions — no wasted weeks figuring out where to begin"],
              ["📈", "Progressive overload system", "Week-by-week progression you track and follow — no ego, just results"],
              ["🧪", "Hypertrophy education", "Understand why it works so you can keep applying it forever"],
              ["🔄", "Repeatable session structure", "Same format every workout — reduces decision fatigue and increases consistency"],
              ["🧠", "Consistency framework", "What to do when motivation disappears (it will)"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="flex items-start gap-4 bg-white/[0.03] border border-white/8 hover:border-emerald-500/30 rounded-xl p-4 transition-colors">
                <span className="text-xl">{icon}</span>
                <div>
                  <p className="font-bold text-white text-sm mb-0.5">{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">The offer stack</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Start where your budget lets you.
            </h2>
            <p className="text-gray-400">Every product works standalone. The bundle gives you everything aligned.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className={`relative rounded-2xl p-7 flex flex-col border transition-all ${
                  product.highlight
                    ? "bg-gradient-to-b from-emerald-900/50 to-emerald-950/50 border-emerald-600/40 shadow-2xl shadow-emerald-900/30"
                    : "bg-white/[0.03] border-white/10 hover:border-white/20"
                }`}
              >
                <div className={`inline-flex self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 ${product.badgeColor}`}>
                  {product.badge}
                </div>

                <h3 className="text-lg font-extrabold text-white mb-1">{product.name}</h3>
                <p className="text-3xl font-extrabold text-white mb-3">{product.price}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{product.desc}</p>

                <ul className="flex-1 space-y-3 mb-8">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${product.highlight ? "text-emerald-400" : "text-gray-500"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>

                {product.live && product.gumroadHref ? (
                  <a
                    href={product.gumroadHref}
                    className="block text-center font-extrabold py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all"
                  >
                    {product.cta}
                  </a>
                ) : (
                  <div className="text-center font-semibold py-4 rounded-xl bg-white/5 text-gray-500 border border-white/10">
                    Coming soon
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-900/20 border border-yellow-700/30 rounded-xl px-5 py-4 text-sm text-yellow-300/80">
            <strong className="text-yellow-300">Note:</strong> The Broke Bulk Meal Plan Pack and Complete Bulking System are launching soon.
            The <strong>8-Week Mass Accelerator is live now</strong> at Gumroad — that&apos;s the best place to start.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 bg-white/[0.015] border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Common questions</h2>
          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className={`py-6 ${i < FAQS.length - 1 ? "border-b border-white/8" : ""}`}>
                <p className="font-bold text-white mb-2">{faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-5 text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent pointer-events-none" />
        <div className="max-w-xl mx-auto relative">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Ready to actually grow?</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Your first program. Under $50.
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            8 weeks. Progressive overload. No guessing. No coach required.
          </p>
          <a
            href="https://chikuglobal.gumroad.com/l/teliz"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xl px-10 py-5 rounded-xl transition-all shadow-2xl shadow-emerald-900/60 hover:-translate-y-0.5"
          >
            Start the 8-Week Mass Accelerator — $49.99 →
          </a>
          <p className="mt-5 text-xs text-gray-600">Instant PDF delivery · 14-day refund guarantee · One-time payment</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            <span className="text-gray-400 font-bold">Chiku Fit</span>
            {" · "}A product of{" "}
            <Link href="/" className="text-gray-400 hover:text-white font-semibold transition-colors">
              Chiku Global Solutions LLC
            </Link>
            {" (Wyoming)"}
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <Link href="/promptempire" className="hover:text-gray-400 transition-colors">PromptEmpire</Link>
            <a href="mailto:chikuglobalsolutions@gmail.com" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
          <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
        </div>
      </footer>
    </main>
  );
}
