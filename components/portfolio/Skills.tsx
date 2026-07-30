"use client";

import { Section } from "./Section";
import { skills } from "../../data/projects";

export function Skills() {
  return (
    <Section id="skills" subtitle="Expertise" title="Skills & technologies">
      <div data-reveal-stagger className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            data-reveal-item
            className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c101d] p-6 shadow-xs transition-transform duration-300 hover:-translate-y-1 hover:border-violet-500/40"
          >
            <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-400">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 px-3 py-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 transition hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-700 dark:hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
