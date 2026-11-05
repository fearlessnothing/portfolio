# DRAFT — Portfolio case study

> Not published. Move to `src/content/case-studies/portfolio-site.md` after launch,
> when the live URL is known. Fill every `[after launch]` item first.
> Owner decisions (2026-11-05): show it as a case study, say openly that it was built
> with an AI coding assistant, publish only with the live URL.

---
title: "Building This Portfolio with an AI Coding Assistant, the SDLC Way"
system: "Personal portfolio website"
order: 6
role: "Product owner and project lead (personal project)"
duration: "Oct 2026 – [after launch: launch month]"
environment: "Personal project · free tools only"
focus:
  - "SDLC from planning to maintenance"
  - "Directing an AI coding assistant"
  - "Security by design"
  - "Accessibility and mobile-first"
technologies:
  - "Claude Code (AI coding assistant)"
  - "Astro"
  - "Tailwind CSS"
  - "GitHub"
  - "Cloudflare Pages"
  - "Web3Forms"
tags:
  - "SDLC"
  - "AI-assisted development"
  - "Security"
  - "Personal project"
summary: "I built this portfolio with an AI coding assistant, run like a real IT project: planned, designed, built, tested and documented in sprints. I set the requirements and rules, made every decision and checked every result; the assistant wrote the code."
results:
  - "Live at [after launch: URL], built with free tools only."
  - "Documented across the full SDLC: 21 documents from planning to maintenance, 5 decision records, sprint logs and a changelog."
  - "Security headers, no inline scripts, no secrets in the repository; [after launch: live headers checked]."
---

## Executive summary

This site is a personal project, not work for an employer. I used it to show how I run an IT project: I planned it, wrote requirements, made design decisions, and checked each change before accepting it. An AI coding assistant (Claude Code) wrote the code under my direction. Everything is recorded in an SDLC document set, from the project charter to the maintenance plan.

## Why I built it this way

In my job I coordinate systems that other people build: in-house developers, the group's overseas IT team and outside vendors. Directing an AI assistant uses the same skills: clear requirements, review, testing and saying no when something is wrong.

## How I worked with the AI

- **Rules first:** I wrote a project rule file for the assistant: never invent numbers or facts, no company names, small changes one at a time, run checks after every change, never commit keys.
- **I decide, it builds:** for each change the assistant proposed options; I chose, and it built the change.
- **I check every result:** I reviewed pages on desktop and mobile and corrected content until it matched what really happened.
- **Facts come from me:** every case-study fact, date and number came from my own answers. Where I had no fact, the page waited.

## SDLC, phase by phase

<ol class="cs-journey">
  <li><span class="cs-step">01</span><div><strong>Planning</strong><p>Project charter and risk register.</p></div></li>
  <li><span class="cs-step">02</span><div><strong>Requirements</strong><p>Requirements and user stories.</p></div></li>
  <li><span class="cs-step">03</span><div><strong>Design</strong><p>Design system, sitemap, wireframes and 5 decision records (ADRs).</p></div></li>
  <li><span class="cs-step">04</span><div><strong>Development</strong><p>Scrum-lite sprints, one small change at a time, each with a commit and a changelog entry.</p></div></li>
  <li><span class="cs-step">05</span><div><strong>Testing</strong><p>Test plan; type checks and a production build after every change; a full project review.</p></div></li>
  <li><span class="cs-step">06</span><div><strong>Deployment</strong><p>Deployment runbook for Cloudflare Pages.</p></div></li>
  <li class="cs-journey-done"><span class="cs-step">07</span><div><strong>Maintenance</strong><p>Maintenance plan and security document.</p></div></li>
</ol>

## Security

- **Security review:** had the site checked for security issues, then ran a full project review and fixed what it found.
- **No secrets in the repository:** the `.env` file is never committed; the repository was scanned for keys, passwords and internal data.
- **Security headers:** Content Security Policy (scripts only from this site; the form can post only to Web3Forms), HSTS, clickjacking protection, `nosniff`, and camera, microphone and location turned off.
- **No inline scripts:** scripts moved into separate files so the policy could stay strict.
- **Dependencies:** `npm audit` run and fixed from 8 advisories to 5; the remaining 5 affect only the build tools and clear with the next major Astro upgrade.
- **Contact form:** spam honeypot, a privacy note, and the form key restricted to the live domain [after launch: confirm done].
- **Documented:** every control is listed in the security document, with a monthly audit in the maintenance plan.

## Challenges & risks

- **AI can be confidently wrong.** A security change once broke dark mode: two scripts shared a name. Testing caught it, the cause was found, and the fix was checked in the browser.
- **AI can fill gaps with guesses.** Draft text sometimes went beyond my facts. The "never invent" rule and my reviews removed every guess.
- **Keeping it free:** every tool and service had to have a free plan.

## Results

- [after launch: live URL]
- 7 SDLC phases documented: 21 documents, 5 decision records, sprint logs and a changelog.
- Strict security headers and no secrets in the repository.
- Mobile-first from 360 px to 1440 px, light and dark themes, touch targets of at least 44 px.

## Lessons learned

- [owner to confirm]

<div class="cs-cta">
  <p>Technology works best when it fits the operation.</p>
  <div class="cs-cta-actions">
    <a class="button" href="/case-studies/">View other case studies</a>
    <a class="button secondary" href="/projects/">View projects</a>
    <a class="button secondary" href="/contact/">Contact</a>
  </div>
</div>
