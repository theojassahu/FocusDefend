# FocusDefend — Smarter Digital Wellbeing Through Learning

> **Core Philosophy:** `LEARN → EARN → UNLOCK`  
> **Core Value Proposition:** *"Turn screen time into learning time."*  
> **Supporting Message:** *"Build healthier digital habits through learning, intelligent restrictions, and meaningful rewards."*  
> **Target Production URL:** [https://focusdefend.vercel.app/](https://focusdefend.vercel.app/)

---

## 1. Project Overview

FocusDefend is a production-grade, AI-powered digital wellbeing and habit transformation platform engineered specifically for students. Rather than relying solely on adversarial locks that cause family friction, FocusDefend empowers students to earn recreational screen time through verified academic achievements (such as supported NCERT curriculum modules and subject quizzes).

### The Four Stages
1. **Learn:** Students access bite-sized educational material and NCERT revision cards.
2. **Prove Your Knowledge:** Students complete conceptual quizzes and exercises.
3. **Earn Focus Credits:** Verified achievements award tamper-resistant Focus Credits.
4. **Unlock Screen Time:** Credits unlock permitted recreational apps within family guardrails.

---

## 2. Technology Stack & Design System

- **Framework:** React 18 + TypeScript + Vite 6
- **Styling:** Tailwind CSS 3.4 + PostCSS + Custom Design Tokens
- **Icons:** Lucide React
- **Motion & Interactions:** Framer Motion + Hardware Accelerated CSS
- **Typography:** Plus Jakarta Sans & Inter with JetBrains Mono for telemetry tags

### Color Tokens
| Token | Hex Value | Application |
|---|---|---|
| Midnight Navy | `#071426` | Deep base background |
| Deep Navy | `#0B1B32` | Alternate container background |
| Dark Surface | `#10233B` | Interactive cards and panels |
| Brand Green | `#39D98A` | Primary brand accent & highlights |
| Emerald | `#20B978` | Secondary action highlights |
| Soft Mint | `#A7F3D0` | High-contrast callout text |
| Border | `rgba(255, 255, 255, 0.10)` | Restrained card outlines |

---

## 3. Implemented Sections (In Strict Narrative Sequence)

1. **Responsive Navigation (`Navbar.tsx` & `AnnouncementBar.tsx`):** Sticky, background-blurred header with genuine FocusDefend logo, anchor links, and mobile menu.
2. **Cinematic Hero (`Hero.tsx`):** Immersive 3-phase narrative (`The Conflict` → `The Intervention` → `The Breakthrough`) with headline *"YOUR FOCUS. YOUR FUTURE."* and interactive frame toggle.
3. **The Problem (`ProblemSection.tsx`):** 3 restrained cards addressing *Endless Digital Distractions*, *Traditional Restriction Systems*, and *Lack of Digital Self-Discipline*.
4. **Introducing FocusDefend (`SolutionSection.tsx`):** The 6 system pillars and the interactive Android habit loop preview.
5. **How It Works (`HowItWorks.tsx`):** Horizontal connected workflow on desktop and vertical timeline on mobile with stage deep-dive inspection.
6. **Actual App Showcase (`ProductShowcase.tsx`):** 6-screen Android device frame showcase (`Home Dashboard`, `App Restriction Interface`, `Study Sessions`, `Learning & Quiz Interface`, `Focus Credits Ledger`, `Parent Dashboard`).
7. **AI Digital Wellbeing (`AISection.tsx`):** 5 core AI capabilities with local telemetry dashboard and explicit ethical safety disclaimers (zero chat scanning).
8. **Parent Controls (`ParentControls.tsx`):** Interactive 5-step simulation of the *Parent Quick Approval* workflow for emergency access requests.
9. **Why FocusDefend? (`LearningSection.tsx`):** Neutral comparison table contrasting traditional blockers against FocusDefend's habit-building model.
10. **Trust & Privacy (`TrustSection.tsx`):** 5 core trust principles and triggers for draft legal documentation.
11. **Frequently Asked Questions (`FAQ.tsx`):** Functional accordion with the 8 verified system, learning, parent, and technical questions.
12. **Final CTA (`CTASection.tsx`):** High-impact closing call to action featuring the glowing brand logo.
13. **Footer (`Footer.tsx`):** Full footer with verified BIC 2.0 team credentials (Aviral, Ojas, Jisan; Mentor: Naveen Verma), draft modal triggers, and copyright.

---

## 4. Local Development & Build

### Prerequisites
- Node.js 18+ (tested on v26.7.0)
- npm or pnpm

### Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Deployment Guide (Vercel)

This repository is pre-configured for direct deployment to Vercel:
1. Connect this repository to your Vercel account.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy to production domain: `https://focusdefend.vercel.app/`
