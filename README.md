# Garment IT Leadership Portfolio

A static portfolio starter for an IT Manager working in Myanmar's garment manufacturing industry. Built with Astro, Tailwind CSS v4 and Markdown-backed case studies.

## Requirements

- Node.js 20.3.0 or newer
- npm (included with Node.js)
- A Web3Forms access key to enable the contact form

## Local setup

```sh
npm install
```

Copy `.env.example` to `.env` (PowerShell: `Copy-Item .env.example .env`) and set `PUBLIC_WEB3FORMS_ACCESS_KEY` to the key from your Web3Forms account, then run:

```sh
npm run dev
```

The development server prints the local URL. Run `npm run check` for Astro and TypeScript diagnostics and `npm run build` to create the static site in `dist/`. Use `npm run preview` to inspect the production build locally.

## Case studies

Add Markdown files under `src/content/case-studies/`. Each file requires this frontmatter:

```yaml
---
title: "Case study title"
order: 1 # lower numbers appear first; the home page features the first two
role: "IT Manager"
duration: "12 weeks"
tags: ["Infrastructure", "Operations"]
summary: "A concise overview of the challenge and approach."
results:
  - "A verified result"
---
```

Include the sections `Context`, `My Role`, `Options Considered`, `Execution`, `Challenges & Risks`, `Results` and `Lessons Learned` in the Markdown body. The detail route is generated from each Markdown filename. The included case study is explicitly illustrative; replace its fictional scenario and outcomes with verified, approved details before publishing.

## Cloudflare Pages deployment

1. Push the project to a Git provider and create a Cloudflare Pages project connected to that repository.
2. Set the framework preset to **Astro** (or choose **None** for a plain static build).
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Set `PUBLIC_WEB3FORMS_ACCESS_KEY` in the Pages project's environment variables for the production environment. Add it for preview deployments too if their forms should work.
5. Deploy. Astro is configured with `output: 'static'`; no server adapter is required for this site.

For a manual upload, run `npm run build` and deploy the generated `dist/` directory using Wrangler or the Cloudflare Pages dashboard.

## Personalize before launch

Replace the illustrative case study and project prompts with verified work, review all copy for accuracy, and add a real contact destination or Web3Forms key. The visual theme toggle supports light and dark modes and remembers the visitor's choice.