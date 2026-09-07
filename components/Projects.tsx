import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="mt-20">
      <section className="container">
        <h2 className="text-xl md:text-2xl mb-5 text-secondary" data-reveal="0">
          projects
        </h2>

        <ul className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <li
              key={project.title}
              data-reveal={index * 0.1}
              className="relative flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 transition-colors duration-200 ease-(--ease) hover:border-secondary"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-15/5 font-medium text-text">
                  {project.demo ? (
                    // Stretched link: the ::after overlay makes the whole card
                    // open the demo without nesting one anchor inside another,
                    // which would be invalid and unreachable by keyboard. The
                    // repo link below sits above it on z-10.
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="after:absolute after:inset-0 after:rounded-xl"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                <p className="text-14/5 text-pretty text-body">
                  {project.description}
                </p>
              </div>

              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} repository`}
                  className="bg-black dark:bg-control-active relative z-10 shrink-0 rounded-lg border border-border px-4 py-2 text-14/5 text-white transition-colors duration-200 ease-(--ease) hover:bg-control-active"
                >
                  Code
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
