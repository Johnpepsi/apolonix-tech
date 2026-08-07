const services = [
  {
    tag: "TIER — BASIC",
    name: "Basic business website",
    summary:
      "A clean, professional site that gets your business online fast: pages for what you do, who you are, and how to reach you.",
    bestFor: "New businesses and service providers who need a fast, credible web presence.",
    includes: [
      "Up to 5 pages (home, about, services, contact, and one more)",
      "Mobile-responsive layout",
      "Contact form connected to your inbox",
      "Basic on-page SEO setup",
    ],
  },
  {
    tag: "TIER — CMS",
    name: "WordPress website design",
    summary:
      "A WordPress site you can update yourself: add pages, swap images, publish posts, without touching code.",
    bestFor: "Teams that publish regularly or want control over content without hiring a developer.",
    includes: [
      "Custom-designed WordPress theme",
      "Editable page builder (Elementor or equivalent)",
      "Blog / news setup with categories",
      "Plugin setup: forms, SEO, caching, security",
    ],
  },
  {
    tag: "TIER — CUSTOM",
    name: "Hardcoded website",
    summary:
      "A website built from the ground up in code, for when off-the-shelf tools can't do what your business needs.",
    bestFor: "Custom functionality, third-party integrations, or web apps where performance matters most.",
    includes: [
      "Custom front-end build (React / Next.js)",
      "API and third-party integrations",
      "Tailored back-end logic and database",
      "Performance and accessibility optimization",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-gridline/25 bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="dim-label text-amber">What we build</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            Three ways to get a website that fits
          </h2>
          <p className="mt-4 text-slate-soft">
            Pick the tier that matches how your business actually runs, not
            the one with the most features. Every tier gets the same
            attention to performance and usability.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="blueprint-panel flex h-full flex-col p-7">
              <span className="dim-label text-amber">{service.tag}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-paper">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-soft">
                {service.summary}
              </p>

              <p className="mt-5 dim-label text-slate-soft">Best for</p>
              <p className="mt-2 text-sm leading-relaxed text-paper/90">
                {service.bestFor}
              </p>

              <p className="mt-5 dim-label text-slate-soft">Includes</p>
              <ul className="mt-2 space-y-2 text-sm text-paper/90">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-amber" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <a
                  href="#pricing"
                  className="dim-label text-amber underline decoration-amber/40 underline-offset-4 hover:decoration-amber"
                >
                  View pricing →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
