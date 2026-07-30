"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, FileText } from "lucide-react";
import { profile } from "../../data/bio";
import { ThemeToggle } from "../theme/theme-toggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 150) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", onScroll);

    const sectionIds = ["home", "about", "skills", "projects", "experience", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 150) {
          setActiveSection("home");
          return;
        }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.15,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("/resume", "_blank");
    const link = document.createElement("a");
    link.href = "/resume";
    link.download = "Sarvesh_Yadav_fs39_32082.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20 text-sm text-violet-600 dark:text-violet-300">
            SY
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-3 lg:gap-4 md:flex">
          <ThemeToggle />
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-all duration-200 ${
                  isActive
                    ? "font-semibold text-violet-700 dark:text-violet-300 bg-violet-500/10 dark:bg-violet-500/20 px-3 py-1 rounded-full border border-violet-500/30 shadow-xs"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-muted-foreground dark:hover:text-foreground px-2 py-1"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#chat"
            className="flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500 shadow-md shadow-violet-600/20 active:scale-95"
          >
            <Sparkles className="h-4 w-4" />
            Ask AI
          </a>
          <a
            href="/resume"
            onClick={handleResumeClick}
            className="flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 dark:bg-violet-500/15 px-3.5 py-1.5 text-sm font-semibold text-violet-700 dark:text-violet-300 shadow-xs transition hover:bg-violet-500/20 dark:hover:bg-violet-500/25 active:scale-95"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-muted-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background/95 px-6 pb-4 md:hidden"
          >
            {links.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 text-sm transition-colors ${
                    isActive
                      ? "font-semibold text-violet-700 dark:text-violet-300 pl-3 border-l-2 border-violet-500 bg-violet-500/10 rounded-r-lg"
                      : "text-zinc-600 dark:text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/resume"
              onClick={(e) => {
                setOpen(false);
                handleResumeClick(e);
              }}
              className="mt-3 flex items-center justify-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 dark:bg-violet-500/15 py-2 text-sm font-semibold text-violet-700 dark:text-violet-300"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
