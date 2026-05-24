import type { Metadata } from "next";
import Link from "next/link";
import { ChikuFitNav, ChikuFitFooter } from "@/components/ChikuFitNav";

export const metadata: Metadata = {
  title: "FAQ — Chiku Fit | Training & Nutrition Guides",
  description:
    "Common questions about the Chiku Fit 8-Week Mass Accelerator, nutrition philosophy, gym requirements, and what to expect.",
};

const SECTIONS = [
  {
    title: "Getting started",
    items: [
      { q: "I've never lifted before. Will this work?", a: "Yes. The 8-Week Mass Accelerator is built for complete beginners. Form cues are spelled out, progressions are mapped, and there's a substitution chart if your gym doesn't have a specific piece of equipment." },
      { q: "Do I need a gym membership?", a: "Yes — a standard commercial gym is ideal. You need access to a barbell, dumbbells, and a basic rack. Most $15/month gyms qualify. The program isn't designed for home/bodyweight only." },
      { q: "How long until I see results?", a: "Visible size and strength changes typically show up around week 3-4 for honest beginners. The first 2 weeks are calibration. Don't measure progress in the first 14 days — measure it at week 4 and week 8." },
      { q: "Can I do this if I'm not skinny?", a: "The program is optimized for skinny beginners (technical term: 'hardgainers'). If you're already at a healthy weight or trying to lose weight, this program will be too high-calorie for your goal." },
    ],
  },
  {
    title: "The program",
    items: [
      { q: "How many days per week?", a: "4 training days per week, ~60-75 minutes each. Built to fit a real work/school schedule." },
      { q: "What if I miss a day?", a: "Just pick up where you left off — don't try to 'make it up.' Consistency over 8 weeks matters more than perfection in any single week." },
      { q: "Is there a deload week?", a: "Yes. Week 4 has reduced volume to let joints and nervous system recover. Don't skip it — it's where most of the gains consolidate." },
      { q: "What's the equipment list?", a: "Barbell, dumbbells, bench, squat rack, lat pulldown, cable column. Standard commercial gym setup. The PDF includes a full substitution chart for anything missing." },
    ],
  },
  {
    title: "Nutrition",
    items: [
      { q: "Do I need to track calories?", a: "Strongly recommended for the first 2 weeks at minimum. Most skinny lifters dramatically under-eat without realizing it. Tracking honestly for 14 days is the single highest-leverage thing you can do." },
      { q: "What if I can't eat 3,000+ calories per day?", a: "The shake protocol fixes this. 800 calories in 4 minutes via blender — milk, oats, banana, peanut butter, optional whey. One per day adds ~5-10lbs in the first month for most people." },
      { q: "Do I need protein powder?", a: "Optional but useful. Whole foods are always better, but whey is the cheapest way to hit protein targets if you're struggling. ~$20/month is plenty." },
      { q: "What about supplements?", a: "Creatine monohydrate is the only one worth taking — $15 for a 6-month supply. Everything else is optional or unnecessary at the beginner stage." },
    ],
  },
  {
    title: "Buying & delivery",
    items: [
      { q: "How do I get the PDF after buying?", a: "Gumroad emails the download link instantly after payment. If you don't see it, check spam — and email chikuglobalsolutions@gmail.com if it's still missing." },
      { q: "Can I read it on my phone?", a: "Yes. It's a standard PDF that opens on any device." },
      { q: "What's the refund policy?", a: "14-day money-back guarantee through Gumroad. If it's not right for you, email and you'll get a full refund — no questions." },
      { q: "What about the meal plan and the bundle?", a: "The Broke Bulk Meal Plan Pack ($29.99) and Complete Bulking System ($89.99) are launching shortly. For now, the 8-Week Mass Accelerator is the live offer at $49.99 — start there." },
    ],
  },
];

export default function ChikuFitFAQPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <ChikuFitNav active="/chiku-fit/faq" />

      <section className="pt-32 pb-14 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Common questions, honest answers.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t see your question? Email{" "}
            <a href="mailto:chikuglobalsolutions@gmail.com" className="text-emerald-400 hover:text-emerald-300 underline">
              chikuglobalsolutions@gmail.com
            </a>
            {" "}— responses within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-3xl mx-auto space-y-12">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6">{s.title}</h2>
              <div className="space-y-0 bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
                {s.items.map((item, i) => (
                  <details key={item.q} className={`group ${i !== 0 ? "border-t border-white/5" : ""}`}>
                    <summary className="px-6 py-5 cursor-pointer flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                      <h3 className="font-bold text-white">{item.q}</h3>
                      <span className="text-emerald-400 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 bg-white/[0.015] border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to start?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a href="https://chikuglobal.gumroad.com/l/teliz" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Get the 8-Week Program — $49.99
            </a>
            <Link href="/chiku-fit/programs/8-week-mass-accelerator" className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              See full program breakdown
            </Link>
          </div>
        </div>
      </section>

      <ChikuFitFooter />
    </main>
  );
}
