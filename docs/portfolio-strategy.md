# Dual-Platform Portfolio Strategy & Implementation Plan

This document outlines the strategic separation of concerns between your Next.js and Astro platforms, and provides the technical steps required to seamlessly integrate them.

## 1. Platform Roles & Content Strategy

### Platform A: The Next.js Portfolio (The "Showroom")
**Primary Role:** A highly polished, interactive digital business card designed for immediate impact.
**Target Audience:** Recruiters, HR professionals, non-technical founders, and casual visitors.
**Content Scope:**
- **Hero Section:** High-impact 3D/framer-motion animations with a strong, concise elevator pitch.
- **Flagship Projects:** Only your top 3-4 projects. High-quality screenshots, demo videos, and links to live deployments.
- **Experience & Resume:** A beautifully styled, scannable timeline of your professional experience and education.
- **Contact:** An interactive, easy-to-use contact form.
**What to avoid here:** Long walls of text, in-depth code snippets, or daily dev logs.

### Platform B: The Astro Terminal Blog (The "Engineering Lab")
**Primary Role:** A technical deep-dive and "living documentation" of your engineering journey.
**Target Audience:** Fellow engineers, technical hiring managers, open-source collaborators, and tech leads.
**Content Scope:**
- **Technical Articles:** Long-form markdown posts (e.g., "Architecting a Real-Time Voice Pipeline", "Edge Intelligence in RAG").
- **Research & Notes:** Math-heavy (LaTeX) notes on reinforcement learning or AI systems.
- **All Projects/Archive:** The complete, exhaustive list of repositories (like the one currently powered by your GitHub API fetch).
- **Daily Dev Logs:** The messy, real-world bug fixes and experiments.
**What to avoid here:** Heavy UI animations, generic resume timelines, or marketing speak.

---

## 2. Cross-Linking Implementation

To connect the two platforms, clear cross-linking navigation is maintained on both sides.

### Astro Configuration (This Repository)
The main navigation (`src/site.config.ts`) includes a prominent link to the Next.js Portfolio, and the homepage (`src/content/home.md`) directs recruiters to the interactive version.

### Next.js Configuration (External Repository)
The Next.js site should have a reverse link titled `Technical Blog` or `Engineering Notes` pointing to `https://anmolsharma152.github.io`. Additionally, project detail pages on the Next.js site can link directly to detailed breakdown articles on this Astro blog.
