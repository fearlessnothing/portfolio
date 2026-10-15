# Sprint 0 — Prototype & setup

**Dates:** 2026-10-14 → 2026-10-15
**Goal:** Prove the technical approach, choose a design direction and set up tooling.

## What was done
- Brainstormed portfolio direction; chose an **IT Manager** focus with real (anonymised) work.
- Scaffolded an Astro + Tailwind site with AI: 7 pages, Markdown case study collection, light/dark mode, Web3Forms contact form.
- Verified the build: `astro check` → 0 errors; `npm run build` → 7 pages built.
- Reviewed the prototype on desktop and mobile; fixed 2 bugs:
  1. Dark mode hero was unreadable (light text on light background).
  2. "Let's talk" secondary button showed a filled background instead of an outline.
- Created wireframes v1 (7 artboards) and iterated colour: green → blue → **soft blue**.
- Researched reference designs; chose a result-first case study layout.
- Decided the **Work / Lab** structure.
- Set up VS Code + Claude Code; chose extensions.
- Moved the project out of OneDrive to `D:\Portfolio Project` (ADR-004).

## Known issues carried to Sprint 1
- Case studies have no `order` field (display order not controlled).
- `theme-color` meta does not follow dark mode.
- Mobile menu does not mark the current page (`aria-current`).
- All content is still placeholder / illustrative.

## Review
The prototype proved the stack works and is fast to change. The main gap is content, not code.

## Retrospective
- **Went well:** building first made the design discussion concrete.
- **To improve:** planning docs should come before code next time — this sprint is recorded honestly as a spike.
- **Learned:** tooling setup (Node, Git, PATH, OneDrive) took longer than coding; documented in `dev-environment.md`.
