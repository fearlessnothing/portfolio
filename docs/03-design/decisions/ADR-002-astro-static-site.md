# ADR-002: Astro + Tailwind CSS, static output

**Date:** 2026-10-14 · **Status:** Accepted

## Context
Content-heavy site, case studies in Markdown, must be fast and free to host.

## Options
1. Plain HTML/CSS — simple, but repeated layout code and no Markdown pipeline.
2. Next.js — powerful but more than a static portfolio needs.
3. **Astro (static) + Tailwind v4** — Markdown content collections, zero JS by default, fast.

## Decision
Astro 5 with `output: 'static'` and Tailwind CSS v4.

## Consequences
Any static host works; adding a case study is one Markdown file.
