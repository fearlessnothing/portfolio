# Portfolio Project Review

_Review date: 2026-11-04 · Branch `main` · Starting commit `2eb5ca4` · Read-only review: no source files were changed._

## 1. Executive Summary

**Overall condition:** Good. The site builds cleanly, ships almost no JavaScript, has a strong security baseline and the content is factual and consistent. The case studies and the About page are the strongest parts.

**Production readiness:** about **75 %**. Nothing blocks a deploy technically. What remains is launch plumbing (favicon, 404 page, `site` URL, canonical and social tags, Web3Forms domain restriction) and two content items the owner must confirm.

**Strongest areas**
- Evidence-based case studies, especially the VMS story, which is told the same way on every page.
- About page: personal story, the "How I work" bridge and a collapsed CV.
- Security headers with a strict script policy, and no secrets or internal data in the repository.
- Clean build (0 errors, 0 warnings) and a very light front end.

**Highest risks**
1. One credential label still needs confirmation (H-01).
2. "Vendor systems" group includes group-built systems (H-02).
3. Missing launch basics: favicon, 404 page, canonical/OG tags, sitemap and robots.txt (M-04, M-05).
4. Four different "process" models across Home, About and Process (M-02).
5. Build-tool advisories that need an Astro 7 upgrade (M-10).

**Recommended next step:** confirm H-01 and M-01, fix H-02, add favicon and 404 page, then deploy to Cloudflare Pages and finish the SEO items once the live URL is known.

## 2. Critical Findings

None found. No exposed credentials, no build failure, no broken navigation, no serious factual misrepresentation.

## 3. High-Priority Findings

### H-01 · Content accuracy
- **Severity:** HIGH
- **Page / file:** About (Full CV), Home · `src/data/career.ts` (certifications.done[0] (line ~146))
- **Finding:** Credential "Windows Server 2016 (Exam 70-740) training" is listed under Completed certifications and on Home. The repo only shows it came from a training centre; whether the Microsoft exam was passed is unconfirmed (source comment and TODO already flag this).
- **Evidence:** career.ts comment "Owner to confirm"; TODO.md item; the owner's private CV notes list "MCSA 70-740 — completed"
- **Impact:** Qualification claims are checked by recruiters. An inaccurate label damages credibility more than a missing one.
- **Recommendation:** Owner confirms: if the exam was passed, use the exact Microsoft title and year; if not, keep it as training or move it to a separate Training list.
- **Effort:** 15 min · **Phase:** Phase 1 · **Status:** Open - needs owner

### H-02 · Content accuracy
- **Severity:** HIGH
- **Page / file:** About (Full CV) · `src/data/career.ts, src/pages/about.astro` (vendorSystems list (career.ts ~94-103); systemGroups title (about.astro line 8))
- **Finding:** Group "Vendor systems I worked on" contains the Visitor Management System and Production Tracking System, which the case studies describe as built by the group development team, not by vendors.
- **Evidence:** VMS case study: "The group IT team developed a VMS"; PTS case study: "a group system"
- **Impact:** Mislabels system ownership and contradicts the case studies.
- **Recommendation:** Rename the group to "Group and vendor systems I worked on", or split into "Group systems" and "Vendor systems".
- **Effort:** 10 min · **Phase:** Phase 1 · **Status:** Open

## 4. Medium and Low-Priority Findings

### M-01 · Content accuracy
- **Severity:** MEDIUM
- **Page / file:** Case studies, Home · `src/content/case-studies/production-tracking-rebuild.md` (frontmatter duration)
- **Finding:** PTS duration is "Implementation / Feb – Oct 2026" but the story says the rebuild is still in progress. Cards render it as "CASE STUDY / IMPLEMENTATION / FEB – OCT 2026", which reads oddly.
- **Evidence:** Rendered card topline on Home and /case-studies/
- **Impact:** Timeline looks finished while the status is ongoing; the "Implementation /" prefix is unclear.
- **Recommendation:** Use "Feb 2026 – present" (or the real end date) and drop the "Implementation /" prefix.
- **Effort:** 5 min · **Phase:** Phase 1 · **Status:** Open - needs owner

