# CLAUDE.md — Portfolio project

Personal portfolio for Min Hein Zaw, targeting an IT Manager role in manufacturing.
Static site: Astro 5 (`output: 'static'`) + Tailwind CSS v4. Hosted on Cloudflare Pages. Budget: free only.

## Commands
- `npm run dev` — local dev server (http://localhost:4321)
- `npm run check` — Astro + TypeScript diagnostics (must be 0 errors)
- `npm run build` — production build into `dist/`
- Shell is Windows PowerShell. Do not use bash-only syntax.

## Structure
- `src/pages/` — current routes: `/`, `/case-studies/`, `/case-studies/[slug]/`, `/projects/`, `/about/`, `/process/`, `/contact/`
- Planned (Sprint 1, task #4 — not built yet): rename `/case-studies/` → `/work/` and `/projects/` → `/lab/`
- `src/content/case-studies/*.md` — Work case studies. Frontmatter: title, role, duration, tags, summary, results, order
- `src/layouts/BaseLayout.astro` — header, footer, theme toggle
- `src/styles/global.css` — design tokens (light + dark)
- `docs/` — SDLC documentation (planning → maintenance). `CHANGELOG.md` at root.
- `TODO.md` — one-page "what next" list. Read it at the start of a session.

## Design rules
- Soft blue: background `#f3f8ff`, soft accent `#d8e9ff`, accent `#1e4fd1`, ink `#0f1a33`, lines `#d3e0f0`.
- Home hero and hexagon tiles: photo under a navy overlay (`#0b1426`) with white text, in both themes.
- Stock photos: free Unsplash License only; record each one in `docs/03-design/image-credits.md`.
- Fonts: Manrope (text), DM Mono (small uppercase labels).
- Never place white text on light blue. Text contrast ≥ 4.5:1. Touch targets ≥ 44 px.
- Mobile-first; no horizontal scroll from 360 px to 1440 px.
- Photo placeholders are plain boxes — never label what image should go in them.

## Content rules
- Never invent numbers, results, dates, job titles or company facts. Use `[placeholder]` and ask.
- No confidential employer data: no salaries, employee names, exact financials.
- Work (delivered at job) and Lab (learning builds) stay separate.

## Working rules
1. Make small, focused changes. One feature per change.
2. After every change run `npm run check` and `npm run build`; fix errors before stopping.
3. Never commit `.env` or any key. Web3Forms key is `PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env`.
4. Commit messages: `type: short description` (feat, fix, docs, style, refactor, chore).
5. When a change finishes a backlog item, update `docs/04-development/sprints/sprint-XX.md`, `CHANGELOG.md` and tick it in `TODO.md`.
6. Ask before adding a new dependency.
