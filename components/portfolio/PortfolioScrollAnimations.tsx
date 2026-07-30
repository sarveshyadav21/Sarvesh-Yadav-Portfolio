"use client";

import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins, ScrollTrigger } from "../../lib/gsap/register";

export function PortfolioScrollAnimations() {
  useGSAP(() => {
    registerGsapPlugins();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return;

    const revealTriggers: ScrollTrigger[] = [];

    // Individual reveal elements (including project cards)
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
      if (tween.scrollTrigger) revealTriggers.push(tween.scrollTrigger);
    });

    // Staggered items using batching so each batch triggers when scrolled into view
    gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
      const items = gsap.utils.toArray<HTMLElement>(
        group.querySelectorAll("[data-reveal-item]")
      );
      if (!items.length) return;

      const batchTriggers = ScrollTrigger.batch(items, {
        start: "top 90%",
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.1,
              ease: "power2.out",
              clearProps: "all",
              overwrite: true,
            }
          );
        },
        once: true,
      });

      revealTriggers.push(...batchTriggers);
    });

    // Refresh ScrollTrigger after initial mount layout stabilizes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      revealTriggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
