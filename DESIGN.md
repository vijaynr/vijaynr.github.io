---
name: Vijayasankar Ravindran Portfolio
description: Subtle professional portfolio and compact personal notes with factual content and shared neutral themes.
colors:
  dark-bg: "#151716"
  dark-surface: "#1d201e"
  dark-surface-raised: "#262a27"
  dark-ink: "#ecede9"
  dark-muted: "#b0b6af"
  dark-line: "#3b413c"
  dark-accent: "#a9c4e8"
  light-bg: "#fafaf8"
  light-surface: "#f0f2ef"
  light-surface-raised: "#e8ece7"
  light-ink: "#252c27"
  light-muted: "#59645c"
  light-line: "#d5dcd5"
  light-accent: "#365f93"
  light-accent-ink: "#ffffff"
typography:
  display:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "clamp(2.35rem, 4.2vw, 3.6rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-.035em"
  headline:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "clamp(1.6rem, 2.5vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.02em"
  title:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: ".95rem"
    fontWeight: 500
  brand:
    fontFamily: '"DM Mono", monospace'
    fontSize: ".9rem"
    fontWeight: 700
    lineHeight: 1
  blog-heading:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-.035em"
  blog-article-title:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.035em"
  blog-post-title:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.02em"
  blog-body:
    fontFamily: '"DM Sans", sans-serif'
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "normal"
rounded:
  blog-pill: "999px"
  chip: "5px"
  action: "6px"
  control: "8px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  section: "clamp(3rem, 6vw, 5rem)"
components:
  button-primary:
    rounded: "{rounded.action}"
    padding: ".7rem 1rem"
  button-secondary:
    rounded: "{rounded.action}"
    padding: ".7rem 1rem"
  chip:
    rounded: "{rounded.chip}"
    padding: ".4rem .7rem"
  navigation:
    rounded: "{rounded.control}"
    padding: ".7rem 1rem"
  project-entry:
    padding: "1.75rem 0"
  education-card:
    rounded: "{rounded.control}"
    padding: "1.5rem"
---

# Design System: Vijayasankar Ravindran Portfolio

## Overview

**Creative North Star: "Subtle professional portfolio"**

Present the person's name, role, experience, projects, skills, and contact information with calm typography and factual language. This documents the implemented Astro portfolio and the user's explicit portfolio direction: "remove all fancy taglines" and "build a subtle portfolio website."

The blog presents compact personal notes using the same DM Sans and neutral themes as the portfolio. Its modest headings, rounded tag links, small blue geometric asterisk, and inline author initials supply the user-requested minimal playfulness. Homepage previews retain the portfolio section rhythm.

**The Factual Copy Rule.** Use factual names, roles, section headings, descriptions, and action labels only. Do not add taglines, slogans, metaphors, motivational claims, or clever promotional headings. The hero heading is the person's name.

**Key Characteristics:**
- Factual copy and clear hierarchy.
- Shared neutral light and dark themes with restrained blue accents.
- Flat sections, thin dividers, and modest rounded controls.
- A large transparent portrait with a vivid animated coral, pink, violet, and teal gradient; this remains the portfolio's only playful area; the blog allows small, restrained accents.

## Colors

### Primary

The shared dark and light accent tokens provide restrained blue selection and keyboard-focus feedback. Primary actions use the current theme's ink and background colors, rather than a saturated promotional accent.

### Neutral

