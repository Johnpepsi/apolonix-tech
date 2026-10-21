import { projects } from "@/lib/projects";

export default function Work() {
  if (projects.length === 0) return null;

  return (
    <section id="work" className="border-b border-edge bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="label text-cobalt">Recent work</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Real sites for real small businesses
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="panel overflow-hidden">
              {project.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={`Screenshot of the ${project.name} website`}
                  className="aspect-[16/10] w-full border-b border-edge object-cover"
                />
              )}
              <div className="p-7">
                <p className="label text-cobalt">{project.type}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-quiet">
                  {project.summary}
                </p>
                {project.result && (
                  <p className="mt-3 text-sm font-semibold text-ink">
                    {project.result}
                  </p>
                )}
                {project.quote && (
                  <blockquote className="mt-5 border-l-4 border-mint pl-4 text-sm text-ink/90">
                    “{project.quote.text}”
                    <footer className="mt-1 text-quiet">
                      {project.quote.author}
                    </footer>
                  </blockquote>
                )}
                {project.url && (
                  <a
                    href={project.url}
<<<<<<< HEAD
                    className="mt-5 inline-block text-sm font-semibold text-cobalt underline decoration-cobalt/30 underline-offset-4 hover:decoration-cobalt"
                  >
                    {project.linkLabel ?? "Visit site"} →
=======
<<<<<<< HEAD
                    className="mt-5 inline-block text-sm font-semibold text-cobalt underline decoration-cobalt/30 underline-offset-4 hover:decoration-cobalt"
                  >
                    {project.linkLabel ?? "Visit site"} →
=======
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-sm font-semibold text-cobalt underline decoration-cobalt/30 underline-offset-4 hover:decoration-cobalt"
                  >
                    Visit site ↗
>>>>>>> 609baaf81ce1c04802d56866bdd76bb2ddd37482
>>>>>>> c3eb42afaf04a985cb6e3183a39f1ddc837b574b
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
