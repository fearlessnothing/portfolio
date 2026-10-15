# Development Environment

| Tool | Version / note |
|---|---|
| OS | Windows (two laptops) |
| Editor | VS Code |
| AI coding | Claude Code extension in VS Code |
| Runtime | Node.js LTS (≥ 20.3) |
| Version control | Git + GitHub |
| Project path | `D:\Portfolio Project` |

## VS Code extensions
Recommended list is in `.vscode/extensions.json` — VS Code offers to install them when the folder is opened.

Removed: Rainbow Brackets (deprecated — bracket colouring is built into VS Code).
Not needed: Live Server (Astro's dev server already reloads live).

## Setup on a new laptop
```powershell
winget install OpenJS.NodeJS.LTS
winget install --id Git.Git -e
# restart VS Code
cd D:\
git clone https://github.com/<username>/portfolio.git "Portfolio Project"
cd "D:\Portfolio Project"
npm install
Copy-Item .env.example .env
npm run dev
```

## Daily workflow
1. Start: `git pull`
2. Work in small steps; after each working change: commit
3. Before commit: `npm run check` and `npm run build`
4. Finish: `git push`
