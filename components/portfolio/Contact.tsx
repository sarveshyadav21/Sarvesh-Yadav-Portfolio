"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Section } from "./Section";
import { profile } from "../../data/bio";

export function Contact() {
  return (
    <Section id="contact" subtitle="Get in touch" title="Let's build something remarkable">
      <div
        data-reveal
        className="mx-auto max-w-2xl rounded-3xl border border-violet-500/30 bg-white dark:bg-[#0c101d] bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 p-10 text-center shadow-md dark:shadow-none backdrop-blur-sm will-change-transform"
      >
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          Open to full-time roles, contract work, and interesting AI product
          collaborations.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 px-6 py-3 text-sm font-semibold shadow-md transition-all duration-200 hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-600 dark:text-muted-foreground">
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 font-medium hover:text-violet-600 dark:hover:text-foreground transition-colors"
          >
            {profile.phone}
          </a>
          <span className="inline-flex items-center gap-2 font-medium">
            <MapPin className="h-4 w-4 text-violet-600 dark:text-violet-400" />
            {profile.location}
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium hover:text-violet-600 dark:hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium hover:text-violet-600 dark:hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