### M-02 · Information architecture
- **Severity:** MEDIUM
- **Page / file:** Home, About, Process · `src/pages/index.astro, src/pages/about.astro, src/pages/process.astro` (Home process band; About "How I approach a problem"; Process SDLC + phases)
- **Finding:** Four different process models: Home "Understand, stabilize, deliver, improve" (4 steps), About approach (5 steps), Process SDLC wheel (7 stages) and Process phases (Discover → Operate & improve, 5 steps).
- **Evidence:** Section headings and step lists in each page
- **Impact:** Visitors see several frameworks for the same idea, which weakens the "repeatable approach" message.
- **Recommendation:** Pick one master model for Process; make Home link to it with a short summary; keep the About steps as the personal version and link to Process.
- **Effort:** 1-2 h · **Phase:** Phase 4 · **Status:** Open

### M-03 · Content quality
- **Severity:** MEDIUM
- **Page / file:** Process · `src/pages/process.astro` (phases array and sample-notice)
- **Finding:** The five phases use generic consultancy copy ("factory footprint", "change windows, rollback paths", "Every engagement adapts…") with no link to real work, and a closing note styled as a warning notice.
- **Evidence:** phases[].description text; .sample-notice usage
- **Impact:** Reads like a template, unlike the evidence-based case studies.
- **Recommendation:** Rewrite phases with examples from VMS, PTS and the factory set-up, or link each phase to a case study; use normal text styling for the closing line.
- **Effort:** 1 h · **Phase:** Phase 4 · **Status:** Open

