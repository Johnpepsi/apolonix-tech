const facts = [
  { label: "Location", value: "Regina, Saskatchewan, Canada" },
  { label: "Focus", value: "Full-stack development" },
  { label: "Building since", value: "2021" },
  { label: "Building since", value: "2019" },
];

const skills = [
  "HTML5 & CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "WordPress",
  "Node / Flask",
  "Docker",
  "Linux servers",
  "SaaS hosting",
  "CI/CD",
];

export default function About() {
  return (
    <section className="border-b border-edge bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="label text-cobalt">About</p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          The person behind Apolonix Tech
        </h1>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-quiet">
            <p>
              Apolonix Tech is run by a single person: a full-stack
              developer and IS/IT System Specialist based in Regina,
              Saskatchewan. Day to day, that means building web-apps
              and fixing issues, keeping the servers and infrastructure behind
              them running, and doing cloud & systems administration work.
            </p>
            <p>
              That background is why Apolonix Tech projects are built the
              same way regardless of tier: with attention to what happens
              after launch, not just how the site looks on day one - proper
              hosting, security basics, and a site that stays fast and
              manageable as your business grows.
            </p>
            <p>
              Outside of work, that same problem-solving interest
              shows up in my home lab used to test servers, hosting, and
              deployment setups before they ever reach a client project.
            </p>
          </div>

          <div className="panel h-fit p-6">
            <p className="label text-quiet">Quick facts</p>
            <dl className="mt-4 space-y-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="label text-cobalt">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-ink/90">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-10">
          <p className="label text-quiet">Also works with</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-edge bg-white px-3 py-1 text-sm text-ink/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-cobalt/20 bg-mist p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="label text-cobalt">Want the fuller picture?</p>
            <p className="mt-2 max-w-md text-sm text-ink/90">
              Experience, projects, and the systems side of the work all
              live on the personal portfolio.
            </p>
          </div>
          <a
            href="https://jp-personal-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            View personal portfolio ↗
          </a>
        </div>
      </div>
    </section>
  );
}
