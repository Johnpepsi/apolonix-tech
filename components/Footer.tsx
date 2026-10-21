const EMAIL = "apolonixtech@gmail.com";
const PHONE_DISPLAY = "(306) 316-9171";
const PHONE_LINK = "+13063169171";

const explore = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Recent work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/website-types", label: "Website types" },
  { href: "/about", label: "About" },
];

const offers = [
  "Business websites",
  "WordPress websites",
  "Custom web apps",
  "Care and maintenance",
];

const linkClass =
  "rounded-sm text-white/75 transition-colors hover:text-white focus-visible:outline-white";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <a href="/" className="inline-flex items-center gap-2.5 rounded-sm focus-visible:outline-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cobalt font-display text-sm font-bold text-white">
                AT
              </span>
              <span className="font-display text-lg font-bold">Apolonix Tech</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              The right website for your business, nothing more, nothing less.
              WordPress sites, business websites and custom web apps for small
              businesses.
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-block rounded-lg bg-cobalt px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink focus-visible:outline-white"
            >
              Get a free quote
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-bold text-white">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {explore.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold text-white">What we build</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {offers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <span className="block text-white/60">Email</span>
                <a href={`mailto:${EMAIL}`} className={`${linkClass} break-all`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="block text-white/60">Phone</span>
                <a href={`tel:${PHONE_LINK}`} className={linkClass}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <span className="block text-white/60">Based in</span>
                <span className="text-white/75">Regina, Saskatchewan, Canada</span>
              </li>
              <li>
                <span className="block text-white/60">Response time</span>
                <span className="text-white/75">Within one business day</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Apolonix Tech. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="https://jp-personal-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Personal portfolio ↗
            </a>
            <a href="#top" className={linkClass}>
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}