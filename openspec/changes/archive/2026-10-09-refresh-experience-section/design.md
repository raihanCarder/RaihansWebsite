# Design

## Context

See `proposal.md` for motivation. The React/Vite site already has a shared `PageHeader` with `cover`, `coverAlt`, `coverPosition`, and `wide` props. Standard covers are 270px tall on desktop, 225px at the tablet breakpoint, and 185px on mobile. Experience currently has no cover, a body capped at 860px, and a timeline with 130px dates, a 28px rail, and the remaining space for cards. Desktop cards use 1rem padding, 68px logos, and 1.02rem role headings; mobile cards use 0.8rem padding and 52px logos.

The supplied JPEG at `/Users/raihancarder/Downloads/experienceBanner.JPG` is 1620 × 1080 and 340,948 bytes. The photograph has substantial sky above the hills and cattle. The only existing related cover spec is specific to Contact and must remain satisfied.

## Goals / Non-Goals

**Goals:** Reuse the existing covered-page structure, optimize a bundled photographic derivative, and enlarge Experience cards with styles scoped to that page. Resolve crop and compression choices through visual comparison at actual display sizes.

**Non-Goals:** Introduce an image service, image generation, a new shared header system, responsive image infrastructure, or a permanent testing framework. Do not edit the resume or remove CREATE mentions or assets outside the Experience data unless an import becomes unused.

## Decisions

### 1. Optimize the supplied photograph locally

During apply, create `src/assets/experience-banner.webp` using an available local encoder, starting near quality 85 and retaining the original 1620px width. Compare a few quality settings against the source at matching rendered sizes; aim for approximately 200 KiB or less, but treat visual quality as the priority and smaller-than-source size as the acceptance threshold. Strip unnecessary metadata and verify orientation and color appearance. If WebP tooling is unavailable or its output fails comparison, use an optimized JPEG with the same quality and size checks. Do not add a runtime dependency or modify the source photo.

Retaining dimensions provides detail for desktop rendering and dense mobile displays; aggressively shrinking pixel dimensions could create visible softness. Choose one validated derivative rather than bundling every candidate or the original.

### 2. Reuse the existing cover and spacing behavior

Import the derivative in `WorkspacePages.tsx` and pass it to Experience's `PageHeader` with a descriptive `coverAlt`. Start with `coverPosition="center 72%"` to emphasize the lower landscape; adjust the Experience-only crop at mobile widths if needed to keep a cow visible. Use existing cover heights and shade.

Change the Experience header-padding selectors at desktop and mobile to apply only to `.page-header:not(.has-cover) .page-header-inner`, mirroring Contact's existing approach. This allows shared covered-header spacing to take effect without affecting other pages. A separate banner component would duplicate existing behavior.

### 3. Use the site's wide content option and enlarge card internals

Set `wide` on Experience's header and add `page-width-wide` to its body. This reuses the established 1160px cap while preserving gutters. Keep the timeline date and rail structure and the existing responsive date-above-card layout.

Start desktop cards at 1.5rem padding, 88px logos, a 1.2rem role heading, and approximately 0.95rem description text. At mobile widths, start with 1rem padding, 64px logos, and approximately 1.1rem role headings. Adjust gaps as needed after viewing 390px and 320px layouts. Use natural card height and text wrapping instead of a fixed height. Scope rules to Experience to prevent changes to unrelated cards. Enlarging only padding would leave the desktop card constrained by the current narrow body.

### 4. Remove CREATE through the content data

Delete the CREATE UofT item from `experienceSectionContent.experiences` and the now-unused `createUoftLogo` import in `siteContent.ts`. Preserve Rocket's content and the timeline rendering logic. The final item already suppresses the connecting rail via the existing selector. Do not delete the logo file as unrelated asset cleanup.

## Risks / Trade-offs

- [Lossy compression can soften grass detail] → Compare source and candidate under identical desktop/mobile crops, increase quality if needed, and record actual bytes and dimensions. The approximate size target is advisory.
- [Cover cropping can hide cattle on narrow screens] → Start lower in the photograph and verify at desktop and mobile widths; use an Experience-only mobile position override if necessary.
- [Larger card internals can crowd narrow screens] → Preserve flexible text columns and the stacked mobile status layout; inspect at 390px and 320px without fixed card heights.
- [Header specificity can retain unwanted padding] → Scope both existing Experience padding rules to headers without covers and verify title/icon placement.
- [The original Downloads file may be moved before apply] → Check the recorded source path before encoding; if missing, obtain the supplied photograph again rather than substitute another image.

## Migration Plan

No data migration is required. Bundle the chosen image and ship the scoped component, content, and CSS edits together through the existing build workflow. Validate with `npm run build`, `npm run lint`, and browser inspection. Rollback consists of reverting this change's asset and code edits. Publishing is a separate action.
