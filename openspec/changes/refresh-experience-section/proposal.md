# Proposal

## Why

The Experience page needs the supplied landscape photograph to match the site's other covered pages and larger cards to give the remaining role more prominence. The user also wants the CREATE UofT experience removed and the banner optimized without visibly degrading its quality.

## What Changes

- Add the supplied countryside photograph as the Experience header banner, with responsive framing that emphasizes the hills and cattle.
- Bundle an optimized image smaller than the original 340,948-byte JPEG while preserving its visual quality at the displayed banner sizes.
- Remove the CREATE UofT Tech Associate entry from the Experience timeline.
- Enlarge experience cards through a wider desktop content area, increased padding, larger logos, and more readable typography; keep the mobile layout usable.

## Capabilities

### New Capabilities

- `experience-presentation`: Experience page cover, optimized imagery, displayed roles, and responsive card presentation.

### Modified Capabilities

None. Existing capabilities cover Contact and profile links rather than Experience.

## Impact

- `src/components/workspace/WorkspacePages.tsx`: reuse `PageHeader` cover support and widen the Experience content area.
- `src/App.css`: scope covered-header spacing and enlarged card styles to Experience, including mobile behavior.
- `src/data/siteContent.ts`: remove the CREATE UofT entry and its unused logo import.
- `src/assets/`: add a compressed derivative of `/Users/raihancarder/Downloads/experienceBanner.JPG` (1620 × 1080).
- No runtime dependencies or API changes expected. Other sections and resume content are outside this change.
