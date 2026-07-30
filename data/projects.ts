export type Project = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
  featured?: boolean;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "incident-intelligence",
    title: "AI Incident Intelligence Platform",
    description:
      "Enterprise-grade AI platform that automates incident investigation using multi-agent workflows, vector similarity search, and real-time root cause analysis.",
    highlights: [
      "11 AI agents with intelligent model routing using Ollama",
      "Real-time investigation pipeline with BullMQ, Redis & WebSockets",
      "Vector similarity search, dependency graphs & automated postmortems",
    ],
    tech: [
      "NestJS",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "pgvector",
      "BullMQ",
      "Redis",
      "Ollama",
    ],
    link: "https://incident-intelligence-platform-psi.vercel.app/login",
    featured: true,
    gradient: "from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20",
  },

  {
    id: "vectorshift",
    title: "VectorShift - Visual AI Workflow Builder",
    description:
      "Interactive drag-and-drop AI workflow builder inspired by LangFlow and n8n, enabling users to visually create and validate complex AI pipelines.",
    highlights: [
      "9 custom workflow nodes with dynamic handle generation",
      "Graph validation using Kahn's Algorithm for DAG detection",
      "FastAPI backend with ReactFlow-powered visual editor",
    ],
    tech: [
      "React",
      "ReactFlow",
      "Zustand",
      "FastAPI",
      "Python",
      "Pydantic",
      "Docker",
    ],
    link: "https://vector-shift-sigma-lake.vercel.app/",
    featured: true,
    gradient: "from-cyan-600/20 via-sky-500/10 to-blue-500/20",
  },

  {
    id: "document-extraction",
    title: "Document Extraction & Validation Agent",
    description:
      "AI-powered OCR platform that extracts structured information from receipts and invoices using local LLMs, deterministic validation, and confidence scoring.",
    highlights: [
      "OCR with Tesseract and local Ollama LLM integration",
      "Business-rule validation with evidence generation",
      "CSV export, batch processing & interactive web dashboard",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tesseract.js",
      "Ollama",
      "Zod",
      "Tailwind CSS",
    ],
    link: "https://document-extraction-agent-z039.onrender.com/",
    featured: true,
    gradient: "from-emerald-600/20 via-teal-500/10 to-cyan-500/20",
  },

  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio showcasing my software engineering experience, featured projects, technical skills, and achievements.",
    highlights: [
      "Interactive project showcase with smooth animations",
      "Responsive UI optimized for performance and accessibility",
      "Built with reusable components and modern design principles",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    link: "https://sarvesh-yadav-portfolio.vercel.app/",
    gradient: "from-orange-600/20 via-pink-500/10 to-rose-500/20",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "Redux", "TypeScript", "TailwindCSS", "Socket.io"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "Express", "Microservices"],
  },
  {
    category: "AI & Cloud",
    items: ["Ollama", "OpenAI", "Gemini", "AWS Lambda", "CI/CD", "Prompt Engineering"],
  },
  {
    category: "Data & Realtime",
    items: ["PostgreSQL", "Redis", "MongoDB", "WebSocket", "pgvector", "BullMQ"],
  },
];

export const experience = [
  {
    role: "SDE1 – Full Stack",
    company: "Sheshi AI",
    period: "Mar 2025 — Present",
    location: "Bengaluru",
    points: [
      "Built scalable multi-tenant SaaS applications using Node.js, React, Next.js & Redis",
      "Designed JWT/RBAC authentication and white-label architecture for 1,000+ organizations",
      "Implemented AI workflows, Redis Pub/Sub, Socket.io & AWS Lambda for scalable real-time systems",
      "Optimized Next.js performance (SSR/SSG, lazy loading), reducing page load from ~6s to <500ms",
    ],
  },
];

export const education = [
  {
    degree: "BTech – Electronics and Communications Engineering",
    school: "Poornima College of Engineering",
    period: "2018 — 2022",
  },
  {
    degree: "Full-Stack Development",
    school: "Masai School",
    period: "Aug 2024 — Mar 2025",
  }
];

export const certifications = [
  "Full-Stack Development Certification (Java) — Samyak Computer Classes",
];
