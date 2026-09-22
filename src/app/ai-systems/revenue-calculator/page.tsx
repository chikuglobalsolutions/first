import type { Metadata } from "next";
import Link from "next/link";
import { AISystemsNav, AISystemsFooter } from "@/components/AISystemsNav";
import RevenueLeakCalculator from "@/components/RevenueLeakCalculator";

export const metadata: Metadata = {
  title: "Revenue Leak Calculator — How Much Is Slow Follow-Up Costing You? | Chiku AI Systems",
  description:
    "Free calculator. Enter your leads, close rate, and no-show rate to see exactly how much revenue you lose each month to slow follow-up, no-shows, and dormant contacts.",
};

export default function RevenueCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <AISystemsNav active="/ai-systems/revenue-calculator" />

      <section className="pt-32 pb-12 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Free tool</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            How much revenue are you <span className="text-sky-400">leaking every month?</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Most businesses lose more money to slow follow-up and no-shows than they spend on marketing to replace it.
            Move the sliders to see your number.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <RevenueLeakCalculator />
      </section>

      <section className="py-14 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">How this is calculated</p>
          <p className="text-gray-400 leading-relaxed mb-5">
            Every number above is a visible formula, not a black box. We use deliberately conservative recovery rates —
            the real figures are often higher, but we&apos;d rather under-promise:
          </p>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-3">
              <span className="text-sky-400 flex-shrink-0">→</span>
              <span>
                <span className="text-white font-semibold">Slow response:</span> we assume you recover only 8–22% of
                leads currently lost to delay, scaled by how slow your current response is.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400 flex-shrink-0">→</span>
              <span>
                <span className="text-white font-semibold">No-shows:</span> we assume reminders plus waitlist auto-fill
                recover 45% of missed appointments — not all of them.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400 flex-shrink-0">→</span>
              <span>
                <span className="text-white font-semibold">Dormant contacts:</span> we assume your list is worked in six
                staggered batches at a 2% reactivation rate, well under typical win-back performance.
              </span>
            </li>
          </ul>
          <p className="text-xs text-gray-600 leading-relaxed mt-6">
            This is an estimate for planning purposes, based on the inputs you provide. It is not a guarantee of
            results. Your actual numbers depend on your offer, market, and execution.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Want us to plug the biggest leak first?</h2>
          <p className="text-gray-400 mb-8">
            Tell us about your business and we&apos;ll scope the single system with the highest return for your numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ai-systems#intake"
              className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Apply now →
            </Link>
            <Link
              href="/ai-systems/systems"
              className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              See all 6 systems
            </Link>
          </div>
        </div>
      </section>

      <AISystemsFooter />
    </main>
  );
}
