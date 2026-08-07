import BlueprintMark from "./BlueprintMark";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-gridline/25 bg-blueprint bg-grid bg-[position:-1px_-1px]"
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
        <div>
          <p className="dim-label text-amber">Web design &amp; development</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-5xl">
            The right website for your business
            <span className="text-slate-soft">—nothing more, nothing less.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-soft">
            Whether you&apos;re looking for a fast, professionally designed
            website, a WordPress site that&apos;s easy to manage, or a custom
            web application with advanced functionality, Apolonix Tech
            delivers solutions tailored to your goals. Every project is built
            with performance, usability, and long-term growth in mind.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="border border-amber bg-amber px-6 py-3 font-mono text-xs uppercase tracking-widest text-navy transition-transform hover:-translate-y-0.5"
            >
              See pricing
            </a>
            <a
              href="#services"
              className="border border-gridline/50 px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-amber hover:text-amber"
            >
              View services
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <BlueprintMark />
        </div>
      </div>
    </section>
  );
}
