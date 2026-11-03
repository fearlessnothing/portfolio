# Changelog

Format based on [Keep a Changelog](https://keepachangelog.com). Versioning: [SemVer](https://semver.org).

## [Unreleased]
### Planned (Sprint 1)
- Soft blue design system, Work / Lab structure, first real case study.
### Changed
- Home hero rebuilt as a two-column layout: headline, focus areas and buttons on the left, SDLC wheel (links to Process) on the right, then five expertise icon cards and a stats row (15+ years in IT, 2 factories). Replaces the separate focus strip and the expertise hexagons; their five photos removed.
- Home page rebuilt in nine sections: hero, expertise hexagons (Infrastructure, Security & Backup, Microsoft 365, Business Systems, Automation), philosophy, case studies, technology ecosystem, how I work, career timeline, certifications, contact. Five new Unsplash photos; the four old tile photos removed.
- About page rebuilt from my CV: experience timeline, systems I've worked on, skills, education and certifications, languages. Data in `src/data/career.ts`.
- Title updated to IT Manager (since January 2026) in the header and home hero.
- Header wordmark shows my name and title; browser tab titles end in my name.
- Home page redesigned: full-width photo hero with navy overlay and a hexagon grid linking to the main pages (replaces the focus-area strip). Image sources in `docs/03-design/image-credits.md`.
- Home hero copy rewritten in a personal voice ("Curious by nature. IT by choice.") and now includes my name.
- Design switched from green to soft blue (light + dark); dark mode uses navy (`#0b1426`).
### Changed (docs)
- Positioning changed to customer-first: freelance clients first, employers second (ADR-005). Charter, sitemap and risk register updated.
### Added
- SDLC wheel on the Process page: seven stages (Planning to Maintenance) as a decorative SVG, with the same stages as an accessible list and an Idea → Business impact path.
- Focus-area strip under the home hero: Infrastructure • Cybersecurity • Microsoft 365 • Business Systems • Automation.
- Two real case study drafts: rebuilding the visitor system on Microsoft 365, and retiring the production tracking system. Unconfirmed facts are marked `[placeholder]`.
- Email address on the Contact page, next to the form.
- `TODO.md` at the root: one-page view of next tasks, inputs I owe, and launch steps.
- Profile photo on the About page (cropped, metadata removed, served as WebP).
- Project pushed to GitHub (`main` branch) for sync between laptops.
### Removed
- Illustrative (fictional) sample case study.
### Fixed
- `TODO.md` no longer lists the GitHub push as pending (nothing was unpushed), and its rule now says a repeated task number must be ticked in every section it appears in.
- `CLAUDE.md` route pattern corrected to `/case-studies/[...slug]/` (rest parameter, not `[slug]`).
- Sample case study no longer claims the "IT Manager" job title; replaced with `[placeholder]` until the real title is confirmed.
- `CLAUDE.md` now lists the routes that actually exist; `/work/` and `/lab/` marked as planned.
- Light-mode `theme-color` meta now matches the soft blue background (`#f3f8ff`) instead of the old green design.

## [0.1.0] — 2026-10-15 — Sprint 0 (prototype)
### Added
- Astro + Tailwind static site: Home, About, Case studies, Projects, Process, Contact.
- Markdown case study collection.
- Light/dark mode, Web3Forms contact form.
- SDLC documentation in `docs/`.
- Recommended VS Code extensions (`.vscode/extensions.json`).
### Fixed
- Dark mode hero text unreadable.
- Hero secondary button showed a filled background.
### Changed
- Project moved from OneDrive to a local folder; GitHub used for sync.
