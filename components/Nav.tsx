"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/website-types", label: "Website types" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gridline/25 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
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
          href="/#contact"
          className="hidden border border-amber px-4 py-2 font-mono text-xs uppercase tracking-widest text-amber transition-colors hover:bg-amber hover:text-navy md:inline-block"
        >
          Get a quote
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-gridline/40 md:hidden"
        >
          <span
            className={`h-[1.5px] w-4 bg-paper transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-4 bg-paper transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-gridline/25 bg-navy px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="dim-label text-slate-soft transition-colors hover:text-amber"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 border border-amber px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-amber transition-colors hover:bg-amber hover:text-navy"
            >
              Get a quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
