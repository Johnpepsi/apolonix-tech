const plans = [
  {
    tag: "CMS",
    name: "WordPress Website",
    price: "$700",
    unit: "starting price",
    turnaround: "1–2 weeks",
    features: [
      "Up to 5 pages",
      "Editable page builder",
      "Blog / news section",
      "Custom WordPress theme",
    ],
    highlighted: false,
  },
  {
    tag: "BASIC",
    name: "Basic Business Website",
    price: "$400",
    unit: "starting price",
    turnaround: "2–4 weeks",
    features: [
      "Contact form",
      "Basic SEO setup",
      "Mobile-responsive design",
      "Forms, SEO & security plugins",
    ],
    highlighted: true,
  },
  {
    tag: "CUSTOM",
    name: "Custom-coded Website",
    price: "$2,500",
    unit: "starting price",
    turnaround: "4–8 weeks",
    features: [
      "Custom-coded front end",
      "API / third-party integrations",
      "Custom back end & database",
      "Performance optimization",
    ],
    highlighted: false,
  },
];

const addOns = [
  { label: "Extra page", value: "$80 / page" },
  { label: "Copywriting", value: "$50 / page" },
  { label: "Logo design", value: "from $150" },
  { label: "Monthly maintenance", value: "from $60 / mo" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-gridline/25 bg-blueprint/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="dim-label text-amber">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            Straightforward pricing, scoped to the work
          </h2>
          <p className="mt-4 text-slate-soft">
            These are typical starting prices for each tier. Your quote is
            fixed after a short scoping call, so there are no surprises once
            work begins.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col border p-7 ${
                plan.highlighted
                  ? "border-amber bg-navy"
                  : "border-gridline/30 bg-navy/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="dim-label text-amber">{plan.tag}</span>
                {plan.highlighted && (
                  <span className="dim-label border border-amber px-2 py-0.5 text-amber">
                    Most requested
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-paper">
                {plan.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-mono text-3xl font-medium text-paper">
                  {plan.price}
                </span>
                <span className="dim-label text-slate-soft">{plan.unit}</span>
              </div>

              <p className="mt-2 font-mono text-xs text-slate-soft">
                Typical turnaround: {plan.turnaround}
              </p>

              <ul className="mt-6 space-y-2 border-t border-gridline/25 pt-6 text-sm text-paper/90">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-amber" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 border px-5 py-3 text-center font-mono text-xs uppercase tracking-widest transition-colors ${
                  plan.highlighted
                    ? "border-amber bg-amber text-navy hover:bg-transparent hover:text-amber"
                    : "border-gridline/40 text-paper hover:border-amber hover:text-amber"
                }`}
              >
                Request this tier
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-gridline/25 bg-navy/60 p-6">
          <p className="dim-label text-slate-soft">Common add-ons</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {addOns.map((addOn) => (
              <div key={addOn.label} className="flex flex-col">
                <span className="text-sm text-paper/90">{addOn.label}</span>
                <span className="font-mono text-sm text-amber">{addOn.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
