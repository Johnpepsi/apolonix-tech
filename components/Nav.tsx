"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#services", label: "Services" },
    { href: "/#work", label: "Work" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/website-types", label: "Website types" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cobalt font-display text-sm font-bold text-white">
            AT
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Apolonix Tech
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-quiet transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/#contact" className="btn-primary !px-4 !py-2 max-[420px]:hidden">
          Get a quote
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-edge md:hidden"
        >
          <span
            className={`h-[2px] w-4 bg-ink transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-4 bg-ink transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-edge bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-quiet transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get a quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
