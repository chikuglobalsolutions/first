import Link from "next/link";

export const metadata = {
  title: "Chiku Fit — Mass & Meal Structure for Skinny Beginners on a Budget",
  description:
    "Digital training and nutrition guides for skinny beginners who want size and strength without expensive coaching or crazy food bills.",
};

const offers = [
  {
    id: "broke-bulk",
    name: "Broke Bulk Meal Plan Pack",
    badge: "Start Here · $29.99",
    price: "$29.99",
    role: "entry",
    desc: "A cheap, calorie-dense meal strategy for lifters who need size without spending crazy money on food.",
    features: [
      "Surplus strategy for controlled growth",
      "High-calorie shake approach for hard-to-eat days",
      "Budget bulking tips that fit a real grocery budget",
      "Common mistakes that keep beginners small",
      "Sample 3,500-calorie daily layout built around affordable foods",
    ],
    cta: "Get the Meal Plan Pack — $29.99",
    href: null, // coming soon — add Gumroad URL when live
    state: "coming_soon",
  },
  {
    id: "mass-accelerator",
    name: "8-Week Mass Accelerator",
    badge: "Hero Offer · $49.99",
    price: "$49.99",
    role: "hero",
    desc: "The definitive blueprint to packing on raw size and strength with progressive overload, beginner structure, and zero fluff.",
    features: [
      "Quick-start protocol — stop wasting weeks on guesswork",
      "Consistency rules that keep you moving when motivation drops",
      "Beginner-friendly breakdown of hypertrophy and mechanical tension",
      "Double-progression overload system you can follow week to week",
      "8-week training structure built around repeatable sessions",
    ],
    cta: "Start the 8-Week Program — $49.99",
    href: "https://chikuglobal.gumroad.com/l/teliz",
    state: "live",
  },
  {
    id: "complete-system",
    name: "Complete Bulking System",
    badge: "Full Bundle · $89.99",
    price: "$89.99",
    role: "bundle",
    desc: "The full Chiku Fit stack — training blueprint, meal-plan support, and bonus recovery guidance in one place.",
    features: [
      "Everything in the 8-Week Mass Accelerator",
      "Everything in the Broke Bulk Meal Plan Pack",
      "Recovery guidance built around sleep and simple routines",
      "Mobility protocols that support better training quality",
      "One complete beginner stack — training and nutrition aligned",
    ],
    cta: "Get the Full Bundle — $89.99",
    href: null, // coming soon — add Gumroad URL when live
    state: "coming_soon",
  },
];

export default function ChikuFitPage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/80 backdrop-blur border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              ← PromptEmpire
            </Link>
            <span className="text-white/20">·</span>
            <span className="font-bold text-white">Chiku Fit</span>
          </div>
          <a
            href="https://chikuglobal.gumroad.com/l/teliz"
            className="text-xs font-semibold bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Buy Now →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-900/40 border border-green-700/40 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            Digital guides · Instant download
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Mass & Meal Structure for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Skinny Beginners on a Budget
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop guessing your workouts. Stop under-eating. Get a clear training plan, a cheap meal structure,
            and a progression system you can actually follow — without expensive coaching.
          </p>

          <a
            href="https://chikuglobal.gumroad.com/l/teliz"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-xl shadow-green-900/50"
          >
            Start the 8-Week Program — $49.99 →
          </a>

          <p className="mt-5 text-sm text-gray-500">
            Digital PDF · Instant delivery · No subscription
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <div className="border-y border-white/5 bg-white/[0.02] py-8 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            ["🥩", "You're not eating enough", "Your body hasn't changed because your calories haven't changed."],
            ["📉", "Your workouts are random", "No progression = no reason for your body to grow."],
            ["💸", "Coaching is out of budget", "You need structure, not a $200/month trainer."],
          ].map(([icon, title, desc]) => (
            <div key={title} className="p-5">
              <div className="text-3xl mb-3">{icon}</div>
              <p className="font-semibold text-white mb-1">{title}</p>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-4">The Chiku Fit offer stack</h2>
          <p className="text-gray-400 text-center mb-12">Start with what fits your budget. Upgrade when you're ready.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {offers.map((offer) => {
              const isLive = offer.state === "live";
              return (
                <div
                  key={offer.id}
                  className={`relative rounded-2xl p-7 flex flex-col border ${
                    offer.role === "hero"
                      ? "bg-green-900/20 border-green-700/40 shadow-xl shadow-green-900/20"
                      : "bg-white/[0.03] border-white/8"
                  }`}
                >
                  <div className={`inline-flex self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 ${
                    offer.role === "hero"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-white/10 text-gray-400"
                  }`}>
                    {offer.badge}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{offer.name}</h3>
                  <p className="text-sm text-gray-400 mb-5 leading-relaxed">{offer.desc}</p>

                  <ul className="flex-1 space-y-2.5 mb-7">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${offer.role === "hero" ? "text-green-400" : "text-gray-500"}`}
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

                  {isLive ? (
                    <a
                      href={offer.href!}
                      className="text-center font-bold py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white transition-colors"
                    >
                      {offer.cta}
                    </a>
                  ) : (
                    <div className="text-center font-semibold py-3.5 rounded-xl bg-white/5 text-gray-500 border border-white/10 cursor-not-allowed">
                      Checkout coming soon
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-yellow-900/20 border border-yellow-700/30 rounded-xl px-5 py-4 text-sm text-yellow-300">
            <strong>Note:</strong> The Broke Bulk Meal Plan Pack and Complete Bulking System checkouts are coming soon.
            The 8-Week Mass Accelerator is available now at{" "}
            <a href="https://chikuglobal.gumroad.com/l/teliz" className="underline font-semibold">
              Gumroad
            </a>.
          </div>
        </div>
      </section>

      {/* Brand promise */}
      <section className="py-16 px-4 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-gray-400 text-sm italic mb-6">
            "No fake transformation promises. No magic shortcut. Just the system a skinny beginner can actually use."
          </p>
          <a
            href="https://chikuglobal.gumroad.com/l/teliz"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            Start the 8-Week Program — $49.99 →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5 text-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Chiku Fit by Chiku Global Solutions LLC</p>
        <p className="mt-1">
          Questions? <a href="mailto:chikuglobalsolutions@gmail.com" className="hover:text-gray-400">chikuglobalsolutions@gmail.com</a>
          {" · "}
          <Link href="/" className="hover:text-gray-400">PromptEmpire</Link>
        </p>
      </footer>
    </main>
  );
}
