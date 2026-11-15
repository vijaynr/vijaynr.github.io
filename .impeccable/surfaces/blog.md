# Blog: compact personal notes

Mode: Read. Targets: `/blog/`, `/blog/[slug]/`, `/categories/`; homepage previews
retain the portfolio section layout.

## Direction and authority

The user rejected the formal journal and explicitly asked for a style that is
"a little playful, and minimal." The shared portfolio theme and functional
integration remain pinned. This supersedes the earlier Newsreader treatment.

This is an existing-surface revision using the portfolio's fonts and colors.
The direction seed ab82316e ran in this revision; the user's precise minimal,
playful, integrated brief overrides incompatible catalog effects. No replacement
palette, illustrations, decorative textures, or photo assets are introduced.
Execution is code-led in the existing Astro codebase.

## First viewport

A modest Blog heading and one small blue geometric asterisk sit above the
existing description. A real post-count pill and tag/RSS links finish the header.
The archive is a centered 52rem column of open rows: date and reading estimate,
article title, short description, then rounded tag links and Read article.
Use only the actual published posts. No fabricated content fills empty space.

## Reading and interaction

Articles use a 42rem shell, with a 38rem prose cap. A small back link precedes a
2.5rem title. Author initials are derived from the real owner, beside the owner,
publication date, and reading estimate. Tags follow; prose stays uniform in size,
with no oversized lead or metadata sidebar. Body is DM Sans at 1.0625rem/1.85,
1rem on mobile. Keep original Markdown unchanged.

The small heading asterisk rotates only on hover, as the single authored detail.
Reduced motion removes that rotation. Tags and reading links retain visible
hover and keyboard focus feedback. There are no automatic animation loops.

## Responsive and preserved behavior

Use 2.35rem page headings and 2rem article titles on small screens. Metadata,
tags, and controls wrap without overflow. Preserve theme persistence, mobile
menu keyboard behavior, exact old URLs, RSS, homepage scroll highlighting, and
the flat `posts/*.md` authoring workflow.