Each theme has background, surface, raised surface, ink, muted text, and line tokens. Match the current CSS custom properties in `src/styles/global.css`; the frontmatter records the shared light and dark theme palettes. Dark accent ink shares the dark background token; light accent ink has its own token. Preserve portrait transparency. Only the hero image may use a playful animated gradient in coral (#fb9567), pink (#e65baf), violet (#7775e8), and teal (#39bdc5). Use a clean lower crop aligned with the next section divider; do not fade the portrait itself.

**The Theme Pairing Rule.** Resolve colors through the existing theme variables. Keep text, controls, borders, and interaction states legible in both themes.

### Shared writing themes

Writing pages inherit the same background, surface, ink, muted text, line, and accent variables as the portfolio. The shared blue accent marks the small blog-heading asterisk, author initials, and hovered article-title underlines. Preserve identical theme pairings across homepage, archive, tags, and articles.

## Typography

On the portfolio, DM Sans with a sans-serif fallback supplies display, headings, body, navigation, and controls. DM Mono with a monospace fallback supplies the compact VNR brand; the current résumé metadata also declares DM Mono. Do not extend monospace styling to headings or prose. Blog headings, prose, metadata, and controls also use DM Sans; only code uses the system monospace stack.

Use the frontmatter's display role for the person's name, headline for factual section headings, and title for job and project names. Body paragraphs use relaxed leading; summary and project text stay around 62–75 characters wide. Smaller metadata ranges from .75rem to .95rem. Use sentence case and natural letter spacing for navigation and labels.

### Blog hierarchy

Use the blog-prefixed roles for the modest writing-page hierarchy: a page heading, article title, archive post title, and uniform article body. There is no enlarged lead paragraph. Archive descriptions remain 1rem with 1.8 leading. Compact tag-page post titles use 1.4rem. Prose subheadings use 1.6rem and 1.25rem (600, 1.4 leading); code uses the system monospace stack.

At 580px and below, page headings become 2.35rem, article titles 2rem, archive titles 1.4rem, and prose 1rem. Prose leading stays 1.85. Metadata, tags, and controls wrap naturally.

## Layout

The centered content shell is capped at 70rem (1120px) with the responsive gutter token. Sections use the section spacing token and a thin top divider. Desktop uses two-column hero, project, background, and contact layouts; experience entries pair a 180px date column with prose.

At 800px and below, the hero narrows its portrait column to 230px with a 365px image height and background/contact layouts stack. At 700px and below, navigation becomes a button-controlled dropdown beneath the sticky header. At 580px and below, the hero, experience rows, and project grid stack; the portrait follows the copy and actions, and résumé links fill available width. Preserve readable wrapping and usable controls on narrow screens.

### Blog layout

Writing archives and the Tags page use a centered shell capped at 52rem, with vertical padding scaling from 2.5rem to 4.5rem. The compact header places a factual title and small geometric accent above the description; a real post-count pill sits opposite tag and RSS links. Archive entries are open, single-column rows separated by thin rules, with 1.75rem vertical padding. Date and reading estimate precede the title and summary; tags and the explicit article link share a wrapping tail row.

Articles use a 42rem shell and a 38rem prose cap. A back link precedes the title. Initials, owner, date, and reading estimate sit inline below it, with tags beneath. A quiet header divider separates metadata from prose; no metadata sidebar is used. The footer aligns to the prose width. Small screens keep this single-column flow and wrap metadata and controls without overflow.

The homepage Blog section follows Background and precedes Contact. It reuses the portfolio section divider and spacing, lists up to three newest published posts, and pairs its heading with a bordered "View more" link to `/blog/`. Compact preview rows use the title role in DM Sans (1.25rem, 600, 1.4 leading), body summaries (1rem), and 1.75rem vertical spacing. The first row has no top rule or padding. The section heading stacks at 580px and below.

## Elevation & Depth

The interface is flat: no shadows or grain. The portfolio keeps decorative motion within the hero portrait; the blog heading adds one small hover rotation. Thin dividers and modest surface differences separate content. Reduced motion disables portrait animation, the blog hover rotation, and smooth scrolling.

## Shapes

Use the frontmatter's modest corner radii for chips, actions, and controls. Project entries are open rows with top dividers rather than elevated tiles. Contact arrows use small circular outlines. Place the approved transparent portrait over a soft gradient that blends into the page. On the portfolio, do not add rings, dots, frames, badges, or taglines. The blog permits small rounded tag and count pills, a 38px author-initial circle, and a simple geometric asterisk; keep these factual or restrained. Keep the rest of the site restrained and factual. Retain the pants-excluding crop, enlarge the portrait by 12%, and align its clean lower edge with the next section divider. Keep the head fully visible. The desktop image area is up to 430px by 510px; mobile is up to 350px by 440px, centered beneath the copy. The gradient uses a 9-second alternating cycle with independently shifting color layers, gentle rotation, and scaling. Do not display a play/pause button, per the user’s explicit preference. Stop the loop when offscreen or the document is hidden, and show a static gradient for reduced motion.

## Components

### Buttons

Primary actions invert ink and background. Secondary actions use an outline. Both have a minimum height of 46px. Hover strengthens the outline or softens the primary fill; visible focus uses an offset outline. Labels describe the action, such as "View projects" and "Open résumé."

### Navigation

The sticky header uses an opaque theme background and bottom divider. Links use muted text, a subtle surface on hover, and inverted ink/background when active. Theme and mobile-menu controls are at least 44px square. Preserve menu expansion state, keyboard access, and theme-specific accessible labels.

### Chips

Skills are static text labels with thin borders, no decorative colors, and no implied interaction.

### Cards / Containers

Project entries use typography and dividers, with an underline and inverted arrow for linked entries on hover. The education card uses a thin outline and modest padding. Contact rows use plain labels, factual values, and outlined arrows. The résumé control carries a clear file type and new-tab note.

### Blog header, archive, and articles

The factual Blog title is paired with a 30px blue geometric asterisk (26px on mobile), drawn as an inline SVG stroke. Its resting rotation is 12 degrees; hovering the title rotates it to 57 degrees over 240ms with cubic-bezier(.16, 1, .3, 1). Reduced motion leaves it static. The header shows the existing description, actual published-post count in a rounded pill, and tag/RSS links. It has no invented tagline or publication year ornament.

Archive entries expose the original date, reading estimate, title, description, tags, and "Read article" action. Titles reveal a 2px accent underline on hover. Tag links use pill corners, a theme surface, thin border, muted text, and a minimum height of 36px; hover strengthens the border to the accent and text to ink. The article action ends in a small outlined circular SVG arrow that inverts on hover. Tags and read actions wrap beneath summaries. The Tags page retains `/categories/` and its anchors, using compact h3 article titles beneath h2 tag headings.

Article details use initials derived from the first letters of up to two real owner-name parts, in a 38px outlined circle beside the owner, original date, and reading estimate. Tags follow the details. There is no oversized first paragraph. The estimate counts whitespace-separated words at 200 words per minute, rounded up with a minimum of one minute. The article footer provides "All posts" and RSS links.

Retain inherited keyboard focus. Code, tables, and images stay within the reading column or scroll locally; code blocks use theme-aware syntax colors and inline code has a small 4px radius. Preserve Genesis verbatim, including its punctuation, and retain historical article URLs. Do not invent articles or rewrite historical posts during visual work.

Shared Astro chrome remains in Header, Footer, and BaseLayout; writing pages mark Blog as the current navigation area. Home, Work, Blog, and Contact stay available across surfaces. Blog points to `/#blog` on the homepage and `/blog/` on writing pages; Work and Contact point to homepage sections. Homepage scroll highlighting follows only menu-linked sections. Theme behavior and menu keyboard access remain consistent.

The homepage preview uses the same post component in compact mode with h3 titles and an explicit "View more" archive link. Article details render the metadata owner; only the default owner links to the portfolio background section. Display metadata tags together with legacy categories, without duplicates. Summaries use the supplied description or a plain-text excerpt of up to 180 characters. Dates and reading estimates remain factual.

Posts are authored as flat top-level `posts/*.md` files with YAML front matter: title and date are required for new posts; owner, tags, description, draft, and updatedDate are supported. Owner defaults to Vijayasankar Ravindran; legacy pubDate and categories remain accepted, and extra YAML is retained. Drafts are excluded and public lists sort newest first. These content rules support the rendered metadata without adding promotional copy.

## Do's and Don'ts

### Do:
- Do use the person's name, actual role, factual section headings, and explicit action labels.
- Do preserve each surface's light and dark theme pairings and visible keyboard focus.
- Do use DM Sans throughout writing pages and homepage previews, with uniform article prose and modest headings.
- Do keep blog playfulness to the small geometric accent, rounded tag links, and factual initials.
- Do use the same neutral themes and shared chrome throughout the site.
- Do keep the centered shell, responsive stacking, readable line lengths, and simple portrait treatment.

### Don't:
- Don't add fancy taglines, slogans, metaphors, promotional headings, or invented claims.
- Don't reintroduce marquees, stickers, oversized monograms, grain, rotated panels, or decorative gradients outside the approved portrait background.
- Don't replace factual project and experience content with marketing copy.
