import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/80 backdrop-blur border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div>
            <span className="font-bold text-white tracking-tight">Chiku Global Solutions</span>
            <span className="text-gray-500 text-xs ml-2">LLC · Wyoming</span>
          </div>
          <a
            href="mailto:chikuglobalsolutions@gmail.com"
            className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            Registered LLC · Wyoming · Est. 2025
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Chiku Global{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-gold-400">
              Solutions LLC
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A multi-brand digital business. We build and sell tools, systems, and resources that help
            entrepreneurs, freelancers, and beginners grow — online and off.
          </p>

          <a
            href="mailto:chikuglobalsolutions@gmail.com"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-base px-6 py-3 rounded-xl transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Business lines */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold text-center mb-12">
            Our business lines
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            {/* PromptEmpire */}
            <div className="group bg-white/[0.03] border border-white/10 hover:border-brand-500/50 rounded-2xl p-7 flex flex-col transition-colors">
              <div className="w-10 h-10 bg-brand-600/20 rounded-xl flex items-center justify-center mb-5 text-2xl">
                🤖
              </div>
              <div className="mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-400">PromptEmpire</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">AI Business Prompts</h2>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                500 battle-tested AI prompts for freelancers and entrepreneurs. Cold emails, sales pages,
                SOPs, and more — buy once, use forever.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">From <span className="text-white font-semibold">$37</span></div>
                <Link
                  href="/promptempire"
                  className="text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group-hover:translate-x-0.5 inline-block"
                >
                  See products →
                </Link>
              </div>
            </div>

            {/* Chiku Fit */}
            <div className="group bg-white/[0.03] border border-white/10 hover:border-green-500/50 rounded-2xl p-7 flex flex-col transition-colors">
              <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center mb-5 text-2xl">
                💪
              </div>
              <div className="mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-green-400">Chiku Fit</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">Fitness Digital Products</h2>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                Training blueprints and meal-plan guides for skinny beginners on a budget. Structure,
                progression, and real results — no expensive coaching needed.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">From <span className="text-white font-semibold">$29.99</span></div>
                <Link
                  href="/chiku-fit"
                  className="text-sm font-semibold text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-0.5 inline-block"
                >
                  See products →
                </Link>
              </div>
            </div>

            {/* Dental AI Agency */}
            <div className="group bg-white/[0.03] border border-white/10 hover:border-blue-500/50 rounded-2xl p-7 flex flex-col transition-colors">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center mb-5 text-2xl">
                🦷
              </div>
              <div className="mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Agency</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">Dental AI Agency</h2>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                AI-powered growth systems for dental practices. Automate patient follow-ups, reviews,
                and bookings. Retainer-based, results-driven.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">From <span className="text-white font-semibold">$1,497</span></div>
                <a
                  href="https://chiku-global-solutions.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-0.5 inline-block"
                >
                  Learn more →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="py-16 px-4 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-bold text-white mb-3">
            Built to generate income with low overhead and no gatekeepers.
          </p>
          <p className="text-gray-400">
            Every product we ship is digital, evergreen, and scalable. One sale at 3 AM counts the same as one at noon.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>
            <span className="text-gray-400 font-semibold">Chiku Global Solutions LLC</span>
            <span className="ml-2">· Registered in Wyoming</span>
          </div>
          <div className="flex gap-6">
            <Link href="/promptempire" className="hover:text-gray-400 transition-colors">PromptEmpire</Link>
            <Link href="/chiku-fit" className="hover:text-gray-400 transition-colors">Chiku Fit</Link>
            <a href="https://chiku-global-solutions.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Dental Agency</a>
          </div>
          <a href="mailto:chikuglobalsolutions@gmail.com" className="hover:text-gray-400 transition-colors">
            chikuglobalsolutions@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
