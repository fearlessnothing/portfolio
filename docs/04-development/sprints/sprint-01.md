# Sprint 1 — Real content & new design (planned)

**Goal:** The site shows who I am, with one real case study, in the soft blue design.

## Backlog
| # | Task | Priority | Status |
|---|---|---|---|
| 1 | Fix Sprint 0 known issues (order field, theme-color, mobile aria-current) | Must | Done 2026-10-15 |
| 2 | Apply soft blue design system to `global.css` (light + dark) | Must | Done 2026-10-15 |
| 3 | Add name and title to header and hero | Must | Done 2026-10-19 |
| 4 | Rename Case studies → Work; create Lab page | Must | To do |
| 5 | Write first real case study (anonymised) | Must | To do |
| 6 | About page: experience timeline, capabilities | Must | To do |
| 7 | First git commit and push to GitHub | Must | Done 2026-10-15 |
| 8 | Export wireframes PDF into `03-design/` | Should | To do |
| 9 | Restructure Home for customer-first positioning (ADR-005) | Should | To do |
| 10 | Create Services page (after service list is confirmed) | Should | To do |

## Notes
- 2026-10-15: Pre-sprint fixes done — sample case study job title set to `[placeholder]`; `CLAUDE.md` routes corrected (Work/Lab marked planned until task #4).
- 2026-10-15: Task #7 done — first commit pushed to GitHub (`fearlessnothing/portfolio`, branch `main`). GitHub's auto-created README was merged; the local README was kept.
- 2026-10-15: Task #1 done — `order` sorting and mobile `aria-current` were already correct; light `theme-color` set to `#f3f8ff` (dark value left until task #2).
- 2026-10-15: Task #2 done — `global.css` tokens switched to soft blue (`--bg`, `--accent`, `--accent-soft`, `--marker`); hero now uses dark text on light blue; dark mode uses navy (`#0b1426`). All text pairs ≥ 4.5:1.
- 2026-10-16: Home page redesign (unplanned, user request) — photo hero with navy overlay and hexagon tiles to Case studies / Projects / About / Process / Contact. Stock photos from Unsplash.
- 2026-10-16: Decision — customer-first positioning (ADR-005). Freelance is allowed; any industry and location; message leads with factories. Tasks #9–#10 added.
- 2026-10-16: Wireframes v2 (as-built) drawn in Figma: https://www.figma.com/design/Kd9ruAifTtahQ1F1ij50cG
- 2026-10-19: Task #3 done — header wordmark now "MHZ. / Min Hein Zaw / IT Executive"; hero eyebrow and page titles use the name. Title chosen by owner: IT Executive.
- Before the first deploy: add the live URL as `site:` in `astro.config.mjs` once the Cloudflare Pages address is known.

## Review / Retro
_To be filled at the end of the sprint._
