# Sprint 2 — Post-launch improvements

**Dates:** 2026-11-06 → (open)
**Goal:** Improve the live site after the 2026-11-05 go-live: finish the project-review items and tidy content and docs.

## Backlog
| # | Task | Priority | Status |
|---|---|---|---|
| 1 | Shared components for case cards and the case-study CTA; project data in one file | Should | Done 2026-11-06 |
| 2 | Lighter hero image (crop to 16:9), then new hero illustration | Should | Done 2026-11-06 |
| 3 | Publish the `project-review/` folder and link it from the portfolio case study | Should | Done 2026-11-06 |
| 4 | CHANGELOG: cut release 1.0.0 (go-live), merge duplicate headings, drop the stale planned block | Should | Done 2026-11-06 |
| 5 | Consistent formats: case-study durations, ranges, role labels, heading case | Should | Done 2026-11-06 |
| 6 | Upgrade Astro 5 → 7 (clears the last 5 npm audit advisories) | Could | To do |

## Decisions
- 2026-11-06: The portfolio-site case study stays in Case Studies; it is not moved to Projects (owner decision). A move to `/projects/portfolio-site/` was started and fully reverted before any commit.
- 2026-11-06: Vendor and product names (e.g. Solvei8, Datamation) are allowed on the site; only employer company names stay out (rule in `CLAUDE.md`).
- 2026-11-06: The 2017 – 2018 role is labelled "IT Support" everywhere (CV, About and the factory IT set-up case study), replacing "IT Assistant" (owner decision).
- 2026-11-06: Headings use sentence case, the most common style on the site (89 of 111 headings). The six case-study titles were changed to match. Job titles and system names keep their capitals.
- 2026-11-06: Case-study durations use "Mon – Mon YYYY" within one year, "Mon YYYY – Mon YYYY" across years, "YYYY – YYYY" or "YYYY – present" when only years are known, with " · About N months" only where the length was already stated.

## Notes
- 2026-11-06: Shared components (project-review item) done: `CaseStudyCard`, `CaseStudyCta` and `src/data/projects.ts`. Built HTML identical before and after. CV update confirmed done by the owner.
- 2026-11-06: Hero photo cropped to 16:9 (project-review item). Built images 25–30% lighter; desktop view unchanged, mobile shows a slightly closer crop. Vendor names (Solvei8, Datamation) allowed on the site by owner decision; rule clarified in `CLAUDE.md`.
- 2026-11-06: Home hero replaced with an owner-supplied AI illustration (IT room in front of the factory floor), radial overlay (option B chosen by owner). Built hero images now 33–85 KB (were 80–462 KB). No horizontal scroll at 360, 390, 768, 1024 and 1440 px. Image rules in `CLAUDE.md` updated to allow owner-supplied AI illustrations.
- 2026-11-06: `project-review/` published (commit `bcfe92f`). Scan found no Windows usernames, emails, keys or employee names. Two local paths in the raw tool output were made relative. One quote from the owner's private notes (finding H-01) was made generic by owner choice. The training centre named in it is already listed on the About CV.
- 2026-11-06: CHANGELOG release `[1.0.0] - 2026-11-05` taken from commit `c3ec4a2`, which recorded the site going live. Entries were regrouped, not rewritten (`6753fce`).
- 2026-11-06: Formats unified (`891de03`): 4 durations, 1 range dash, "2019 – today" → "2019 – present", the role label, and 6 case-study titles in sentence case. Date formats were already consistent: "Mon YYYY" in site labels, full month names in prose, ISO dates in docs.

## Review / Retro
_To be filled at the end of the sprint._
