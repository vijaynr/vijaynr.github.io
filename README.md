# Vijayasankar Ravindran — portfolio and blog

Astro static site for https://vijaynr.github.io. The homepage carries the portfolio;
`/blog/` contains Markdown articles with a shared light/dark theme and RSS feed.

## Develop

Use Node 24 (`nvm use`, if you use nvm), then:

```sh
npm ci
npm run dev
```

Astro prints the local preview URL. Before shipping:

```sh
npm run check
npm run build
npm test
npm run preview
```

`npm test` checks the built output, so run the build first. The site needs no
server, database, or external CMS in production.

## Write a post

Create `posts/my-post.md` directly in the top-level **posts/** folder:

```md
---
title: "My post title"
description: "A short summary for the blog listing, feed, and search results."
date: 2026-11-15
owner: "Vijayasankar Ravindran"
tags: [Engineering]
draft: false
---

Write the article in Markdown. Use fenced code blocks with a language name.
```

The filename becomes `/blog/my-post/`. Use flat, kebab-case filenames. Posts are published by default; set
`draft: true` while writing to keep a post unpublished. Drafts are excluded from article
routes, homepage previews, the blog listing, tags, and RSS, including during local preview.
When revising a published post, add `updatedDate` without changing `date`.
Dates are displayed in Asia/Kolkata. Tags are built from published posts.

Only `title` and `date` are required. `description` is optional: when omitted,
a short excerpt is generated from the article. `owner` defaults to Vijayasankar
Ravindran. `tags` defaults to an empty list. Extra YAML fields are retained for
future use. The previous `pubDate` and `categories` fields are also accepted.
The first three published posts, newest first, appear automatically in the
homepage Blog section. Its **View more** link opens the complete archive.

Images go in `public/images/` and can be embedded as `![Description](/images/name.webp)`.
The content schema in `src/content.config.ts` validates post metadata at build time.

## Structure

- `src/pages/`: homepage, blog, categories, feed, and 404 page.
- `src/components/`: shared header/footer, post list, portfolio sections.
- `src/layouts/`: document shell and article layout.
- `src/data/`: experience, selected projects, and skills.
- `posts/`: one flat folder of Markdown posts; Genesis retains its original text and date.
- `src/styles/`: shared portfolio tokens and reading styles.
- `public/`: portrait, résumé, favicons, and the standalone debt calculator.
- `astro.config.mjs`: site origin, syntax highlighting, and legacy URL redirects.
- `tests/`: migration and built-site checks.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` checks, builds, tests, and deploys
`dist/` when a change reaches `main`. Pull requests run the same checks without
deploying. In the repository's **Settings → Pages**, select **GitHub Actions** as
the build source before the first deployment. No custom domain or `base` is
needed for the `vijaynr.github.io` repository.

## Preserved links

- `/all/personal/2022/03/27/genesis.html` → `/blog/genesis/`
- `/posts/` → `/blog/`
- `/about/` → `/#background`
- `/projects/` and `/projects/personal_portfolio` → `/#work`
- `/categories/` remains a category archive, with old category anchors supported.
- `/feed.xml` remains the feed endpoint (now RSS 2.0).
- `/docs/resume.pdf`, `/assets/picture.png`, and
  `/html/projects/debt_payoff_calc.html` remain available.

Static redirect pages use HTML meta refresh and a fallback link; GitHub Pages
cannot issue configurable HTTP 301 redirects. Jekyll templates and Ruby
dependencies have been replaced; the original sources remain in Git history.
