# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

High-fidelity prototype for a corporate website redesign for 東森テクノロジー (Tomori Technology). Exists in two forms:
- **`index.html`** — Fully self-contained demo (React + Babel + Tailwind all via CDN). Open directly in a browser.
- **`src/`** — Modular React components ready to migrate into a Vite or Next.js project.

There is currently no `package.json`, build toolchain, or test suite.

## Running the Demo

```bash
open index.html          # macOS
# or just double-click the file
```

## Migration to Vite (when needed)

```bash
npm create vite@latest tomori-site -- --template react
cd tomori-site
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# Copy src/ into the new project and set up tailwind.config.js
npm run dev
```

When migrating, extract the Tailwind custom theme from the `window.tailwind.config` block in `index.html` into `tailwind.config.js`, and move the inline `<style>` block into `src/index.css`.

## Architecture

### Routing

Hash-based client-side routing in `src/App.jsx`. Routes are `#/`, `#/company`, `#/service`, `#/recruit`, `#/news`, `#/contact`. No external router library — `App.jsx` reads `window.location.hash` directly.

### Content Layer

All copywriting lives in `src/data/content.js` as exported constants (`SERVICES`, `STRENGTHS`, `NEWS`, `OVERVIEW`, `POSITIONS`, `BENEFITS`). This is the single file to edit when updating site content or swapping placeholder copy.

### Shared Components (`src/components/Shared.jsx`)

Three reusable exports used across all pages:
- `SectionLabel` — section header with number, English label, and Japanese title
- `PageHead` — hero banner with gradient background and dot-grid overlay
- `useFadeUp()` — `IntersectionObserver` hook that returns a `ref` and `visible` bool for scroll-triggered fade-in animations

### Design System

Custom Tailwind tokens (defined in `index.html`; move to `tailwind.config.js` on migration):

| Token | Value | Use |
|-------|-------|-----|
| `ink` | `#0A1C3B` | Navy, primary text/backgrounds |
| `accent` | `#1E5BD6` | Blue CTAs |
| `brass` | `#B7A77A` | Gold accents |
| `paper` | `#F5F6F8` | Off-white section backgrounds |
| `line` | `#E5E7EB` | Borders/dividers |

Custom utility classes: `.hero-bg`, `.dot-grid`, `.btn-primary`, `.card-hover`, `.fade-up`, `.link-underline`, `.marquee`.

Typography: Noto Sans JP (Japanese body/headings), Inter (numbers/Latin), Cormorant Garamond (editorial serif accents).

## Things to Complete

Several `// TODO` and placeholder comments exist in `content.js` and the page components for real copy, images, and form submission logic (Contact page currently has an email fallback only).
