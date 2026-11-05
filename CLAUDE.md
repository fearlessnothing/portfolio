# CLAUDE.md — Portfolio project

Personal portfolio for Min Hein Zaw, targeting an IT Manager role in manufacturing.
Static site: Astro 5 (`output: 'static'`) + Tailwind CSS v4. Hosted on Cloudflare Pages. Budget: free only.

## Commands
- `npm run dev` — local dev server (http://localhost:4321)
- `npm run check` — Astro + TypeScript diagnostics (must be 0 errors)
- `npm run build` — production build into `dist/`
- Shell is Windows PowerShell. Do not use bash-only syntax.

## Structure
- `src/pages/` — current routes: `/`, `/case-studies/`, `/case-studies/[...slug]/`, `/projects/`, `/about/`, `/process/`, `/contact/`
- No `/work/` or `/lab/` rename (task #4 dropped). Lab is a section of `/projects/`.
- `src/content/case-studies/*.md` — Work case studies. Frontmatter: title, role, duration, tags, summary, results, order
- `src/layouts/BaseLayout.astro` — header, footer, theme toggle
- `src/styles/global.css` — design tokens (light + dark)
- `docs/` — SDLC documentation (planning → maintenance). `CHANGELOG.md` at root.
- `TODO.md` — one-page "what next" list. Read it at the start of a session.

## Design rules
- Denim palette (see `docs/03-design/design-system.md`): background `#f4f2ed`, accent indigo `#2b4a7a`, soft accent `#dce5f0`, copper marker `#a14f12`, ink `#17233a`, lines `#dad5ca`. Dark: background `#111b2c`.
- Home hero and expertise photo cards: photo under an indigo overlay (`#13203a`) with white text, in both themes.
- Title glow: none in light mode; a faint glow in dark mode and on the hero only.
- Stock photos: free Unsplash License only; record each one in `docs/03-design/image-credits.md`.
- Fonts: Manrope (text), DM Mono (small uppercase labels).
- Never place white text on light backgrounds. Small labels ≥ 12 px (tags ≥ 11 px). Text contrast ≥ 4.5:1. Touch targets ≥ 44 px.
- Mobile-first; no horizontal scroll from 360 px to 1440 px.
- Photo placeholders are plain boxes — never label what image should go in them.

## Content rules
- Never invent numbers, results, dates, job titles or company facts. Use `[placeholder]` and ask.
- No confidential employer data: no salaries, employee names, exact financials.
- No company names anywhere on the site (employers described generically; say "the group’s overseas IT team", not the country).
- Work (delivered at job) and Lab (learning builds) stay separate.

## Working rules
1. Make small, focused changes. One feature per change.
2. After every change run `npm run check` and `npm run build`; fix errors before stopping.
3. Never commit `.env` or any key. Web3Forms key is `PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env`.
4. Commit messages: `type: short description` (feat, fix, docs, style, refactor, chore).
5. When a change finishes a backlog item, update `docs/04-development/sprints/sprint-XX.md`, `CHANGELOG.md`, and remove it from `TODO.md` (TODO keeps only open tasks).
6. Ask before adding a new dependency.
