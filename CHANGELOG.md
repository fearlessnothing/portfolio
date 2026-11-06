# Changelog

Format based on [Keep a Changelog](https://keepachangelog.com). Versioning: [SemVer](https://semver.org).

## [Unreleased]
### Added
- `project-review/` published: the 2026-11-04 read-only review (report, findings CSV, raw tool output, screenshots) with a short README. Local paths were made relative and one private-notes quote was made generic. The portfolio case study links to it on GitHub.
- Thank-you page `/thanks/` (not indexed). After a successful send, the contact form now returns visitors here instead of the Web3Forms confirmation page, using Web3Forms' hidden `redirect` field (same domain, free plan). The page has a "Read case studies" button and a "Back to home" button. `BaseLayout` gained an optional `noindex` prop. The contact privacy note was updated to match. CSP `form-action` now also allows `'self'`. Without it, browsers blocked the redirect back to `/thanks/` and the page stayed on Contact.
- Case study: Building this portfolio with an AI coding assistant, the SDLC way (`/case-studies/portfolio-site/`, Oct – Nov 2026). Shows the live URL, Lighthouse scores and the owner's lessons learned, and states openly that the Web3Forms domain restriction was skipped to keep the project free. The draft in `docs/04-development/` was removed.
- `npm run wireframes` (`scripts/export-wireframes.mjs`): exports as-built grey wireframes of all 7 pages, desktop and mobile, to `docs/03-design/wireframes-v2.pdf` using headless Edge. No new dependency. Closes Sprint 1 task #8.
- Live contact form tested: message received. Web3Forms domain restriction skipped because it needs the paid plan; the access key is public by design, and the honeypot field stays as spam protection.
- Test plan run on the live site (results in `docs/05-testing/test-plan.md`). Fixed: wordmark, footer link, stand-alone arrow links and case-study back links now have 44 px touch targets. Lighthouse on Home: mobile 95 / 100 / 100 / 100, desktop 100 in all four.
### Changed
- Formats unified: case-study durations follow one pattern (for example PTS "Implementation / Feb – Oct 2026" → "Feb – Oct 2026"); "2019 – today" → "2019 – present"; "Windows Server 2008–2016" → "2008 – 2016"; the 2017 – 2018 role is labelled "IT Support" everywhere; the six case-study titles use sentence case like the other headings.
- CHANGELOG: release `[1.0.0] - 2026-11-05` cut at go-live; duplicate headings merged; stale "Planned (Sprint 1)" block removed.
- Home hero: the denim photo was replaced by an illustration of an IT room in front of a factory floor (AI-generated with ChatGPT, supplied by the owner). It sits under a radial overlay that is darkest behind the text, so more of the picture shows at the edges. `hero-denim.jpg` was removed.
- Home hero photo cropped from square (2400×2400) to 16:9 (2400×1350). The visible area on desktop is unchanged. Built hero images are about 25–30% lighter (desktop 1400w: 324 KB → 233 KB).
- Shared components, with no visible change (built HTML of all 14 pages compared before and after: identical). `CaseStudyCard` (featured, standard and home variants) replaces three copies of the card markup. `CaseStudyCta` is added once by the case-study template, and the six copies inside the Markdown files were removed. Projects data moved from `projects.astro` to `src/data/projects.ts`.- Portfolio case study retitled "Built with AI. Directed by me." with a new summary in the owner's words.
### Fixed
- Links inside case-study text looked like plain text (the base style removes colour and underline). Markdown links in `.prose` now use the accent colour, bold and an underline, in light and dark mode.

## [1.0.0] - 2026-11-05
### Added
- Site live on Cloudflare Pages at https://minheinzaw.pages.dev (auto-deploys from `main`). Security headers checked on the live site.
- `site` URL in `astro.config.mjs`; canonical link and Open Graph / Twitter tags on every page; `robots.txt`.
- Draft case study about building this portfolio with an AI coding assistant, the SDLC way (in `docs/`, not published until launch).
- Case study: Backup and recovery after a ransomware scare (2021 ransomware, 3-2-1 backups for ERP, Payroll and the file server, restore tests, network back within a day after the 2023 fire).
- Case study: Covering a second factory when its IT team left (about three months in 2023, then IT Executive for both factories).
- Favicon (indigo "M" with a copper dot) and a custom 404 page with links to Home, Case studies and Contact.
- Third case study: "Building a New Factory's IT from the Ground Up" — setting up a new garment factory's IT during construction (around 20 users, 2 servers, around 70 CCTV cameras, about six months, mostly single-handed).
- Security hardening: Cloudflare Pages security headers (CSP, HSTS, nosniff, frame/referrer/permissions policies) in `public/_headers`; theme and menu scripts moved to `public/scripts/` so the CSP can forbid inline scripts; privacy note on the Contact page; `docs/07-maintenance/security.md`. CSP `form-action` also allows `web3forms.com`, so the Web3Forms success redirect is not blocked.
- SDLC wheel on the Process page: seven stages (Planning to Maintenance) as a decorative SVG, with the same stages as an accessible list and an Idea → Business impact path.
- Focus-area strip under the home hero: Infrastructure • Cybersecurity • Microsoft 365 • Business Systems • Automation.
- Two real case study drafts: rebuilding the visitor system on Microsoft 365, and retiring the production tracking system. Unconfirmed facts are marked `[placeholder]`.
- Email address on the Contact page, next to the form.
- `TODO.md` at the root: one-page view of next tasks, inputs I owe, and launch steps.
- Profile photo on the About page (cropped, metadata removed, served as WebP).
- Project pushed to GitHub (`main` branch) for sync between laptops.
### Changed
- UI polish across pages: no heading glow in light mode (faint glow kept in dark mode and on the hero); body text 16 px (15 px on phones) and a 68-character reading measure for case-study prose and About text. Home expertise hexagons replaced by rectangular photo cards (3 + 2 on desktop, 2 columns on tablet, 1 on phones) with number, title and tags. About sections 03 and 04 now use a heading-left, content-right layout, so the empty left column is gone; the CV stays collapsed and still opens from `/about/#skills-title` links. Projects: a section with one card spans the full width with a head | details split; only cards with a link react on hover. Case Studies: key-fact pills on every card, using only numbers stated in each case study.
- Contact freelance line widened (owner): PC and laptop set-up, Microsoft 365, network and cabling, servers, CCTV installation, and help finding where AI fits into everyday workflows.
- Contact page polish: headline "Let's talk about practical IT."; simple "Ways to reach me" list (email, freelance line); form fields are now Name, Email, Subject and Message (Organization removed, Subject added; the visitor's subject becomes the email subject); "All fields are required" note, email hint, length limits, mobile email keyboard, stronger keyboard focus ring and an invalid-field border after interaction; privacy note says Web3Forms shows the confirmation page.
- About final polish: shorter, less casual hero copy; "My path" lines now say what each step taught rather than repeating the CV; How I Work keeps its five floor-level steps and now links to the full Process page; "What I'm exploring now" names AI-assisted workflows, automation and business systems as learning builds, not production work. CV: Microsoft 365 visitor register labelled "(interim)" and "Not the final VMS"; Fabric Age Control dashboard noted as in daily use.
- Home sharpened to six sections: hero, focus strip and expertise, philosophy, featured case studies (VMS and PTS only), a six-stage How I work preview linking to Process, and the final call to action. Hero: eyebrow "IT Manager / Garment manufacturing", shorter positioning copy, primary "View case studies" (filled) and secondary "Explore projects". Focus strip now says "Security & Backup", matching the hexagon. Removed the technology ecosystem, career timeline, certifications and the generic three-point focus list (all covered on About), with their unused CSS and data.
- Fabric Age Control dashboard marked Production: used every day in the warehouse (owner confirmed).
- Projects page regrouped by ownership: 01 Built at work (Fabric Age Control dashboard), 02 Implemented or coordinated (VMS, PTS, Plani8, FINAC Payroll, each labelled with who built it), 03 Learning builds (Style Control prototype, hourly automation experiment), 04 Retired (Microsoft 365 visitor register, interim). Every card shows type, status badge, problem or purpose, my contribution and, where relevant, technology and a case-study link. Jump links to each group.
- Process page rebuilt around six practical stages (Understand, Define, Stabilize, Deliver, Validate, Improve), each with a short lead, 3 activities and a one-line "In practice" link to a case study; new "How I decide" questions. The generic seven-stage SDLC wheel and the five consultancy-style phases were removed, with their CSS.
- Case Studies page rebuilt as an evidence page: method strip (Problem → Context → My role → Decision → Action → Outcome), VMS and PTS as large featured cards, the other three as supporting cards. Every card shows category, business problem, my role and outcome (new optional frontmatter fields). Whole card clickable through the title link, clear keyboard focus, no hover-only content, hover lift off under reduced motion.
- Task #4 (rename Case studies → Work, Projects → Lab) dropped; sitemap, wireframe notes and `CLAUDE.md` updated to the built routes.
- Contact page: one line saying I am open to freelance projects (Microsoft 365 set-up, network set-up, server backup). Services page (task #10) dropped for now.
- "Janet" corrected to JaNets (JUKI), a bought system that links sewing machines to track production in real time; added to the Home technology list.
- GRN note now explains its job: after finance opens a purchase order, the warehouse records the goods as they arrive, with evidence.
- Fabric Barcode system (records fabric as it arrives in the warehouse) and the fabric issuing system (issues fabric to Cutting) listed as two separate in-house systems.
- About CV systems regrouped by who built them: the group's in-house team (ERP, warehouse barcode and issuing, GRN, PTS, VMS, Payroll), bought from vendors (Solvei8 Plani8 now, Tracki8 and Maintaini8 planned; FINAC Payroll by Datamation; MYOB) and provided by buyers (Raptool, TracyBox). Home technology list updated to match.
- Home features all three case studies in a three-column row (one column below 920 px).
- About and CV: the 2017–2018 IT Assistant role now shows that I set up IT for a whole factory from the construction stage (cabling, network, CCTV, PCs and laptops) until users could start work.
- About page polish: calmer hero copy; "My path" retitled "What shaped the way I work" with shorter lessons; "How I work" is now a full-width signature band (bridge diagram, five steps in one row on desktop); tighter belief and teaching copy; "What I’m exploring now"; new meta description. Full CV notes updated for VMS (UAT through successful use at both factories), the retired Microsoft 365 register and PTS. "MCSA 70-740" shown as "Windows Server 2016 (Exam 70-740) training" until confirmed.
- About page: new "How I work" section with a Business ↔ IT ↔ Developers bridge diagram and a five-step problem approach taken from the VMS and PTS work. Stacks vertically below 1024 px.
- About page rewritten as a story in my own words: why IT, my path (Police IT → garment factory → PA to the MD → IT Manager) with what each step taught me, three beliefs linked to the case studies, and why I teach. The full CV is still there in a collapsible section, and links into it (e.g. Home → Skills) open it automatically.
- Company names removed from the whole site (About and Home timeline): employers now shown as "Garment manufacturing group", "Both Myanmar factories", "Pathein factory", "Garment factory", "Computer training centre" and "Private company". The Police years stay as they are.
- Projects page rebuilt from real work: "Built at work" (Fabric Age Control dashboard, interim visitor register) and "Lab" (Style Control Workbook, hourly production automation). Template example projects removed. About page systems lists updated to match; PTS note now says it is being rebuilt.
- VMS case study role corrected to IT Manager. "Group IT team in Sri Lanka" replaced by "the group’s overseas IT team" on About and in case studies; company names stay out of case studies.
- PTS case study rewritten: the system is being rebuilt to fit the two Myanmar factories, not retired. Adds overview cards, a project journey, three options and the owner's lessons; no placeholders left. URL changed to `/case-studies/production-tracking-rebuild/`.
- VMS case study rewritten and retitled "From UAT Findings to a Successful Visitor Management Rollout": the Microsoft 365 register is shown as an interim continuity solution, retired once the improved main system was in use at both Myanmar factories. Adds project overview cards, a project journey timeline, UAT cycle, interim architecture and transition diagrams, capabilities, lessons learned and a closing call to action. No placeholders remain.
- Case study template: optional overview fields (system, focus, environment, technologies); bullets restored in case study text.
- Soft glow behind the hero headline (light glow, copper on "IT") and behind page and section titles (washed-blue glow in light mode, light glow in dark mode).
- Colour palette changed from soft blue to denim: cotton off-white background, indigo accents, copper "stitching" details; dark mode uses raw indigo.
- Text made easier to read: small labels and tags enlarged (smallest now 10–12 px), secondary text 14 px and darker, hero headline heavier.
- Home hero background changed from a night-time globe to a denim fabric photo, to show the garment industry.
- Home page rebuilt in nine sections: hero, expertise hexagons (Infrastructure, Security & Backup, Microsoft 365, Business Systems, Automation), philosophy, case studies, technology ecosystem, how I work, career timeline, certifications, contact. Five new Unsplash photos; the four old tile photos removed.
- About page rebuilt from my CV: experience timeline, systems I've worked on, skills, education and certifications, languages. Data in `src/data/career.ts`.
- Title updated to IT Manager (since January 2026) in the header and home hero.
- Header wordmark shows my name and title; browser tab titles end in my name.
- Home page redesigned: full-width photo hero with navy overlay and a hexagon grid linking to the main pages (replaces the focus-area strip). Image sources in `docs/03-design/image-credits.md`.
- Home hero copy rewritten in a personal voice ("Curious by nature. IT by choice.") and now includes my name.
- Design switched from green to soft blue (light + dark); dark mode uses navy (`#0b1426`).
- Positioning changed to customer-first: freelance clients first, employers second (ADR-005). Charter, sitemap and risk register updated.
### Removed
- Illustrative (fictional) sample case study.
### Fixed
- Theme toggle and mobile menu did nothing: `theme-init.js` and `site.js` both declared a top-level `themeColorMeta`, so the browser refused to run `site.js` (broken since the scripts were moved out of the layout). Both scripts now run in their own scope.
- Accessibility: theme and menu buttons are 44 × 44 px; hexagon links show a white focus ring; Escape closes the mobile menu and returns focus (the button label now resets correctly); case-study index cards use h2 under the h1; the decorative SDLC wheel is hidden below 480 px, where the stage list is shown instead.
- About CV: "Vendor systems I worked on" renamed "Group and vendor systems I worked on", because the visitor and production tracking systems were built by the group IT team.
- 70-740 is a course, not a passed exam: moved from "Certifications — completed" to a new "Training" list on About, and removed from Home.
- Dependencies: `npm audit fix` and minor updates (Tailwind 4.3.4, @astrojs/check 0.9.12); 8 advisories down to 5. The rest need Astro 7 (breaking) and only affect build tools, not the static site.
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
