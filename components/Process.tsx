const steps = [
  {
    step: "01",
    title: "Scope",
    description:
      "A short call to understand your business, your pages, and what the site needs to do. You get a fixed quote before anything starts.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Layout and visual direction built around your content, not a generic template. You review and approve before development begins.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "The site gets built tier-appropriate: WordPress theme, hardcoded front end, or a lean static build for basic sites.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Testing across devices, domain and hosting setup, and a walkthrough of anything you'll manage yourself going forward.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-edge bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="label text-cobalt">How it runs</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Four steps, start to launch
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="panel p-7">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cobalt/10 text-sm font-bold text-cobalt">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-quiet">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
