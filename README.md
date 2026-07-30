# 🚀 Sarvesh Yadav — AI-Powered Developer Portfolio

> A modern, full-stack developer portfolio built with **Next.js 14**, featuring an embedded **AI chatbot** (Ollama & Gemini), animated UI with **GSAP + Framer Motion**, secure **JWT authentication**, and a **PostgreSQL** backend via **Prisma ORM**.

---
## Live Link: https://sarvesh-yadav-portfolio.vercel.app/

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [AI Chatbot Configuration](#-ai-chatbot-configuration)
- [Database Setup](#-database-setup)
- [Available Scripts](#-available-scripts)
- [Routes](#-routes)
- [Deployment](#-deployment)

---

## 🌟 Overview

This is a **production-grade personal portfolio** that doubles as a live engineering showcase. It highlights 2+ years of full-stack experience across Java, Node.js, and Next.js — with measurable results:

- ⚡ **12× faster** page loads (6s → <500ms via SSR/SSG optimization)
- 🗄️ **~40% reduction** in DB load via Redis caching
- 🤖 **Embedded AI assistant** trained on resume context, powered locally via Ollama or cloud via Gemini

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Animated Hero** | GSAP timeline animations with floating glow orbs and scroll hints |
| 🤖 **AI Portfolio Chatbot** | Floating chatbot that answers visitor questions about skills, experience & projects |
| 🔐 **Authentication** | JWT-based signup/login with secure session management (Prisma + PostgreSQL) |
| 📊 **Dashboard** | Protected dashboard route accessible post-login |
| 🌙 **Dark Mode** | Theme switching via `next-themes` |
| 📱 **Responsive Design** | Mobile-first layout with TailwindCSS |
| ⚙️ **Multi-provider AI** | Seamlessly falls back between Gemini API and local Ollama models |
| 🔄 **Scroll Animations** | Section-level scroll-triggered animations via GSAP ScrollTrigger |
| 📁 **Modular Architecture** | Clean separation of `components/`, `lib/`, `modules/`, `data/` |

---

## 🛠 Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** — App Router, SSR/SSG, React Server Components
- **[React 18](https://react.dev/)** — UI library
- **[TypeScript 5.9](https://www.typescriptlang.org/)** — Type-safe development
- **[TailwindCSS 3](https://tailwindcss.com/)** — Utility-first styling
- **[GSAP 3](https://gsap.com/) + [@gsap/react](https://gsap.com/react/)** — High-performance animations
- **[Framer Motion 12](https://www.framer.com/motion/)** — Declarative React animations
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** — Dark/light mode

### Backend & API
- **Next.js API Routes** — Serverless API handlers
- **[Prisma 6](https://www.prisma.io/)** — Type-safe ORM
- **[PostgreSQL](https://www.postgresql.org/)** — Primary database (`user_auth` schema)
- **[bcrypt](https://www.npmjs.com/package/bcrypt)** — Password hashing
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)** — JWT session management
- **[Zod 4](https://zod.dev/)** — Schema validation

### AI / LLM
- **[Ollama](https://ollama.ai/)** — Local LLM inference (phi3, gemma:2b, mistral, llama3)
- **[Google Gemini API](https://ai.google.dev/)** — Cloud LLM fallback
- **[react-markdown](https://github.com/remarkjs/react-markdown)** — Renders AI responses as Markdown

---

## 📁 Project Structure

```
New-Project/
├── app/
│   ├── (auth)/
│   │   ├── login/          # Login page
│   │   └── signup/         # Signup page
│   ├── (dashboard)/
│   │   └── dashboard/      # Protected dashboard page
│   ├── api/
│   │   ├── auth/           # Auth API routes (login, signup, session)
│   │   └── chat/           # AI chat endpoint (POST /api/chat)
│   ├── globals.css         # Global styles & design tokens
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Portfolio home page
│
├── components/
│   ├── chat/               # PortfolioChatbot (floating + inline)
│   ├── portfolio/          # Hero, About, Skills, Projects, Experience,
│   │                       # Education, Contact, Footer, Navbar, etc.
│   └── theme/              # ThemeToggle component
│
├── data/
│   ├── bio.ts              # Profile info & resume content
│   ├── bio-chat.ts         # Chat-specific bio context
│   └── projects.ts         # Projects, skills, experience, education data
│
├── lib/
│   ├── auth/               # JWT helpers, session utilities
│   ├── cache/              # Caching utilities
│   ├── db/                 # Prisma client instance
│   ├── gsap/               # GSAP plugin registration
│   ├── chat-prompt.ts      # Builds the AI prompt from resume context
│   ├── format-chat-reply.ts# Formats AI responses for display
│   ├── ollama-chat.ts      # Ollama API integration
│   └── utils.ts            # Shared utilities (clsx, etc.)
│
├── modules/
│   └── auth/               # Auth module (forms, validation logic)
│
├── prisma/
│   ├── schema.prisma       # Database schema (User, Session models)
│   └── migrations/         # Prisma migration history
│
├── providers/              # React context providers (theme, etc.)
├── .env.example            # Environment variable template
├── tailwind.config.js      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** or **yarn**
- **PostgreSQL** database instance
- **Ollama** (optional, for local AI) — [Install Ollama](https://ollama.ai/)

### 1. Clone the Repository

```bash
git clone https://github.com/sarveshyadav21/New-Project.git
cd New-Project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Fill in the required values (see [Environment Variables](#-environment-variables) below).

### 4. Set Up the Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy
```

### 5. Start the Development Server

```bash
npm run dev
```

The app runs on **[http://localhost:3001](http://localhost:3001)** by default.

---

## 🔧 Environment Variables

Copy `.env.example` to `.env` and configure the following:

```env
# ─── Database ─────────────────────────────────────────────
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=user_auth"

# ─── JWT Auth ─────────────────────────────────────────────
JWT_SECRET="your-super-secret-jwt-key"

# ─── AI Chat Provider ─────────────────────────────────────
# "ollama" = use local Ollama only
# "gemini" = try Gemini first, fall back to Ollama
CHAT_PROVIDER=ollama
USE_OLLAMA_ONLY=true

# ─── Ollama (Local LLM) ───────────────────────────────────
OLLAMA_HOST=http://localhost:11434
OLLAMA_CHAT_MODEL=gemma:2b        # or phi3:mini, mistral:7b, llama3
OLLAMA_TIMEOUT_MS=180000

# ─── Google Gemini (Optional Cloud Fallback) ──────────────
GOOGLE_API_KEY=                    # Leave empty if using Ollama only
GEMINI_MODEL=gemini-2.0-flash

# ─── External Links ───────────────────────────────────────
NEXT_PUBLIC_INCIDENT_PLATFORM_URL=http://localhost:3000
```

---

## 🤖 AI Chatbot Configuration

The portfolio includes an intelligent floating chatbot that answers visitor questions using your resume as context.

### Using Ollama (Local — Recommended)

```bash
# Install and start Ollama
ollama serve

# Pull a model (gemma:2b is fastest)
ollama pull gemma:2b

# Or use other supported models
ollama pull phi3:mini
ollama pull mistral:7b
ollama pull llama3
```

Set in `.env`:
```env
CHAT_PROVIDER=ollama
USE_OLLAMA_ONLY=true
OLLAMA_CHAT_MODEL=gemma:2b
```

### Using Google Gemini (Cloud)

```env
CHAT_PROVIDER=gemini
USE_OLLAMA_ONLY=false
GOOGLE_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-2.0-flash
```

### How It Works

1. Visitor sends a message via the chatbot UI
2. `POST /api/chat` builds a prompt using resume context from `data/bio-chat.ts`
3. Based on `CHAT_PROVIDER`, the request routes to Ollama or Gemini
4. The formatted response is streamed back and rendered as Markdown

---

## 🗄️ Database Setup

The app uses **PostgreSQL** with a dedicated `user_auth` schema managed by Prisma.

### Schema Overview

```prisma
model User {
  userId       String    @id @default(uuid())
  firstName    String
  lastName     String
  phoneNumber  String?   @unique
  email        String    @unique
  passwordHash String
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
  sessions     Session[]
  @@schema("user_auth")
}

model Session {
  sessionId  String   @id @default(uuid())
  userId     String
  tokenHash  String   @unique
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  user       User     @relation(...)
  @@schema("user_auth")
}
```

### Common Commands

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Create and apply a new migration
npx prisma migrate dev --name <migration-name>

# Apply migrations in production
npx prisma migrate deploy

# Open Prisma Studio (visual DB browser)
npx prisma studio
```

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start dev server on port **3001** |
| `build` | `npm run build` | Build for production |
| `start` | `npm run start` | Start production server |
| `lint` | `npm run lint` | Run Next.js ESLint |

---

## 🗺 Routes

| Path | Type | Description |
|---|---|---|
| `/` | Public | Portfolio home (Home, About, Skills, Projects, Experience, Education, Chat, Contact) |
| `/login` | Public | Login page |
| `/signup` | Public | Registration page |
| `/dashboard` | Protected | User dashboard (requires auth) |
| `POST /api/chat` | API | AI chatbot endpoint |
| `POST /api/auth/...` | API | Authentication endpoints |

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Set all environment variables in the Vercel dashboard
4. Deploy — Vercel automatically handles Next.js builds

> **Note:** For the AI chatbot on Vercel, use `CHAT_PROVIDER=gemini` since Ollama requires a locally running server. Ensure `GOOGLE_API_KEY` is set.

### Self-Hosted / VPS

```bash
npm run build
npm run start
```

Configure a reverse proxy (Nginx/Caddy) and use **PM2** for process management:

```bash
pm2 start "npm run start" --name portfolio
```

---

## 👤 Author

**Sarvesh Yadav**
- 📧 [sarveshyadav5971@gmail.com](mailto:sarveshyadav5971@gmail.com)
- 💼 [LinkedIn](https://linkedin.com/in/sarvesh-yadav-84bb53150/)
- 🐙 [GitHub](https://github.com/sarveshyadav21)
- 📍 Bangalore, India

---

## 📄 License

This project is licensed under the **ISC License**.

---

<p align="center">Built with ❤️ by Sarvesh Yadav — SDE · Full-Stack · Java & Node.js · Next.js · AI</p>
