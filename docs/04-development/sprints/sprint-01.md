# Sprint 1 — Real content & new design (planned)

**Goal:** The site shows who I am, with one real case study, in the soft blue design.

## Backlog
| # | Task | Priority | Status |
|---|---|---|---|
| 1 | Fix Sprint 0 known issues (order field, theme-color, mobile aria-current) | Must | Done 2026-10-15 |
| 2 | Apply soft blue design system to `global.css` (light + dark) | Must | Done 2026-10-15 |
| 3 | Add name and title to header and hero | Must | Done 2026-10-19 |
| 4 | Rename Case studies → Work; create Lab page | Must | Dropped (2026-11-05) |
| 5 | Write first real case study (anonymised) | Must | Done 2026-11-04 (VMS and PTS) |
| 6 | About page: experience timeline, capabilities | Must | Done 2026-11-03 |
| 7 | First git commit and push to GitHub | Must | Done 2026-10-15 |
| 8 | Export wireframes PDF into `03-design/` | Should | To do |
| 9 | Restructure Home for customer-first positioning (ADR-005) | Should | Done 2026-11-03 |
| 10 | Create Services page (after service list is confirmed) | Should | Dropped (2026-11-05: one freelance line on Contact instead) |

## Notes
- 2026-10-15: Pre-sprint fixes done — sample case study job title set to `[placeholder]`; `CLAUDE.md` routes corrected (Work/Lab marked planned until task #4).
- 2026-10-15: Task #7 done — first commit pushed to GitHub (`fearlessnothing/portfolio`, branch `main`). GitHub's auto-created README was merged; the local README was kept.
- 2026-10-15: Task #1 done — `order` sorting and mobile `aria-current` were already correct; light `theme-color` set to `#f3f8ff` (dark value left until task #2).
- 2026-10-15: Task #2 done — `global.css` tokens switched to soft blue (`--bg`, `--accent`, `--accent-soft`, `--marker`); hero now uses dark text on light blue; dark mode uses navy (`#0b1426`). All text pairs ≥ 4.5:1.
- 2026-10-16: Home page redesign (unplanned, user request) — photo hero with navy overlay and hexagon tiles to Case studies / Projects / About / Process / Contact. Stock photos from Unsplash.
- 2026-10-16: Decision — customer-first positioning (ADR-005). Freelance is allowed; any industry and location; message leads with factories. Tasks #9–#10 added.
- 2026-10-16: Wireframes v2 (as-built) drawn in Figma: https://www.figma.com/design/Kd9ruAifTtahQ1F1ij50cG
- 2026-10-19: Task #3 done — header wordmark now "MHZ. / Min Hein Zaw / IT Executive"; hero eyebrow and page titles use the name. Title chosen by owner: IT Executive.
- 2026-11-03: Task #6 done — About page rebuilt from the CV: intro, experience timeline (newest first), systems (vendor / built at work / learning builds), skills, education & certifications, languages. Data lives in `src/data/career.ts`. Owner confirmed: IT Manager since Jan 2026 (header and hero updated from IT Executive); "15+ years in IT"; firewalls are handled by the Sri Lanka team, so they are not listed; IE hourly automation and Marker agent shown as learning builds, in progress. Email added to the Contact page.
- 2026-11-03: Task #5 started — owner chose the Visitor Management System and the Production Tracking System. Both drafted from confirmed inventory facts only; unknowns (dates, role at the time, measured results, lessons) are `[placeholder]`. Company names left out until the owner decides. Illustrative sample case study removed.
- 2026-11-03: Task #9 done — Home rebuilt to the owner's nine-section flow (see ADR-005 amendment). Expertise hexagons: Infrastructure, Security & Backup, Microsoft 365, Business Systems, Automation, with five new Unsplash photos; the four old navigation photos were removed. Experience and certifications on Home are short versions read from `src/data/career.ts`, linking to About. Checked at 1280 px and 360 px with headless Edge: no horizontal scroll.
- 2026-11-04: Security hardening (unplanned, owner request) — added `public/_headers` (CSP, HSTS, nosniff, frame/referrer/permissions policies), moved theme and menu scripts to `public/scripts/` so CSP can use `script-src 'self'`, added a privacy note to the Contact page, and wrote `docs/07-maintenance/security.md`. Dependency upgrades are still open.
- 2026-11-04: PTS case study rewritten from the owner's answers: not retired but being rebuilt. Feedback gathered in meetings with production teams; gaps explained to the developers with users; stop-or-rebuild discussed with the group IT team and production teams; root cause: a system for eight group factories (six abroad) did not fit the two Myanmar factories; summary still manual for now. Role IT Manager. File renamed to `production-tracking-rebuild.md` (URL `/case-studies/production-tracking-rebuild/`). No placeholders left on the site.
- 2026-11-04: Task #5 done — VMS role confirmed as IT Manager; company names stay out of case studies; "Sri Lanka" replaced by "the group’s overseas IT team" (About and case studies).
- 2026-11-04: About page reworked (owner felt it read like a CV): story sections from the owner's own answers, full CV moved into a `<details>` block; `site.js` opens a closed `<details>` when the URL hash points inside it.
- 2026-11-04: Infrastructure case study added from the owner's facts: new factory IT set-up during construction as IT support (around 20 users, 2 servers, around 70 CCTV cameras; vendor helped with CCTV cabling; maintenance team helped at times; about six months). Period 2017 – 2018 (IT Assistant), confirmed by the owner. Home now features all three case studies.
- 2026-11-05: Task #10 dropped by owner decision — no Services page for now. The Contact page gets one line instead: "Open to freelance projects: Microsoft 365 set-up, network set-up and server backup." A Services page can be added later if freelance work picks up (see ADR-005 amendment 2026-11-05).
- 2026-11-05: Task #4 dropped by owner decision — keep "Case studies" and "Projects". Projects already separates "Built at work" from "Lab", and the portfolio case study (personal project) would not fit a page named "Work". Sitemap updated to match the built site.
- Before the first deploy: add the live URL as `site:` in `astro.config.mjs` once the Cloudflare Pages address is known.

## Review / Retro
_To be filled at the end of the sprint._
- 2026-11-03: VMS case study rewritten from the owner's corrected story: UAT findings → requirements → interim Microsoft 365 register for continuity → main VMS improved and validated → in use at both Myanmar factories → interim solution retired. All placeholders removed; overview cards and diagrams added (optional schema fields, `cs-` CSS). PTS still has placeholders.
