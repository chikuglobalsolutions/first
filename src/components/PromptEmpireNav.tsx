import Link from "next/link";

const SUB_LINKS = [
  { href: "/promptempire", label: "Overview" },
  { href: "/promptempire/preview", label: "Free Preview" },
  { href: "/promptempire/categories", label: "Categories" },
  { href: "/promptempire/about", label: "About" },
  { href: "/promptempire/faq", label: "FAQ" },
];

export function PromptEmpireNav({ active }: { active: string }) {
  return (
    <>
      {/* Primary nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-medium">
              Chiku Global Solutions
            </Link>
            <span className="text-white/20 text-sm">›</span>
            <Link href="/promptempire" className="font-extrabold text-white tracking-tight text-sm">PromptEmpire</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/chiku-fit" className="text-xs text-gray-400 hover:text-white transition-colors hidden md:block">Chiku Fit</Link>
            <Link href="/ai-systems" className="text-xs text-gray-400 hover:text-white transition-colors hidden md:block">AI Systems</Link>
            <a
              href="https://buy.stripe.com/7sI8wR50Kf2adoI28X"
              className="text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Get the Bundle →
            </a>
          </div>
        </div>
      </nav>

      {/* Sub nav */}
      <nav className="fixed top-14 inset-x-0 z-40 bg-gray-950/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-11 flex items-center gap-1 overflow-x-auto">
          {SUB_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                active === link.href
                  ? "bg-violet-500/15 text-violet-300"
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

export function PromptEmpireFooter() {
  return (
    <footer className="py-10 px-5 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <div>
          <span className="text-gray-400 font-bold">PromptEmpire</span>
          {" · "}A product of{" "}
          <Link href="/" className="text-gray-400 hover:text-white font-semibold transition-colors">
            Chiku Global Solutions LLC
          </Link>
          {" (Wyoming)"}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/promptempire" className="hover:text-gray-400 transition-colors">Overview</Link>
          <Link href="/promptempire/preview" className="hover:text-gray-400 transition-colors">Preview</Link>
          <Link href="/promptempire/categories" className="hover:text-gray-400 transition-colors">Categories</Link>
          <Link href="/promptempire/about" className="hover:text-gray-400 transition-colors">About</Link>
          <Link href="/promptempire/faq" className="hover:text-gray-400 transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
        </div>
        <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
      </div>
    </footer>
  );
}
