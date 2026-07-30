"use client";

import { Brain, Rocket, Shield, Zap } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  {
    icon: Brain,
    title: "AI Systems",
    text: "Multi-agent orchestration, embeddings, and production LLM pipelines.",
  },
  {
    icon: Rocket,
    title: "Full Stack",
    text: "Next.js + NestJS monorepos that scale from MVP to enterprise.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "Obsessed with sub-second UX — SSR, caching, and measured optimizations.",
  },
  {
    icon: Shield,
    title: "Security",
    text: "Auth, RBAC, tenant isolation, and session hardening in real SaaS.",
  },
];

export function About() {
  return (
    <Section id="about" subtitle="Introduction" title="Building the future of intelligent ops">
      <div className="grid gap-12 lg:grid-cols-2">
        <p
          data-reveal
          className="text-lg leading-8 text-zinc-600 dark:text-zinc-300 will-change-transform"
        >
          I&apos;m a Full-Stack SDE with 1+ years across
          Node.js, and Next.js — based in Bangalore. I build{" "}
          <span className="font-semibold text-zinc-900 dark:text-white">multi-tenant SaaS</span>, real-time
          WebSocket systems, and AI microservices for 1000+ organizations at
          Sheshi AI.
          <br />
          <br />
          My work sits at the intersection of{" "}
          <span className="font-semibold text-violet-600 dark:text-violet-300">backend architecture</span>,{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-300">real-time UX</span>, and{" "}
          <span className="font-semibold text-fuchsia-600 dark:text-fuchsia-300">applied machine learning</span>.
        </p>

        <div
          data-reveal-stagger
          className="grid gap-4 sm:grid-cols-2"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              data-reveal-item
              className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c101d] p-5 shadow-xs transition-transform duration-300 hover:-translate-y-1 hover:border-violet-500/40"
            >
              <item.icon className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              <h3 className="mt-3 font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
