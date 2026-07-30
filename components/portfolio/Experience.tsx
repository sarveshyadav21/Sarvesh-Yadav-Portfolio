"use client";

import { Section } from "./Section";
import { experience } from "../../data/projects";

export function Experience() {
  return (
    <Section id="experience" subtitle="Career" title="Experience">
      <div
        data-reveal-stagger
        className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-violet-500 before:to-transparent"
      >
        {experience.map((job) => (
          <div key={job.company} data-reveal-item className="relative pl-10">
            <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-violet-600 dark:border-violet-500 bg-background" />
            <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c101d] p-6 shadow-xs">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white">{job.role}</h3>
                  <p className="font-semibold text-violet-700 dark:text-violet-300">{job.company}</p>
                </div>
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {job.period} · {job.location}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="text-sm text-zinc-600 dark:text-zinc-300">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
