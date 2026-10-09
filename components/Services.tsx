const services = [
  {
    tag: "Basic tier",
    name: "Basic business website",
    summary:
      "A clean, professional site that gets your business online fast: pages for what you do, who you are, and how to reach you.",
    bestFor: "New businesses and service providers who need a fast, credible web presence.",
    includes: [
      "Up to basic pages (home, about, services, contact, and one more)",
      "Mobile-responsive layout",
      "Contact form connected to your inbox",
      "Basic on-page SEO setup",
    ],
  },
  {
    tag: "CMS tier",
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
    tag: "Custom tier",
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
    <section id="services" className="border-b border-edge bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="label text-cobalt">What we build</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Three ways to get a website that fits
          </h2>
          <p className="mt-4 text-quiet">
            Pick the tier that matches how your business actually runs, not
            the one with the most features. Every tier gets the same
            attention to performance and usability.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="panel flex h-full flex-col p-7">
              <span className="w-fit rounded-full bg-cobalt/10 px-3 py-1 text-xs font-semibold text-cobalt">{service.tag}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-quiet">
                {service.summary}
              </p>

              <p className="mt-5 label text-quiet">Best for</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/90">
                {service.bestFor}
              </p>

              <p className="mt-5 label text-quiet">Includes</p>
              <ul className="mt-2 space-y-2 text-sm text-ink/90">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <a
                  href="#pricing"
                  className="text-sm font-semibold text-cobalt underline decoration-cobalt/30 underline-offset-4 hover:decoration-cobalt"
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
