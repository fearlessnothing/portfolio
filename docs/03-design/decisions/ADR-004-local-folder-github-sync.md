# ADR-004: Local project folder, synced through GitHub

**Date:** 2026-10-15 · **Status:** Accepted

## Context
I work on two laptops. The project started inside a company OneDrive folder.

## Options
1. Keep in OneDrive — automatic sync, but `npm install` writes thousands of files and OneDrive locks them (EPERM/EBUSY errors); also personal work on company storage.
2. **Local folder (`D:\Portfolio Project`) + GitHub** — version history, deploy source and sync in one.

## Decision
Option 2. Workflow: `git pull` when starting, commit + `git push` when finishing.

## Consequences
Git and a GitHub account required on both laptops. Working on both laptops at the same time must be avoided.
