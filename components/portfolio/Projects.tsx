"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { Section } from "./Section";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <Section id="projects" subtitle="Portfolio" title="Featured projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            data-reveal
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c101d] bg-gradient-to-br ${project.gradient} p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:hover:border-violet-500/40`}
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-500/10 dark:bg-violet-500/20 px-2.5 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300 shadow-xs">
                    <Star className="h-3 w-3 fill-current text-violet-600 dark:text-violet-300" />
                    Flagship
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600 dark:bg-violet-400" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/10 px-2.5 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 transition-colors hover:border-violet-500/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <div className="mt-6 pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-violet-600/25 transition-all duration-200 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/35 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View live</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
