# Tasks

Design note: `design.md` is deliberately omitted under the schema's conditional guidance. This change extends existing data arrays and the shared link renderer without new architecture, dependencies, or migration complexity. Contact placement follows the existing Email-first ordering, with Devpost after LinkedIn.

## 1. Add profile links and icon

- [x] 1.1 Add `{ label: "Devpost", href: "https://devpost.com/raihancarder" }` after LinkedIn in both `introSectionContent.links` and `footerSectionContent.socials` in `src/data/siteContent.ts`, preserving pre-existing edits. Verify the homepage order is Download Resume, GitHub, LinkedIn, Devpost, Email and the contact order is Email, GitHub, LinkedIn, Devpost, Download Resume, with exactly one Devpost profile link per section.
- [x] 1.2 Add a recognizable Devpost logo SVG to the shared `renderLinkIcon` path in `src/components/workspace/WorkspacePages.tsx`, using a verified logo source and recording attribution if required. Keep it local, use `currentColor`, and reuse the existing 16px SVG sizing and decorative wrapper. Verify both rows display the logo and retain Devpost as their accessible name without introducing a runtime dependency.

## 2. Integration checks

- [x] 2.1 Run `npm run build` and `npm run lint`; verify they pass, or distinguish any pre-existing failures from issues introduced by this change.
- [x] 2.2 Inspect both pages at desktop and mobile widths. Verify the specified ordering, readable label, aligned icon, keyboard focus, exact destination, `target="_blank"`, and `rel="noreferrer"`; confirm existing links and resume download behavior remain intact.
