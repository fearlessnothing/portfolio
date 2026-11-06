---
title: "Building this portfolio with an AI coding assistant, the SDLC way"
system: "Personal portfolio website"
order: 6
role: "Product owner and project lead (personal project)"
duration: "Oct – Nov 2026"
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
summary: "I built this portfolio with an AI coding assistant and ran it like a real IT project, planned, designed, built, tested and documented in sprints. I set the requirements and rules, made every decision and checked every result. The assistant wrote the code."
highlights: ["7 SDLC phases documented", "Lighthouse mobile 95–100", "Free tools only"]
category: "Personal project · AI-assisted delivery"
problem: "I needed a portfolio that shows how I run IT work, built on a zero budget and without writing the code myself."
roleSummary: "Product owner and project lead: set the rules, wrote the requirements, made every decision and reviewed every change made by the AI assistant."
outcome: "Live at minheinzaw.pages.dev, documented from planning to maintenance, with Lighthouse scores of 95–100."
results:
  - "Live at https://minheinzaw.pages.dev, built and hosted with free tools only."
  - "Documented across the full SDLC: 21 documents from planning to maintenance, including 5 decision records, sprint logs and a changelog."
  - "Lighthouse on mobile: Performance 95, Accessibility 100, Best Practices 100, SEO 100. Desktop: 100 in all four."
  - "Security headers checked on the live site, no inline scripts and no secrets in the repository."
---

## Executive summary

This site is a personal project, not work for an employer. I used it to show how I run an IT project. I planned it, wrote the requirements, made the design decisions and checked each change before accepting it. An AI coding assistant (Claude Code) wrote the code under my direction. Everything is recorded in an SDLC document set, from the project charter to the maintenance plan.

## Why I built it this way

In my job I coordinate systems that other people build: in-house developers, the group's overseas IT team and outside vendors. Directing an AI assistant uses the same skills: clear requirements, review, testing, and saying no when something is wrong.

## How I worked with the AI

- **Rules first:** I wrote a rule file for the assistant: never invent numbers or facts, no company names, one small change at a time, run checks after every change, never commit keys.
- **I decide, it builds:** for each change the assistant proposed options. I chose one, and it built the change.
- **I check every result:** I reviewed pages on desktop and mobile and corrected the content until it matched what really happened.
- **Facts come from me:** every case-study fact, date and number came from my own answers. Where I had no fact, the page waited until I did.

## SDLC, phase by phase

<ol class="cs-journey">
  <li><span class="cs-step">01</span><div><strong>Planning</strong><p>Project charter and risk register.</p></div></li>
  <li><span class="cs-step">02</span><div><strong>Requirements</strong><p>Requirements and user stories.</p></div></li>
  <li><span class="cs-step">03</span><div><strong>Design</strong><p>Design system, sitemap, wireframes and 5 decision records (ADRs).</p></div></li>
  <li><span class="cs-step">04</span><div><strong>Development</strong><p>Scrum-lite sprints with one small change at a time, each with a commit and a changelog entry.</p></div></li>
  <li><span class="cs-step">05</span><div><strong>Testing</strong><p>Test plan run on the live site, with type checks and a production build after every change, plus a full project review.</p></div></li>
  <li><span class="cs-step">06</span><div><strong>Deployment</strong><p>Deployment runbook for Cloudflare Pages.</p></div></li>
  <li class="cs-journey-done"><span class="cs-step">07</span><div><strong>Maintenance</strong><p>Maintenance plan and security document.</p></div></li>
</ol>

## Security

- **Security review:** I had the site checked for security issues, then ran a [full project review](https://github.com/fearlessnothing/portfolio/tree/main/project-review) and fixed what it found.
- **No secrets in the repository:** the `.env` file is never committed. The repository was scanned for keys, passwords and internal data.
- **Security headers:** Content Security Policy (scripts only from this site, and the form can post only to Web3Forms), HSTS, clickjacking protection and `nosniff`. Camera, microphone and location are turned off. All were checked on the live site.
- **No inline scripts:** scripts moved into separate files so the policy could stay strict.
- **Dependencies:** `npm audit` advisories went from 8 to 5. The remaining 5 affect only the build tools and will clear with the next major Astro upgrade.
- **Contact form:** spam honeypot and a privacy note. The form key is public by design. Restricting it to this domain needs a paid plan, so I left that out to keep the project free.
- **Documented:** every control is listed in the security document, and the maintenance plan includes a monthly audit.

## Challenges & risks

- **AI can be confidently wrong.** A security change once broke dark mode because two scripts shared a name. Testing caught it, the cause was found, and the fix was checked in the browser.
- **AI can fill gaps with guesses.** Draft text sometimes went beyond my facts. The "never invent" rule and my reviews removed every guess.
- **Keeping it free:** every tool and service had to have a free plan.

## Results

- Live at [minheinzaw.pages.dev](https://minheinzaw.pages.dev).
- 7 SDLC phases documented: 21 documents, including 5 decision records, sprint logs and a changelog.
- Lighthouse on mobile: Performance 95, Accessibility 100, Best Practices 100, SEO 100. Desktop: 100 in all four.
- Strict security headers and no secrets in the repository.
- Mobile-first from 360 px to 1440 px, light and dark themes, and touch targets of at least 44 px.

## Lessons learned

- **Rules before code.** Writing clear rules for the AI at the start saved more rework than any later fix.
- **AI needs review.** The AI can be confidently wrong, so every result needs a check before it is accepted.
- **Small steps are easy to trust.** One small change at a time, each with a check and a commit, made every change easy to review and undo.
- **Test the live site.** Testing the live site found issues the local checks missed, such as touch targets under 44 px.

