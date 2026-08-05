"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, FileText } from "lucide-react";
import { profile } from "../../data/bio";
import { gsap, registerGsapPlugins } from "../../lib/gsap/register";
import profilePic from "../../data/1000051084.png";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReduced) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        scale: 0.92,
        duration: 0.65,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 56,
            duration: 0.85,
          },
          "-=0.35",
        )
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 28,
            duration: 0.6,
          },
          "-=0.45",
        )
        .from(
          ".hero-tagline",
          {
            opacity: 0,
            y: 20,
            duration: 0.55,
          },
          "-=0.4",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, clearProps: "all" },
          "-=0.3",
        )
        .fromTo(
          ".hero-social-link",
          { opacity: 0, scale: 0.75 },
          { opacity: 1, scale: 1, stagger: 0.08, duration: 0.45, clearProps: "all" },
          "-=0.25",
        )
        .from(
          ".hero-avatar",
          {
            opacity: 0,
            scale: 0.7,
            duration: 0.7,
          },
          0,
        );

      gsap.to(".hero-avatar", {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb-a", {
        x: 40,
        y: -24,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb-b", {
        x: -32,
        y: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      gsap.to(".hero-scroll-hint", {
        y: 10,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-between px-6 pt-24 pb-8 overflow-hidden"
    >
      <div className="hero-orb-a glow-orb pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-600" />
      <div className="hero-orb-b glow-orb pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-600" />

      <div className="relative z-10 mx-auto my-auto max-w-4xl text-center">
        {/* Profile photo */}
        <div className="hero-avatar mb-6 inline-block">
          <div
            className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full p-[3px]"
            style={{
              background:
                "conic-gradient(from 0deg, #a855f7, #e879f9, #22d3ee, #a855f7)",
            }}
          >
            <div className="h-full w-full overflow-hidden rounded-full border-4 border-background">
              <Image
                src={profilePic}
                alt="Sarvesh Yadav — profile photo"
                width={144}
                height={144}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full opacity-30 blur-lg"
              style={{
                background:
                  "conic-gradient(from 0deg, #a855f7, #e879f9, #22d3ee, #a855f7)",
              }}
            />
          </div>
        </div>

        <div>
          <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-700 dark:text-violet-300 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            </span>
            {profile.availability}
          </span>
        </div>

        <h1 className="hero-title mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {profile.name.split(" ")[0]}
          </span>
        </h1>

        <p className="hero-subtitle mt-3 text-lg text-zinc-700 dark:text-muted-foreground font-medium sm:text-xl">
          {profile.title}
        </p>

        <p className="hero-tagline mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#projects"
            className="hero-cta rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 px-5 py-2.5 text-sm font-semibold shadow-md transition-all duration-200 hover:scale-[1.02]"
          >
            View my work
          </a>
          <a
            href="#chat"
            className="hero-cta rounded-2xl border border-zinc-300 dark:border-white/15 bg-white dark:bg-[#0c101d] px-5 py-2.5 text-sm font-semibold text-zinc-900 dark:text-white shadow-xs transition-all duration-200 hover:border-violet-500/60 hover:shadow-sm"
          >
            Chat with my AI
          </a>
          {/* <a
            href={
              process.env.NEXT_PUBLIC_INCIDENT_PLATFORM_URL ??
              "http://localhost:3000"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta inline-flex items-center gap-2 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300 shadow-xs transition-all duration-200 hover:bg-cyan-500/20 hover:scale-[1.02]"
          >
            Live demo
            <ExternalLink className="h-4 w-4" />
          </a> */}
          <a
            href="/resume"
            onClick={(e) => {
              e.preventDefault();
              window.open("/resume", "_blank");
              const link = document.createElement("a");
              link.href = "/resume";
              link.download = "Sarvesh_Yadav_fs39_32082.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="hero-cta inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:from-violet-500 hover:to-fuchsia-500 hover:scale-[1.02]"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {[
            { href: profile.github, icon: Github, label: "GitHub" },
            { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
            {
              href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`,
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hero-social-link flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 dark:border-white/15 bg-white dark:bg-[#0c101d] text-zinc-700 dark:text-zinc-300 shadow-xs transition hover:border-violet-500/60 hover:text-violet-600 dark:hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-20 mt-4 flex justify-center">
        <a
          href="#about"
          className="hero-scroll-hint p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
