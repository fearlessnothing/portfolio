# Risk Register

| ID | Risk | Likelihood | Impact | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|
| R1 | Confidential company data published by mistake | Medium | High | Anonymise every case study; review checklist before each publish; no salaries, names or exact financials | Me | Open |
| R2 | Case studies claim results that cannot be verified | Medium | High | Use only figures I can explain; mark unknowns `[placeholder]`; never invent numbers | Me | Open |
| R3 | AI-generated code breaks working features | High | Medium | Commit after every working change; small prompts; run `npm run check` and `npm run build` | Me | Open |
| R4 | Files out of sync between two laptops | Medium | Medium | Project kept locally; GitHub used for sync (pull at start, push at end) | Me | Mitigated |
| R5 | OneDrive sync locks files during `npm install` | High | Medium | Project moved out of OneDrive to `D:\Portfolio Project` | Me | Closed |
| R6 | API keys committed to GitHub | Low | High | `.env` in `.gitignore`; keys only in Cloudflare environment variables | Me | Mitigated |
| R7 | Free hosting limits or service changes | Low | Low | Static site — can move to Vercel / Netlify / GitHub Pages in under an hour | Me | Open |
| R8 | Scope creep (demo apps, blog) delays v1.0 | Medium | Medium | Out-of-scope list in charter; extras go to backlog after v1.0 | Me | Open |
