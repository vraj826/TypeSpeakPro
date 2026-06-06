# Contributing to TypeSpeak Pro 🚀

Thank you for your interest in contributing to **TypeSpeak Pro** — the world's first dual-engine communication trainer that merges high-velocity typing challenges with real-time vocal practice, built on React, Vite, TypeScript, Tailwind CSS, Shadcn/UI, and Supabase Realtime.

This guide walks you through everything you need to make your first PR a smooth experience. Welcome! 🎯

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
  - [Fork & Clone the Repository](#fork--clone-the-repository)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Project Structure](#project-structure)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Making Changes](#making-changes)
  - [Commit Message Style](#commit-message-style)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Reporting Issues](#reporting-issues)
- [Need Help?](#need-help)

---

## Code of Conduct

By participating in this project, you agree to keep this space respectful, inclusive, and constructive. Be kind and patient — especially with first-time contributors.

---

## Getting Started

### Fork & Clone the Repository

1. **Fork** this repository by clicking the **Fork** button at the top-right of the [TypeSpeak Pro GitHub page](https://github.com/SufalBasak/TypeSpeakPro).

2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/TypeSpeakPro.git
   cd TypeSpeakPro
   ```

3. **Add the upstream remote** to stay in sync with the original:
   ```bash
   git remote add upstream https://github.com/SufalBasak/TypeSpeakPro.git
   ```

4. **Verify your remotes:**
   ```bash
   git remote -v
   # origin    https://github.com/YOUR_USERNAME/TypeSpeakPro.git (fetch)
   # upstream  https://github.com/SufalBasak/TypeSpeakPro.git (fetch)
   ```

---

### Setting Up the Development Environment

#### Prerequisites

| Tool | Purpose |
|------|---------|
| [Node.js](https://nodejs.org/) (v18+) | JavaScript runtime |
| [npm](https://npmjs.com/) | Package manager |
| A modern browser | Chrome / Edge recommended for Web Speech API support |

#### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

3. **If working on Supabase Realtime features** (multiplayer races), create a `.env.local` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   Get these from your [Supabase project settings](https://app.supabase.com/).

4. **Keep your fork up to date** before starting any new work:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

---

## Project Structure

```text
TypeSpeakPro/
├── public/               # Static assets (logo, images)
├── src/
│   ├── components/       # Reusable UI components (Shadcn/UI + custom)
│   ├── pages/            # Route-level page components
│   ├── hooks/            # Custom React hooks (Reflex Engine, Vocal Engine)
│   ├── lib/              # Utility functions and Supabase client
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Root component and route definitions
│   └── main.tsx          # Application entry point
├── index.html
├── tailwind.config.ts    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

- **Typing engine (Reflex Engine) changes** → `src/hooks/`
- **Audio/speech engine (Vocal Engine) changes** → `src/hooks/`
- **UI component changes** → `src/components/`
- **New pages or routes** → `src/pages/` + update `App.tsx`
- **Supabase/multiplayer logic** → `src/lib/`
- **Type definitions** → `src/types/`

---

## Branch Naming Conventions

Always create a new branch for your changes. **Never commit directly to `main`.**

Use this format:

```text
<type>/<short-description>
```

| Type | When to use | Example |
|------|-------------|---------|
| `feat` | New feature | `feat/ai-opponent-speedDemon` |
| `fix` | Bug fix | `fix/vocal-engine-silence-detection` |
| `docs` | Documentation only | `docs/add-contributing-guide` |
| `chore` | Maintenance (deps, config) | `chore/update-dependencies` |
| `refactor` | Code restructuring, no behavior change | `refactor/reflex-engine-hooks` |
| `test` | Adding or updating tests | `test/typing-accuracy-calculation` |
| `style` | UI or formatting tweaks | `style/glassmorphism-card-polish` |

**Create your branch:**
```bash
git checkout -b feat/your-feature-name
```

---

## Making Changes

- Keep each PR **focused** — one feature or fix per PR.
- This is a **100% TypeScript codebase** — ensure zero type errors before pushing:
  ```bash
  npm run build
  ```
- For **Reflex Engine changes** (keystroke dynamics, timing, AI opponents), test across different typing speeds and browser environments.
- For **Vocal Engine changes** (audio processing, speech analysis), test with the Web Speech API across Chrome and Edge — browser support varies.
- For **UI changes**, maintain the existing glassmorphism and dynamic lighting aesthetic. Use Tailwind CSS utility classes and existing Shadcn/UI primitives where possible.
- For **Supabase Realtime changes** (multiplayer races), test sub-100ms latency behavior and handle connection drops gracefully.
- For **performance-sensitive changes**, the project targets 60FPS animations even during heavy audio processing — profile your changes and avoid unnecessary re-renders.
- For **major features or architectural changes**, open an issue first to discuss before writing code.

### Commit Message Style

Follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```text
<type>(<optional scope>): <short description>
```

**Examples for TypeSpeak Pro:**
```text
feat(ai): improve SpeedDemon burst-typing adaptation algorithm
fix(vocal): resolve silence detection false positive on Chrome
docs: add Supabase setup steps to CONTRIBUTING.md
chore(deps): upgrade supabase-js to latest version
refactor(reflex): extract keystroke dynamics into custom hook
style(ui): refine glassmorphism effect on race card component
```

**Rules:**
- Use **imperative mood** — "add", not "added" or "adds"
- Keep the subject line under **72 characters**
- Reference related issues at the bottom: `Closes #5` or `Fixes #9`

---

## Submitting a Pull Request

1. **Ensure the TypeScript build passes** before pushing:
   ```bash
   npm run build
   ```

2. **Push your branch** to your fork:
   ```bash
   git push origin feat/your-feature-name
   ```

3. Go to [SufalBasak/TypeSpeakPro](https://github.com/SufalBasak/TypeSpeakPro) on GitHub and click **"Compare & pull request"**.

4. Fill in the PR description with:
   - A clear **title** (e.g. `feat: add TechTitan AI opponent calibration`)
   - **What changed** and **why**
   - Which engine is affected (Reflex / Vocal / both), if applicable
   - Screenshots or recordings for any UI changes
   - The issue it resolves: `Closes #<issue-number>`

5. A maintainer will review your PR. Requested changes are normal — address the feedback, push updates, and you'll get merged once approved. 🎉

> **Note:** PRs that touch the Reflex Engine core, Vocal Engine pipeline, AI opponent algorithms, or Supabase Realtime logic should be discussed in a GitHub Issue first.

---

## Reporting Issues

Found a bug or have a feature idea? [Open an issue](https://github.com/SufalBasak/TypeSpeakPro/issues)!

**Before opening an issue:**
- Search [existing issues](https://github.com/SufalBasak/TypeSpeakPro/issues) to avoid duplicates.
- Check if it's already fixed in the latest commit on `main`.

**For bug reports, include:**
- Clear, descriptive title
- Which engine or feature is affected (Reflex Engine / Vocal Engine / Multiplayer / UI)
- Steps to reproduce the problem
- Expected vs. actual behavior
- Your OS, browser (and version), and Node.js version (`node -v`)
- Console errors from browser DevTools if available

**For feature requests, include:**
- The problem you're solving
- Your proposed solution
- Any alternatives you considered

---

## Need Help?

- Browse [open issues](https://github.com/SufalBasak/TypeSpeakPro/issues) for context on ongoing work.
- Leave a comment on the relevant issue or PR.
- Reach the maintainer directly:
  - GitHub: [@SufalBasak](https://github.com/SufalBasak)
  - Email: [sufalbasak199@gmail.com](mailto:sufalbasak199@gmail.com)

---

*This guide is open to improvement too. If something is unclear or missing — feel free to open a PR or issue for it.*

---

<p align="center"><em>Creating the future of communication, one keystroke at a time.</em></p>