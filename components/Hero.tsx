import SiteMock from "./SiteMock";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100svh-69px)] items-center bg-white"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14 md:py-16">
        <div>
          <p className="label text-cobalt">Web design &amp; development</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            The right website for your business
            <span className="text-quiet">—nothing more, nothing less.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-quiet md:text-lg">
            Whether you&apos;re looking for a fast, professionally designed
            website, a WordPress site that&apos;s easy to manage, or a custom
            web application with advanced functionality, Apolonix Tech
            delivers solutions tailored to your goals. Every project is built
            with performance, usability, and long-term growth in mind.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#estimate" className="btn-primary">
              Get an instant estimate
            </a>
            <a href="#pricing" className="btn-secondary">
              See pricing
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <SiteMock />
        </div>
      </div>
    </section>
  );
}