import Link from "next/link";

const SUB_LINKS = [
  { href: "/chiku-fit", label: "Overview" },
  { href: "/chiku-fit/programs/8-week-mass-accelerator", label: "8-Week Program" },
  { href: "/chiku-fit/nutrition", label: "Nutrition" },
  { href: "/chiku-fit/about", label: "About" },
  { href: "/chiku-fit/faq", label: "FAQ" },
];

export function ChikuFitNav({ active }: { active: string }) {
  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-medium">
              Chiku Global Solutions
            </Link>
            <span className="text-white/20 text-sm">›</span>
            <Link href="/chiku-fit" className="font-extrabold text-white tracking-tight text-sm">Chiku Fit</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/promptempire" className="text-xs text-gray-400 hover:text-white transition-colors hidden md:block">PromptEmpire</Link>
            <Link href="/ai-systems" className="text-xs text-gray-400 hover:text-white transition-colors hidden md:block">AI Systems</Link>
            <a
              href="https://chikuglobal.gumroad.com/l/teliz"
              className="text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Start Now — $49.99 →
            </a>
          </div>
        </div>
      </nav>

      <nav className="fixed top-14 inset-x-0 z-40 bg-gray-950/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-11 flex items-center gap-1 overflow-x-auto">
          {SUB_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                active === link.href
                  ? "bg-emerald-500/15 text-emerald-300"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export function ChikuFitFooter() {
  return (
    <footer className="py-10 px-5 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <div>
          <span className="text-gray-400 font-bold">Chiku Fit</span>
          {" · "}A product of{" "}
          <Link href="/" className="text-gray-400 hover:text-white font-semibold transition-colors">
            Chiku Global Solutions LLC
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/chiku-fit" className="hover:text-gray-400 transition-colors">Overview</Link>
          <Link href="/chiku-fit/programs/8-week-mass-accelerator" className="hover:text-gray-400 transition-colors">Program</Link>
          <Link href="/chiku-fit/nutrition" className="hover:text-gray-400 transition-colors">Nutrition</Link>
          <Link href="/chiku-fit/about" className="hover:text-gray-400 transition-colors">About</Link>
          <Link href="/chiku-fit/faq" className="hover:text-gray-400 transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
        </div>
        <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
      </div>
    </footer>
  );
}
