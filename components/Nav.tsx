export default function Nav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gridline/25 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center border border-amber font-mono text-xs text-amber">
            AT
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-paper">
            Apolonix Tech
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="dim-label text-slate-soft transition-colors hover:text-amber"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-amber px-4 py-2 font-mono text-xs uppercase tracking-widest text-amber transition-colors hover:bg-amber hover:text-navy md:inline-block"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}
