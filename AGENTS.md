# Agent guidelines

This repository is an Astro static portfolio and blog, deployed to GitHub Pages.

## Development and verification

Use Node 24 (`nvm use`) and install dependencies with `npm ci`.
Run `npm run dev` for development. Before shipping, run:

```sh
npm run check
npm run build
npm test
```

Tests inspect the built output and exercise Markdown authoring in an isolated build.
Do not stop an existing user development server.

## Structure and authoring

- `posts/*.md`: flat folder of blog posts. The filename becomes `/blog/<name>/`.
- `src/content.config.ts`: YAML front-matter schema.
- `src/lib/blog.ts`: published-post sorting, excerpts, tags, and reading time.
- `src/components/portfolio/`: homepage sections, including the latest three posts.
- `src/layouts/`: shared document shell and article layout.
- `src/styles/global.css`: shared portfolio theme and typography.
- `src/styles/blog.css`: blog archive and reading styles.
- `public/`: static assets and preserved legacy pages.

Posts require `title` and `date`; optional fields include `description`, `owner`,
`tags`, `updatedDate`, and `draft`. Drafts are excluded from all public output.
Legacy `pubDate` and `categories` remain supported. See README.md for an example.
Keep Genesis text and historical URLs intact.

## Design

Read PRODUCT.md, DESIGN.md, and `.impeccable/surfaces/blog.md` before visual changes.
The blog shares the portfolio palette and DM Sans typography, with a compact,
minimal, lightly playful character. Support both themes, narrow screens, keyboard
navigation, and reduced motion. Keep homepage Blog navigation and previews working.

## Deployment

`.github/workflows/deploy.yml` checks, builds, tests, and deploys pushes to `main`.
GitHub Pages must use GitHub Actions as its build source.
Commit, push, or publish only when authorized by the user.
