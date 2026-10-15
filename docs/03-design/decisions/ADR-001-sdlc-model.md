# ADR-001: Agile (Scrum-lite) as the delivery model

**Date:** 2026-10-14 · **Status:** Accepted

## Context
Solo project, AI-assisted coding, requirements likely to change after seeing early versions.

## Options
1. Waterfall — requires all requirements fixed up front; poor fit for iterative AI-assisted building.
2. V-Model — heavy test documentation for a small static site.
3. Kanban — flexible but weak at showing phases and milestones.
4. **Scrum-lite (1-week sprints)** — working increment each week, simple planning/review/retro.

## Decision
Scrum-lite. A prototype was built before formal planning; this is recorded honestly as **Sprint 0 (prototype/spike)**.

## Consequences
Each sprint has a short plan, review and retro in `04-development/sprints/`.