### M-04 · SEO
- **Severity:** MEDIUM
- **Page / file:** All pages · `astro.config.mjs, src/layouts/BaseLayout.astro, public/` (site config; <head>)
- **Finding:** No `site` URL, canonical links, Open Graph/Twitter tags, sitemap or robots.txt.
- **Evidence:** dist/*.html: canon=0 og=0; dist has no robots.txt or sitemap
- **Impact:** Weaker search indexing; shared links on LinkedIn show no title card or image.
- **Recommendation:** After the Cloudflare URL is known: set `site`, add canonical + OG tags in BaseLayout, add robots.txt; sitemap integration needs approval as a new dependency.
- **Effort:** 1 h · **Phase:** Phase 5 · **Status:** Blocked on live URL

### M-05 · Production readiness
- **Severity:** MEDIUM
- **Page / file:** All pages · `public/` (missing files)
- **Finding:** No favicon and no custom 404 page.
- **Evidence:** dist has no favicon* or 404.html; no rel="icon" in <head>
- **Impact:** Browser tab shows a blank icon; missing pages show Cloudflare's default 404.
- **Recommendation:** Add a small SVG favicon and src/pages/404.astro using BaseLayout.
- **Effort:** 30 min · **Phase:** Phase 2 · **Status:** Open

### M-06 · Accessibility
- **Severity:** MEDIUM
- **Page / file:** All pages · `src/styles/global.css` (.theme-toggle, .menu-toggle (line ~55))
- **Finding:** Theme and menu buttons are 38 × 38 px.
- **Evidence:** width: 38px; height: 38px
- **Impact:** Below the project rule "Touch targets ≥ 44 px" (passes the WCAG 2.2 AA 24 px minimum).
- **Recommendation:** Set both to 44 × 44 px.
- **Effort:** 5 min · **Phase:** Phase 3 · **Status:** Open

### M-07 · Accessibility
- **Severity:** MEDIUM
- **Page / file:** Home · `src/styles/global.css` (.hex:focus-visible (line ~106))
- **Finding:** Hexagon links remove the focus outline; focus is shown only by a darker overlay and underlined label.
- **Evidence:** .hex:focus-visible { outline: none; }
- **Impact:** Keyboard users may struggle to see which hexagon is focused (clip-path also hides normal outlines).
- **Recommendation:** Add a clear indicator, e.g. a thick inset ring via box-shadow on the label or a filter outline that follows the clip-path.
- **Effort:** 20 min · **Phase:** Phase 3 · **Status:** Open

### M-08 · Accessibility
- **Severity:** MEDIUM
- **Page / file:** All pages (mobile) · `public/scripts/site.js` (menu toggle handler)
- **Finding:** Mobile menu does not close on Escape and focus is not moved into or back from the menu.
- **Evidence:** No keydown/Escape handling in site.js
- **Impact:** Keyboard and screen-reader users have extra steps; not a blocker.
- **Recommendation:** Close on Escape and return focus to the menu button; optionally close on resize above 760 px.
- **Effort:** 20 min · **Phase:** Phase 3 · **Status:** Open

### M-09 · Maintainability
- **Severity:** MEDIUM
- **Page / file:** Home, Case studies, Projects, About · `src/pages/index.astro, src/pages/case-studies/index.astro, src/content/case-studies/*.md, src/pages/projects.astro, src/data/career.ts` (case-card markup; cs-cta block; project data)
- **Finding:** Duplicated markup and data: case-card markup in two pages; the same CTA HTML pasted in three Markdown files; project facts kept both in projects.astro and in career.ts (builtSystems/learningBuilds).
- **Evidence:** grep: class="case-card" in 2 pages; cs-cta in 3 .md files
- **Impact:** Wording drifts between pages (already happened with Style Control and PTS notes).
- **Recommendation:** Create CaseCard.astro and CaseCta.astro (render CTA from the template); keep project data in one file and derive the About lists from it.
- **Effort:** 1-2 h · **Phase:** Phase 4 · **Status:** Open

### M-10 · Security
- **Severity:** MEDIUM
- **Page / file:** Build tooling · `package.json, package-lock.json` (npm audit)
- **Finding:** 5 advisories remain (1 critical, 3 high, 1 low) in astro, esbuild, sharp and zod; the fix needs Astro 7 (breaking).
- **Evidence:** project-review/npm-audit.txt
- **Impact:** Affects the local dev server and build tools, not the static files served to visitors. Risk grows over time.
- **Recommendation:** Plan a separate Astro 7 upgrade task; until then do not expose the dev server on a network.
- **Effort:** 2-4 h · **Phase:** Phase 2 · **Status:** Open

### M-11 · Security
- **Severity:** MEDIUM
- **Page / file:** Contact · `Web3Forms dashboard (external)` (access key)
- **Finding:** The Web3Forms key is public by design; domain restriction is still an owner TODO.
- **Evidence:** TODO.md "Before first launch"; docs/07-maintenance/security.md
- **Impact:** Without restriction, anyone can reuse the key to send spam to the inbox.
- **Recommendation:** Restrict the key to the live domain right after deploy.
- **Effort:** 10 min · **Phase:** Phase 1 · **Status:** Open - owner action

### L-01 · Content consistency
- **Severity:** LOW
- **Page / file:** Home · `src/pages/index.astro` (focusAreas vs expertise (lines 15-18))
- **Finding:** Focus strip says "Cybersecurity"; hexagon says "Security & Backup".
- **Evidence:** index.astro lines 15 and 18
- **Impact:** Small mixed message; firewalls are run by the overseas team (ADR-005 R10).
- **Recommendation:** Use "Security & Backup" in both, or keep "Cybersecurity" only if backed by evidence.
- **Effort:** 5 min · **Phase:** Phase 4 · **Status:** Open

### L-02 · Content quality
- **Severity:** LOW
- **Page / file:** Home · `src/pages/index.astro` (Philosophy focus-list)
- **Finding:** "Networks, endpoints, identity…", "Practical governance, clear ownership and calm incident response" are generic and not linked to evidence.
- **Evidence:** index.astro lines ~69-71
- **Impact:** Less convincing than the specific About and case-study copy.
- **Recommendation:** Tie each point to a real example (e.g. factory set-up, VMS UAT) or link to a case study.
- **Effort:** 30 min · **Phase:** Phase 4 · **Status:** Open

### L-03 · SEO
- **Severity:** LOW
- **Page / file:** Process · `src/pages/process.astro` (BaseLayout call)
- **Finding:** Process has no own meta description and falls back to the site default.
- **Evidence:** dist/process/index.html description = "IT leadership for resilient garment manufacturing in Myanmar."
- **Impact:** Duplicate description across pages.
- **Recommendation:** Add a Process-specific description.
- **Effort:** 5 min · **Phase:** Phase 5 · **Status:** Open

### L-04 · Accessibility
- **Severity:** LOW
- **Page / file:** Case studies index · `src/pages/case-studies/index.astro` (card titles)
- **Finding:** Heading jumps from h1 to h3 (no h2).
- **Evidence:** dist/case-studies/index.html: h1, h3, h3, h3
- **Impact:** Minor heading-order issue for screen-reader navigation.
- **Recommendation:** Use h2 for card titles or add a visually hidden h2.
- **Effort:** 5 min · **Phase:** Phase 3 · **Status:** Open

### L-05 · Accessibility
- **Severity:** LOW
- **Page / file:** Home, Case studies · `src/pages/index.astro, src/pages/case-studies/index.astro` (.case-card)
- **Finding:** Whole card is one link, so its accessible name is the full card text (title, summary, tags).
- **Evidence:** <a class="case-card"> wraps all content
- **Impact:** Long link announcements for screen-reader users.
- **Recommendation:** Keep the visual card, but make the title the link and stretch it with a pseudo-element.
- **Effort:** 30 min · **Phase:** Phase 3 · **Status:** Open

### L-06 · Accessibility
- **Severity:** LOW
- **Page / file:** About · `src/pages/about.astro` (.about-bridge list)
- **Finding:** Connector items are aria-hidden <li> elements inside an <ol>, so the list count read aloud differs from what is seen.
- **Evidence:** <li class="about-bridge-link" aria-hidden="true">
- **Impact:** Minor; the lead paragraph already explains the bridge.
- **Recommendation:** Render connectors as non-list elements (CSS pseudo-elements) or use a <div> structure with role="list" for nodes only.
- **Effort:** 20 min · **Phase:** Phase 3 · **Status:** Open

### L-07 · Responsive
- **Severity:** LOW
- **Page / file:** Process · `src/pages/process.astro, src/styles/global.css` (.sdlc-wheel at 390 px)
- **Finding:** SDLC wheel scales down on mobile; labels become very small. The same stages are shown as an accessible list next to it.
- **Evidence:** project-review/screenshots/process-390.png
- **Impact:** Decorative only, but looks cramped.
- **Recommendation:** Hide the wheel below 480 px or limit it to numbers only.
- **Effort:** 15 min · **Phase:** Phase 3 · **Status:** Open

### L-08 · Performance
- **Severity:** LOW
- **Page / file:** Home · `src/pages/index.astro` (hero <Image>)
- **Finding:** Hero source is a 2400 × 2400 photo; desktop loads the 2000w WebP (557 KB).
- **Evidence:** dist/_astro/hero-denim.* sizes: 110 KB / 331 KB / 557 KB / 715 KB
- **Impact:** Largest asset on the site; slower first paint on mobile data.
- **Recommendation:** Crop the source to a wide ratio (e.g. 2400 × 1350) and add a 1200w step.
- **Effort:** 15 min · **Phase:** Phase 5 · **Status:** Open

### L-09 · Performance / Privacy
- **Severity:** LOW
- **Page / file:** All pages · `src/layouts/BaseLayout.astro` (Google Fonts link)
- **Finding:** Fonts load from fonts.googleapis.com (render-blocking, third-party request).
- **Evidence:** <link href="https://fonts.googleapis.com/css2?...">
- **Impact:** Small delay and a third-party request on every page.
- **Recommendation:** Self-host the two font families later (already listed in security.md follow-ups).
- **Effort:** 1 h · **Phase:** Phase 5 · **Status:** Open

### L-10 · Code quality
- **Severity:** LOW
- **Page / file:** Home, Case study template · `src/pages/index.astro, src/pages/case-studies/[...slug].astro` (style="" attributes)
- **Finding:** Three inline style attributes; they are why CSP still needs style-src 'unsafe-inline'.
- **Evidence:** grep style=" in src
- **Impact:** Minor maintainability and CSP hardening blocker.
- **Recommendation:** Move to utility classes in global.css.
- **Effort:** 15 min · **Phase:** Phase 6 · **Status:** Open

### L-11 · Dependencies
- **Severity:** LOW
- **Page / file:** - · `package.json` (tailwindcss, @tailwindcss/vite)
- **Finding:** Tailwind is installed but markup uses only one utility class ("hidden"); styling is hand-written CSS. Tailwind preflight also resets list markers (fixed earlier with extra rules).
- **Evidence:** grep of class names: only "hidden"
- **Impact:** Extra build dependency with little benefit.
- **Recommendation:** Decide to either use Tailwind utilities deliberately or remove it (needs owner approval, as it changes dependencies).
- **Effort:** 30 min · **Phase:** Phase 6 · **Status:** Open - needs owner

### L-12 · Development hygiene
- **Severity:** LOW
- **Page / file:** - · `package.json` (scripts)
- **Finding:** No lint, format or automated tests; only check and build.
- **Evidence:** package.json scripts: dev, build, preview, check
- **Impact:** Regressions are caught only by manual review.
- **Recommendation:** Optional: add a link checker or Playwright smoke test later (new dependency, needs approval).
- **Effort:** 1-2 h · **Phase:** Phase 6 · **Status:** Open

### L-13 · Privacy
- **Severity:** LOW
- **Page / file:** Contact, PTS case study · `src/pages/contact.astro, src/content/case-studies/production-tracking-rebuild.md` (email link; "eight factories, six in other countries")
- **Finding:** Personal email is shown publicly (owner decision). The PTS case study detail about the group size could help identify the employer, despite the no-company-names rule.
- **Evidence:** mailto link; PTS Context section
- **Impact:** Spam risk for the email; mild re-identification risk.
- **Recommendation:** Keep the email if wanted (the form is the primary path); consider "a group with factories in several countries" instead of exact numbers.
- **Effort:** 10 min · **Phase:** Phase 1 · **Status:** Open - owner choice

### L-14 · UX
- **Severity:** LOW
- **Page / file:** Contact · `src/pages/contact.astro` (form footer)
- **Finding:** After submit, visitors land on the Web3Forms success page, outside the site.
- **Evidence:** No redirect field in the form
- **Impact:** Breaks the site experience; not a defect.
- **Recommendation:** Add a /contact/thanks/ page and the Web3Forms redirect field once the live URL is known.
- **Effort:** 30 min · **Phase:** Phase 5 · **Status:** Open

## 5. Strong Areas to Preserve

- **G-01 Build health:** npm run check: 0 errors, 0 warnings, 0 hints. npm run build: 9 pages in about 4 s, 2.2 MB output.
- **G-02 Security baseline:** public/_headers sets CSP (script-src self, no inline scripts), HSTS, nosniff, frame, referrer and permissions policies. No secrets, IPs, internal hostnames or local paths in tracked files or dist. .env and _private/ are ignored.
- **G-03 Lightweight front end:** Total JavaScript about 2.3 KB (theme + menu), no client framework, one 39 KB stylesheet.
- **G-04 Image pipeline:** astro:assets WebP with srcset, explicit width/height, alt text on the portrait, empty alt on decorative images.
- **G-05 VMS story is consistent:** Case study, Projects card (Retired), About beliefs and Full CV all tell the same story: UAT → requirements → interim Microsoft 365 register → improved main VMS at both factories → interim retired. No claim of developing the main VMS.
- **G-06 About page:** Personal story plus the full-width "How I work" band; CV is secondary and collapsed; links into the CV open it automatically.
- **G-07 Work vs Lab separation:** Projects page clearly separates "Built at work" from "Lab", with Retired / In progress labels.
- **G-08 Design system:** Denim tokens for light and dark, documented contrast (lowest 5.15:1), consistent typography (Manrope + DM Mono).
- **G-09 Responsive diagrams:** Case-study journeys, architecture flow and the About bridge restack vertically on mobile instead of shrinking.
- **G-10 Documentation:** SDLC docs, ADRs, CHANGELOG, TODO and a security note make the project easy to continue.

## 6. Page-by-Page Review

| Page | Role it plays | What works | What to improve |
|---|---|---|---|
| Home `/` | Who I am, why continue | Clear name and title in the eyebrow; denim hero links the site to garment manufacturing; three real case studies; career timeline and certifications are short and link onward | Four-step process band duplicates other process models (M-02); philosophy points are generic (L-02); "Cybersecurity" vs "Security & Backup" (L-01); long scroll on mobile |
| About `/about/` | How I think and work | Story-led, "What shaped the way I work", full-width bridge band, beliefs linked to evidence, CV collapsed (G-06) | Systems group label (H-02); credential label (H-01); bridge connector semantics (L-06) |
| Projects `/projects/` | What I built | Work and Lab separated, Retired / In progress labels, problem + what it does + tools (G-07) | Project data duplicated with career.ts (M-09); cards show no outcome line yet because outcomes were not provided |
| Case studies `/case-studies/` and three studies | How I solved real problems | Context → role → journey → options → challenges → results → lessons; overview cards; diagrams restack on mobile | PTS timeline label (M-01); index heading order (L-04); CTA duplicated in Markdown (M-09) |
| Process `/process/` | Repeatable approach | SDLC wheel with accessible list; "Build & configure" avoids a developer image | Generic consultancy phases (M-03); default meta description (L-03); wheel too small on mobile (L-07) |
| Contact `/contact/` | How to connect | Plain HTML form works without JavaScript; honeypot; privacy note; labelled fields | Redirects to Web3Forms success page (L-14); key domain restriction pending (M-11); public email is an owner choice (L-13) |
| 404 | - | - | Missing (M-05) |

**Duplicated content between pages**
- Home process band, About approach and Process phases describe the same idea three ways (M-02). Keep the About steps (personal), make Process the single detailed model, and let Home link to it.
- About "Full CV → Systems" and Projects describe the same tools (M-09). Keep the detail on Projects, keep one-line notes in the CV, and generate both from one data source.

## 7. Technical Review

- **Architecture:** Astro 5 static output, content collection for case studies with a zod schema, shared `BaseLayout`, data in `src/data/career.ts`. No `src/components/` folder: repeated markup lives in pages (M-09).
- **Styling:** one 464-line `global.css` with tokens for light and dark, one `!important` (reduced-motion), a few hard-coded overlay colours by design, three inline `style` attributes (L-10). No unused selectors were detected by a name scan.
- **Dependencies:** astro, @tailwindcss/vite, tailwindcss, @astrojs/check, typescript. Tailwind is barely used (L-11). `npm audit`: 5 advisories, fix needs Astro 7 (M-10).
- **JavaScript:** `public/scripts/theme-init.js` (418 B) and `site.js` (1.9 KB). No hydration, no third-party scripts.
- **Git:** clean tree, all commits pushed, conventional commit messages, `.env`, `dist/`, `.astro/`, `node_modules/`, `_private/` ignored; only `.env.example` tracked. No browser-saved HTML files tracked.
- **Build:** `npm run check` 0/0/0; `npm run build` exit 0, 9 pages, 2.2 MB. No localhost URLs, dev-toolbar markup, `data-astro-source-file` attributes or Windows paths in `dist/`.
- **Tests:** none automated (L-12); a manual test plan exists in `docs/05-testing/`.

## 8. Content and Professional Brand Review

- **Positioning:** a visitor can answer who Min Hein Zaw is (IT Manager, two garment factories, Myanmar, 15+ years) within seconds, and how he works within two minutes (About bridge, case studies). The site supports IT Manager, IT Operations, Infrastructure and Business Systems roles. The message "I understand technology, operations, people and business impact" comes through most clearly on About and in the case studies.
- **Accuracy:** no placeholder text, lorem ipsum, invented percentages or savings found in published pages. Counts used (around 20 users, 2 servers, around 70 cameras, 15+ years) all come from the owner. Job titles are consistent across About, CV, case studies and header.
- **VMS:** consistent everywhere (G-05). No page implies Microsoft 365 replaced the VMS or that the owner developed the main VMS.
- **PTS:** neutral and factual; the only issue is the timeline label (M-01). No claim of developing PTS.
- **Certifications:** H-01. Other certificates are listed by name and issuer only, with no unsupported status.
- **Writing:**

| Current | Recommended | Reason |
|---|---|---|
| "Networks, endpoints, identity and infrastructure engineered for the factory floor." (Home) | "Networks, servers, CCTV and PCs set up for real factory work, from cabling to the user's desk." | Specific and backed by the factory set-up case study |
| "Practical governance, clear ownership and calm incident response." (Home) | "Clear ownership, documented procedures and support that users can rely on." | Matches documented CV duties |
| "Every engagement adapts to the factory's operating calendar, risk profile and available capacity." (Process) | "I plan changes around production, so the line keeps running." | Plainer, matches the "keep the business running" belief |
| "Implementation / Feb – Oct 2026" (PTS) | "Feb 2026 – present" | Matches the ongoing rebuild |

## 9. Accessibility Review

_Automated tools (Lighthouse, axe) are not installed: scores **not measured**._

- **Good:** `lang="en"`, skip link, one h1 per page, labelled landmarks, `aria-current` on nav, `aria-expanded` on the menu button, visible `summary` focus ring, labelled form fields, alt text, `prefers-reduced-motion`, text equivalents for diagrams (SDLC list, bridge lead text), no hover-only content.
- **Issues:** touch target 38 px (M-06), hexagon focus outline removed (M-07), menu Escape/focus (M-08), heading jump on case-studies index (L-04), long card link names (L-05), bridge list semantics (L-06).
- **Contrast:** token pairs documented at 5.15:1 or higher; not re-measured with a tool in this review.

## 10. Performance Review

_Lighthouse not available: scores **not measured**. Source and build-output review only._

- Very small JS (about 2.3 KB) and one CSS file (39 KB).
- Images are WebP with srcset and explicit dimensions; below-the-fold images lazy-load; the hero is eager with `fetchpriority="high"`.
- Largest asset: hero 2000w WebP at 557 KB (L-08).
- Google Fonts are render-blocking and third-party (L-09).
- No layout-shift risks seen in markup (images have width/height).

## 11. SEO Review

- Unique `<title>` on every page (`Page | Min Hein Zaw`); unique descriptions except Process (L-03).
- About description already follows the recommended direction.
- Missing: `site`, canonical, Open Graph, Twitter, favicon, sitemap, robots.txt (M-04, M-05).
- Heading structure is mostly sound; see L-04.

## 12. Security and Privacy Review

- No API keys, passwords, tokens, private keys, connection strings, IP addresses, internal hostnames, SharePoint tenant names or employee data found in tracked files or the build.
- `.env` exists locally and is ignored; it was not opened.
- Headers: strong CSP (`script-src 'self'`), `form-action` limited to Web3Forms, HSTS, `frame-ancestors 'none'`. `style-src` still needs `'unsafe-inline'` (L-10).
- Infrastructure detail is high level (counts only, no addresses or device models): technically credible but security-safe.
- Owner actions: Web3Forms domain restriction (M-11); optional softening of group-size detail (L-13).

## 13. Responsive Review

Screenshots: `project-review/screenshots/` (six pages at 1440 px and 390 px). About, the three case studies and Projects were also checked at 1024 px and 768 px earlier the same day.

- No horizontal scroll seen at 390 px on any page.
- Bridge, journeys and architecture flows restack vertically on mobile (G-09).
- Process SDLC wheel shrinks rather than restacks (L-07).
- Header buttons below the 44 px project rule (M-06).

## 14. Recommended Implementation Order

- **Phase 1: Critical safety and accuracy** — H-01 (confirm credential), H-02 (systems group label), M-01 (PTS timeline), M-11 (Web3Forms restriction after deploy), L-13 (optional privacy wording).
- **Phase 2: Build and functional issues** — M-05 (favicon, 404), M-10 (plan Astro 7 upgrade as its own task).
- **Phase 3: Accessibility and mobile UX** — M-06, M-07, M-08, L-04, L-05, L-06, L-07.
- **Phase 4: Content and information architecture** — M-02, M-03, M-09, L-01, L-02.
- **Phase 5: Performance and SEO** — M-04 (after the live URL), L-03, L-08, L-09, L-14.
- **Phase 6: Final design polish** — L-10, L-11, L-12.

## 15. Top 10 Recommended Fixes

| # | Issue | File | Change | Reason | Effort |
|---|---|---|---|---|---|
| 1 | H-01 credential label | src/data/career.ts | Confirm, then use exact title or a Training list | Qualification accuracy | 15 min |
| 2 | H-02 "Vendor systems" label | src/pages/about.astro, src/data/career.ts | "Group and vendor systems I worked on" | Ownership accuracy | 10 min |
| 3 | M-01 PTS timeline | production-tracking-rebuild.md | "Feb 2026 – present" | Matches ongoing status | 5 min |
| 4 | M-05 favicon + 404 | public/, src/pages/404.astro | Add both | Launch basics | 30 min |
| 5 | M-06 touch targets | global.css | 44 × 44 px toggles | Project rule | 5 min |
| 6 | M-07 hexagon focus | global.css | Visible focus indicator | Keyboard users | 20 min |
| 7 | M-08 menu Escape | public/scripts/site.js | Close on Escape, restore focus | Keyboard users | 20 min |
| 8 | M-04 SEO tags | astro.config.mjs, BaseLayout.astro | `site`, canonical, OG, robots.txt | Sharing and indexing | 1 h |
| 9 | M-02 one process model | index.astro, process.astro | Single model, others link to it | Clear message | 1-2 h |
| 10 | M-09 shared components | new CaseCard / CaseCta, one data file | Remove duplication | Stops wording drift | 1-2 h |

## 16. Final Scorecard

| Category | Score | Why |
|---|---|---|
| Architecture | 7/10 | Clean static Astro setup with content collections and a data file; no component layer yet |
| Code Quality | 7/10 | Check and build clean, small JS; some duplication and inline styles |
| Design | 8/10 | Distinct denim identity, consistent tokens and typography, calm and professional |
| Content | 8/10 | Factual, specific case studies; a few generic passages on Home and Process |
| Personal Brand | 8/10 | Clear role and story; process message split across pages |
| Mobile UX | 7/10 | No overflow, diagrams restack; small toggles, cramped SDLC wheel |
| Accessibility | 7/10 | Good semantics and alternatives; focus and target-size gaps; no tool score measured |
| Performance | 8/10 | Very light JS and WebP images; hero size and Google Fonts; no tool score measured |
| Security and Privacy | 8/10 | Strong headers, no secrets; build-tool advisories and pending key restriction |
| SEO | 4/10 | Titles and descriptions good; no canonical, OG, sitemap, robots.txt or favicon |
| Production Readiness | 7/10 | Deployable now; launch basics and owner confirmations outstanding |

## 17. Production Readiness

**About 75 %.** The build is clean and the content is accurate. Higher readiness needs: owner confirmation of H-01 and M-01, the H-02 label fix, favicon and 404 page, Web3Forms domain restriction and the SEO tags that depend on the live URL.

## 18. Rollback and Git Status

- **Starting commit:** `2eb5ca4` (clean tree, all commits pushed; no backup commit needed).
- **Current branch:** `main`.
- **Source files modified:** none. Only `project-review/` was created (untracked, not committed).
- **Rollback:** nothing to roll back in source. To remove the audit output, delete the `project-review/` folder.
