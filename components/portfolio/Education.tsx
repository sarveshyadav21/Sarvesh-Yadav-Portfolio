"use client";

import { GraduationCap, Award } from "lucide-react";
import { Section } from "./Section";
import { certifications, education } from "../../data/projects";

export function Education() {
  return (
    <Section id="education" subtitle="Background" title="Education & certifications">
      <div data-reveal-stagger className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.school}
            data-reveal-item
            className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c101d] p-6 shadow-xs"
          >
            <GraduationCap className="h-8 w-8 text-violet-600 dark:text-violet-400" />
            <h3 className="mt-3 font-bold text-zinc-900 dark:text-white">{item.degree}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{item.school}</p>
            <p className="mt-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">{item.period}</p>
          </div>
        ))}

        <div
          data-reveal-item
          className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c101d] p-6 shadow-xs"
        >
          <Award className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
          <h3 className="mt-3 font-bold text-zinc-900 dark:text-white">Certifications</h3>
          <ul className="mt-4 space-y-2">
            {certifications.map((cert) => (
              <li key={cert} className="text-sm text-zinc-600 dark:text-zinc-300">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
