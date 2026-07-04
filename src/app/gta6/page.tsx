import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCTS, WAITLIST_MAILTO, sortedArticles } from "@/lib/gta6-data";

export const metadata: Metadata = {
  title: "GTA 6 Hub — News, Guides & Money-Making Blueprints",
  description:
    "Weekly GTA 6 news roundups, launch prep, and GTA Online money-making guides. Release date, editions, preload, Trailer 3 — everything tracked in one place.",
  openGraph: {
    title: "GTA 6 Hub — News, Guides & Money-Making Blueprints",
    description:
      "Weekly GTA 6 news roundups, launch prep, and GTA Online money-making guides.",
    type: "website",
  },
};

const KEY_FACTS = [
  ["Nov 19, 2026", "Launch day"],
  ["Nov 12", "Preload begins"],
  ["$79.99 / $99.99", "Standard / Ultimate"],
  ["PS5 · Series X|S", "No PC confirmed"],
];

export default function GTA6HubPage() {
  const articles = sortedArticles();
  // Frozen at build time; the site redeploys with each weekly article, keeping it fresh enough.
  const daysToLaunch = Math.max(
    0,
    Math.ceil((Date.UTC(2026, 10, 19) - Date.now()) / 86_400_000)
  );

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
            <span className="font-extrabold text-white tracking-tight text-sm">GTA 6 Hub</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#guides" className="text-xs text-gray-400 hover:text-white transition-colors font-medium hidden sm:block">
              Guides
            </a>
            <a
              href="#latest"
              className="text-xs font-bold bg-pink-600 hover:bg-pink-500 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Latest news →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/25 text-pink-400 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            🌴 Updated weekly · Launch: November 19, 2026
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Your GTA 6{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400">
              command center.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Weekly news roundups, launch prep, and money-making guides — so you walk into
            Vice City on day one already ahead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#latest"
              className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-lg px-9 py-4 rounded-xl transition-all shadow-2xl shadow-pink-900/60 hover:-translate-y-0.5"
            >
              Read this week&apos;s roundup →
            </a>
            <a
              href="#guides"
              className="inline-flex items-center justify-center font-semibold text-base px-8 py-4 rounded-xl border border-white/10 hover:border-white/25 text-gray-400 hover:text-white transition-all"
            >
              See the guides
            </a>
          </div>
        </div>
      </section>

      {/* Key facts bar */}
      <div className="border-y border-white/5 bg-white/[0.015] py-6 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {KEY_FACTS.map(([stat, label]) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-extrabold text-white">{stat}</p>
              <p className="text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest articles */}
      <section id="latest" className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">The feed</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Every week in GTA 6, tracked.
            </h2>
          </div>

          <div className="space-y-5">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/gta6/news/${article.slug}`}
                className="block bg-white/[0.03] border border-white/8 hover:border-pink-500/30 rounded-2xl p-7 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(`${article.date}T00:00:00Z`).toLocaleDateString("en-US", {
                      timeZone: "UTC",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-gray-600">· {article.readMinutes} min read</span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-pink-300 transition-colors mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="guides" className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Guides</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Don&apos;t grind blind.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Stack cash in GTA Online now, then hit Vice City on day one with a plan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className={`relative rounded-2xl p-7 flex flex-col border transition-all ${
                  product.highlight
                    ? "bg-gradient-to-b from-pink-600/90 to-pink-700/90 border-pink-400/40 shadow-2xl shadow-pink-900/50"
                    : "bg-white/[0.04] border-white/10 hover:border-white/20"
                }`}
              >
                {product.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap ${
                      product.highlight ? "bg-yellow-400 text-gray-900" : "bg-pink-600 text-white"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                <div className="mb-6">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${product.highlight ? "text-pink-200" : "text-gray-500"}`}>
                    {product.name}
                  </p>
                  <span className="text-5xl font-extrabold text-white">{product.price}</span>
                  <p className={`text-sm leading-relaxed mt-3 ${product.highlight ? "text-pink-100" : "text-gray-400"}`}>
                    {product.desc}
                  </p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${product.highlight ? "text-pink-200" : "text-pink-400"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={product.highlight ? "text-pink-50" : "text-gray-300"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={product.href ?? WAITLIST_MAILTO}
                  className={`block text-center font-extrabold py-4 rounded-xl transition-all text-base ${
                    product.highlight
                      ? "bg-white text-pink-700 hover:bg-pink-50"
                      : "bg-pink-600 hover:bg-pink-500 text-white"
                  }`}
                >
                  {product.href ? `${product.cta} — ${product.price}` : product.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-gray-500">
            Secure checkout via Stripe · Instant email delivery · Fan-made guides, not affiliated with Rockstar Games
          </p>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-24 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-950/30 to-transparent pointer-events-none" />
        <div className="max-w-xl mx-auto relative">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">
            {daysToLaunch > 0 ? `${daysToLaunch} days until Vice City` : "GTA 6 is out now"}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Be ready for day one.
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Join the waitlist and get the launch-week guide drop the moment it&apos;s ready.
          </p>
          <a
            href={WAITLIST_MAILTO}
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-xl px-10 py-5 rounded-xl transition-all shadow-2xl shadow-pink-900/60 hover:-translate-y-0.5"
          >
            Join the waitlist →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            <span className="text-gray-400 font-bold">GTA 6 Hub</span>
            {" · "}A product of{" "}
            <Link href="/" className="text-gray-400 hover:text-white font-semibold transition-colors">
              Chiku Global Solutions LLC
            </Link>
          </div>
          <p className="max-w-md text-center md:text-right leading-relaxed">
            Unofficial fan site. Not affiliated with or endorsed by Rockstar Games or Take-Two Interactive.
            Grand Theft Auto is a trademark of Take-Two Interactive.
          </p>
        </div>
      </footer>
    </main>
  );
}
