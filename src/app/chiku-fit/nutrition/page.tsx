import type { Metadata } from "next";
import Link from "next/link";
import { ChikuFitNav, ChikuFitFooter } from "@/components/ChikuFitNav";

export const metadata: Metadata = {
  title: "Budget Nutrition for Skinny Beginners — The Chiku Fit Nutrition Philosophy",
  description:
    "How to eat for size on a budget. The Chiku Fit nutrition framework: calorie surplus that doesn't break your wallet, high-density foods, and the shake protocol for hard-to-eat days.",
};

const PRINCIPLES = [
  {
    num: "01",
    title: "Calorie surplus is non-negotiable",
    body: "You will not grow without eating more than you burn. This isn't a preference, it's physics. Most skinny lifters eat what they think is 'a lot' and it's still 500 calories short. Track for two weeks. The truth shocks most people.",
  },
  {
    num: "02",
    title: "Cheap calories aren't worse calories",
    body: "Oats, rice, pasta, ground beef, eggs, peanut butter, bananas, milk. The cheapest foods in the grocery store are also the most calorie-dense per dollar. Mass building doesn't require a $300/week grocery bill — it requires picking the right $80 of it.",
  },
  {
    num: "03",
    title: "Liquid calories solve the volume problem",
    body: "If your stomach can't handle 3,500 calories of solid food (and it probably can't yet), shakes are the cheat code. One blender. Milk, oats, banana, peanut butter, protein powder. 800 calories in 4 minutes.",
  },
  {
    num: "04",
    title: "Protein in every meal — no exceptions",
    body: "Aim for ~1g per pound of bodyweight daily, spread across 4-5 feedings. Doesn't have to be steak — eggs, milk, chicken thighs, ground beef, lentils, and whey all work. The point is protein in every meal, not perfection.",
  },
  {
    num: "05",
    title: "Sleep is the third macro",
    body: "You can eat perfectly and train perfectly and still not grow if you sleep 5 hours. Recovery is when adaptation happens. Treat 7-9 hours like a non-negotiable training variable. Because it is one.",
  },
];

const GROCERY = [
  { food: "Oats (large container)", price: "~$4", caloriesPer$: "~3,000", note: "The bulk-staple of bulk staples" },
  { food: "Whole milk (1 gallon)", price: "~$4", caloriesPer$: "~2,400", note: "Liquid calories + protein" },
  { food: "Eggs (18-count)", price: "~$5", caloriesPer$: "~1,400", note: "Whole eggs, not just whites" },
  { food: "Ground beef (80/20, 1lb)", price: "~$5", caloriesPer$: "~1,100", note: "Cheap protein + fat" },
  { food: "Rice (5lb bag)", price: "~$5", caloriesPer$: "~7,500", note: "Most calorie-per-dollar in the store" },
  { food: "Peanut butter (40oz jar)", price: "~$6", caloriesPer$: "~5,500", note: "Easy add to anything" },
  { food: "Bananas (per dozen)", price: "~$3", caloriesPer$: "~800", note: "Pre/post workout fuel" },
  { food: "Pasta (1lb box)", price: "~$2", caloriesPer$: "~2,000", note: "Bulk meal base" },
];

const SHAKE = [
  "300ml whole milk",
  "1/2 cup oats (dry)",
  "1 banana",
  "2 tbsp peanut butter",
  "1 scoop whey (optional)",
  "Blend 30 seconds",
];

export default function NutritionPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <ChikuFitNav active="/chiku-fit/nutrition" />

      <section className="pt-32 pb-14 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Nutrition philosophy</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            How to eat for size{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              on a real budget.
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No $300/week grocery bills. No expensive supplements. Just calorie surplus, cheap foods,
            and a shake when solid food won&apos;t cut it.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-3xl mx-auto space-y-4">
          {PRINCIPLES.map((p) => (
            <div key={p.num} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex gap-5">
              <div className="text-3xl font-extrabold text-emerald-500/40 flex-shrink-0 w-12">{p.num}</div>
              <div>
                <h3 className="font-extrabold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">The grocery list</p>
            <h2 className="text-3xl font-extrabold text-white">$50 of mass-building staples</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              These 8 items cover ~25,000+ calories of clean bulk fuel.
              That&apos;s about 7 days at 3,500 calories — for under $40.
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 px-6 py-3 bg-white/[0.02] border-b border-white/10 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <div className="col-span-2">Food</div>
              <div className="text-right">Price</div>
              <div className="text-right">Cal / $</div>
            </div>
            {GROCERY.map((g, i) => (
              <div key={g.food} className={`grid grid-cols-4 px-6 py-4 items-center text-sm ${i < GROCERY.length - 1 ? "border-b border-white/5" : ""}`}>
                <div className="col-span-2">
                  <p className="font-bold text-white">{g.food}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{g.note}</p>
                </div>
                <div className="text-right text-gray-300 font-semibold">{g.price}</div>
                <div className="text-right text-emerald-400 font-bold">{g.caloriesPer$}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">The 800-calorie shake</p>
            <h2 className="text-3xl font-extrabold text-white mb-5">When solid food isn&apos;t cutting it.</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Some days, getting to your calorie target on solid food alone is impossible. The shake fixes it.
              4 minutes, one blender, ~800 calories in 16oz.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Drink one with breakfast. Or after training. Or before bed. Most lifters who can&apos;t bulk on solid food
              gain 5-10lbs in the first month just from adding one of these per day.
            </p>
          </div>
          <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-2xl p-6">
            <p className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-4">Recipe</p>
            <ul className="space-y-2">
              {SHAKE.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-emerald-400">→</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-emerald-700/30 text-sm text-emerald-200">
              <strong className="text-white">~800 calories · ~30g protein · costs about $1</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Coming soon</p>
          <h2 className="text-3xl font-extrabold text-white mb-4">Full meal plan PDF — $29.99</h2>
          <p className="text-gray-400 mb-8">
            The complete Broke Bulk Meal Plan Pack — daily layouts, grocery lists, prep instructions, and substitution charts.
            Launching shortly. Pair it with the 8-Week Mass Accelerator for the full system.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://chikuglobal.gumroad.com/l/teliz" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Get the 8-Week Program — $49.99
            </a>
            <Link href="/chiku-fit" className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              See all guides
            </Link>
          </div>
        </div>
      </section>

      <ChikuFitFooter />
    </main>
  );
}
