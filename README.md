# Anmol Sharma — AI Systems Engineering

Blog-portfolio built with [Astro](https://astro.build) + [MultiTerm](https://github.com/stelcodes/multiterm-astro).

**Live:** [anmolsharma152.github.io](https://anmolsharma152.github.io)

---

## Stack

- **Astro 5+** — static-first, zero JS by default
- **MultiTerm** — 59 Shiki color schemes, Tailwind v4, GitHub activity widget
- **GitHub Actions** — auto-build and deploy to GitHub Pages

## Local Development

```bash
npm install
npm run dev       # local dev server at localhost:4321
npm run build     # static output → dist/
npm run preview   # preview the built site
```

## Content Map

| What | Where |
|---|---|
| Blog posts | `src/content/posts/*.md` |
| Homepage banner + GitHub calendar | `src/content/home.md` |
| Bio, experience, education | `src/pages/about.md` |
| Projects (fetched from GitHub API) | `src/pages/projects.astro` |
| Theme, nav, social links | `src/site.config.ts` |
| Project curated descriptions | `src/data/projectRegistry.ts` |

## Deploy

Push to `main` → GitHub Action (`deploy.yml`) runs `npm run build` → uploads `dist/` as Pages artifact → deploys via `actions/deploy-pages`.
