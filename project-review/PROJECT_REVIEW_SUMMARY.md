# Portfolio Review — Summary

_2026-11-04 · `main` @ `2eb5ca4` · read-only review, no source files changed_

## Verdict

Good and close to launch. The build is clean, the content is factual and the security baseline is strong. What remains is launch plumbing and two owner confirmations.

**Production readiness:** about 75 %

## Findings by severity

| Critical | High | Medium | Low | Good (keep) |
|---|---|---|---|---|
| 0 | 2 | 11 | 14 | 10 |

## Top five risks

1. H-01 — Credential "Windows Server 2016 (Exam 70-740) training" listed as completed; exam status unconfirmed.
2. H-02 — "Vendor systems I worked on" includes the group-built VMS and PTS.
3. M-04 / M-05 — No favicon, 404 page, canonical, Open Graph, sitemap or robots.txt.
4. M-02 — Four different process models across Home, About and Process.
5. M-10 — 5 npm advisories in build tools; fix needs Astro 7.

## Top five strengths

1. Clean build: check 0 errors / 0 warnings; build 9 pages in about 4 s.
2. Strong security headers, no inline scripts, no secrets or internal data.
3. VMS story consistent on every page; case studies are evidence-based.
4. About page: personal story, "How I work" bridge, collapsed CV.
5. Very light front end (about 2.3 KB JS) with WebP responsive images.

## Top ten recommended actions

1. Confirm the 70-740 credential (H-01).
2. Rename the systems group (H-02).
3. Change PTS timeline to "Feb 2026 – present" (M-01).
4. Add favicon and 404 page (M-05).
5. Make header toggles 44 × 44 px (M-06).
6. Restore a visible hexagon focus indicator (M-07).
7. Close the mobile menu on Escape and restore focus (M-08).
8. After deploy: `site`, canonical, Open Graph, robots.txt (M-04).
9. Use one process model and link to it (M-02).
10. Extract CaseCard / CaseCta and a single project data source (M-09).

## Implementation order

1. Critical safety and accuracy: H-01, H-02, M-01, M-11, L-13
2. Build and functional: M-05, M-10
3. Accessibility and mobile UX: M-06, M-07, M-08, L-04 to L-07
4. Content and information architecture: M-02, M-03, M-09, L-01, L-02
5. Performance and SEO: M-04, L-03, L-08, L-09, L-14
6. Final polish: L-10, L-11, L-12

## Commands executed

- `git status`, `git branch --show-current`, `git log -10 --oneline`, `git ls-files`, `git grep` (secret and privacy patterns, values not printed)
- `npm run check` (exit 0) → `check-output.txt`
- `npm run build` (exit 0) → `build-output.txt`
- `npm audit` (read-only) → `npm-audit.txt`
- Internal link check over `dist/*.html` → `internal-links.txt`, `broken-links.txt` (0 broken)
- Headless Edge screenshots at 1440 px and 390 px → `screenshots/`

## Commands that failed

- None of the project commands failed. Headless Edge screenshots failed when the output path contained a space; they were taken in a temporary folder and copied here.

## Not measurable

- Lighthouse / axe scores (tools not installed): Performance, Accessibility, Best Practices and SEO scores were **not measured**.
- Live HTTP headers, form delivery and Cloudflare behaviour (site not deployed).
- Real-device testing.

## Fixes applied after the review (2026-11-04)

- H-01: 70-740 moved to a Training list (owner: exam not taken) — a8fbe7d
- H-02: "Group and vendor systems I worked on" — 02f77f3
- M-01: kept as is (owner decision)
- M-05: favicon and 404 page — e50f573
- M-06, M-07, M-08, L-04, L-07: touch targets, hexagon focus, menu Escape, headings, SDLC wheel on mobile — 38c00bc
