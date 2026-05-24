import type { Metadata } from "next";
import Link from "next/link";
import { ChikuFitNav, ChikuFitFooter } from "@/components/ChikuFitNav";

export const metadata: Metadata = {
  title: "8-Week Mass Accelerator — Complete Program Breakdown | Chiku Fit",
  description:
    "The full breakdown of the 8-Week Mass Accelerator — week-by-week training, double-progression overload, hypertrophy science, and the consistency framework. $49.99 lifetime access.",
};

const WEEKS = [
  { week: "Week 1", title: "Anchor & Calibrate", focus: "Establish baseline weights, learn movement patterns, lock in form on the 6 core lifts." },
  { week: "Week 2", title: "First Progression", focus: "Add weight or reps on every working set. The compounding starts here." },
  { week: "Week 3", title: "Volume Push", focus: "Add a back-off set to your weakest movements. Recovery test — sleep gets prioritized." },
  { week: "Week 4", title: "Deload-Lite", focus: "Reduce sets by 1 across the board. Joints recover, nervous system resets, gains consolidate." },
  { week: "Week 5", title: "Intensity Climb", focus: "Heaviest singles of the program so far. Mental strength matters as much as physical." },
  { week: "Week 6", title: "Hypertrophy Block", focus: "Higher reps, shorter rest. Maximum mechanical tension — the real growth phase." },
  { week: "Week 7", title: "Peak Strength", focus: "Test your new top-set weights. Many lifters add 15-25lbs to their main lifts here." },
  { week: "Week 8", title: "Test & Plan Forward", focus: "Re-measure everything. Set the next 8-week cycle based on what's working." },
];

const PRINCIPLES = [
  {
    icon: "📈",
    title: "Double-progression overload",
    desc: "The single most effective system for beginner growth. Add reps until you hit the top of the range. Then add weight and reset reps to the bottom. Repeat forever. This is how strength is actually built — not by 'feeling the burn.'",
  },
  {
    icon: "🔁",
    title: "Repeatable session structure",
    desc: "Every workout follows the same template: warm-up, primary compound, secondary compound, isolation, cooldown. Same format every time = less decision fatigue, more consistency.",
  },
  {
    icon: "🧪",
    title: "Mechanical tension over 'pump'",
    desc: "Hypertrophy comes from time under load and progressive overload — not from chasing the burn. The program is designed to maximize the variable that actually triggers growth.",
  },
  {
    icon: "🛌",
    title: "Recovery as a variable",
    desc: "Built-in deload weeks, sleep protocol, and a way to know when to push vs back off. Most beginner programs ignore this — and most beginners plateau because of it.",
  },
];

const TOOLS = [
  { name: "8-week training calendar", desc: "Print or save to phone. Tells you what to do every day." },
  { name: "6 core lift demonstrations", desc: "Form cues and common mistakes for every primary movement." },
  { name: "Weight tracker template", desc: "Record every set, every week. See the progression in real time." },
  { name: "RPE scale guide", desc: "How to tell when a set was too easy, perfect, or too hard." },
  { name: "Substitution chart", desc: "What to swap if your gym doesn't have a specific machine or bar." },
  { name: "Consistency framework", desc: "What to do when motivation disappears (because it will)." },
];

export default function MassAcceleratorPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <ChikuFitNav active="/chiku-fit/programs/8-week-mass-accelerator" />

      <section className="pt-32 pb-14 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Hero Offer · $49.99 · Live now on Gumroad
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            The <span className="text-emerald-400">8-Week Mass Accelerator</span>
            <br />— full program breakdown.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Built for skinny beginners who want size and strength without guesswork.
            8 weeks. Double-progression. Repeatable structure. No coach required.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-6 text-center">Week-by-week roadmap</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {WEEKS.map((w) => (
              <div key={w.week} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">{w.week}</span>
                </div>
                <h3 className="font-extrabold text-white mb-2">{w.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{w.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Why it works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">4 principles, no fluff.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-extrabold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">What you actually get</p>
            <h2 className="text-3xl font-extrabold text-white">In the PDF download</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {TOOLS.map((t) => (
              <div key={t.name} className="flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-xl p-4">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-white/[0.015] border-y border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Ready to start?</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">$49.99 — yours forever.</h2>
          <p className="text-gray-400 mb-8">Instant PDF download. 14-day refund guarantee. No subscription.</p>
          <a
            href="https://chikuglobal.gumroad.com/l/teliz"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-lg px-9 py-4 rounded-xl transition-all shadow-2xl shadow-emerald-900/60"
          >
            Get the 8-Week Mass Accelerator →
          </a>
          <p className="mt-5 text-sm text-gray-500">
            Pair it with the{" "}
            <Link href="/chiku-fit/nutrition" className="text-emerald-400 hover:text-emerald-300 underline">budget nutrition strategy</Link>
            {" "}for the full system.
          </p>
        </div>
      </section>

      <ChikuFitFooter />
    </main>
  );
}
