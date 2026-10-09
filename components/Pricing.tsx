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
    tag: "Basic",
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
    tag: "Custom",
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
    <section id="pricing" className="border-b border-edge bg-mist py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="label text-cobalt">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Straightforward pricing, scoped to the work
          </h2>
          <p className="mt-4 text-quiet">
            These are typical starting prices for each tier. Your quote is
            fixed after a short scoping call, so there are no surprises once
            work begins.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                plan.highlighted
                  ? "border-cobalt bg-white shadow-lg shadow-cobalt/10 ring-1 ring-cobalt"
                  : "border-edge bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="label text-cobalt">{plan.tag}</span>
                {plan.highlighted && (
                  <span className="rounded-full bg-cobalt px-3 py-0.5 text-xs font-semibold text-white">
                    Most requested
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {plan.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-ink">
                  {plan.price}
                </span>
                <span className="label text-quiet">{plan.unit}</span>
              </div>

              <p className="mt-2 text-sm text-quiet">
                Typical turnaround: {plan.turnaround}
              </p>

              <ul className="mt-6 space-y-2 border-t border-edge pt-6 text-sm text-ink/90">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 rounded-lg border px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "border-cobalt bg-cobalt text-white hover:border-ink hover:bg-ink"
                    : "border-edge text-ink hover:border-cobalt hover:text-cobalt"
                }`}
              >
                Request this tier
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-edge bg-white p-6">
          <p className="label text-quiet">Common add-ons</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {addOns.map((addOn) => (
              <div key={addOn.label} className="flex flex-col">
                <span className="text-sm text-ink/90">{addOn.label}</span>
                <span className="text-sm font-semibold text-cobalt">{addOn.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
