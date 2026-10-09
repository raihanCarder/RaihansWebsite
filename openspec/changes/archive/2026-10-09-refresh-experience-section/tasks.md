# Tasks

## 1. Banner asset and header

- [x] 1.1 Encode an optimized derivative of `/Users/raihancarder/Downloads/experienceBanner.JPG` into `src/assets/`, preferably WebP at the original dimensions; verify the selected file is below 340,948 bytes and record format, dimensions, and size reduction.
- [x] 1.2 Wire the asset into Experience's existing `PageHeader` with descriptive alt text and landscape-focused positioning, and scope desktop/mobile header-padding rules to headers without covers; verify the banner loads and heading/icon spacing matches other covered pages at 1280px and 390px.
- [x] 1.3 Compare source and optimized images at identical rendered desktop/mobile sizes and crops, adjusting compression or Experience-only crop positioning as needed; verify recognizable hills/cattle, no visible quality degradation, no stretching, and no horizontal overflow.

## 2. Experience content and larger cards

- [x] 2.1 Remove the CREATE UofT experience item and unused logo import from `siteContent.ts`; verify Experience shows only the existing Rocket role with its period, current status, description, and logo preserved.
- [x] 2.2 Enable the existing wide layout for Experience's header and body and enlarge desktop card padding, logos, and typography with scoped styles; compare before/after at 1440px and verify increased card width and readable date/status alignment.
- [x] 2.3 Adjust the mobile card grid, padding, logos, and typography for the enlarged presentation; compare before/after at 390px and inspect at 320px to verify readable content without clipping or horizontal scrolling.

## 3. Integration checks

- [x] 3.1 Run `npm run build` and `npm run lint`; verify both pass and the bundled banner loads in the built site.
- [x] 3.2 Navigate between Experience, Home, School, Projects, and Contact at desktop and mobile widths; verify Experience meets the spec and other pages retain their covers and layout, then record the visual verification and final image metrics in the completion report.

## Verification notes

- Selected WebP quality 90 at 1620 × 1080: 252,650 bytes versus 340,948 bytes for the supplied JPEG, a 25.9% reduction. Side-by-side comparisons at matching desktop and mobile banner sizes showed no noticeable degradation; hills and cattle remain recognizable.
- Desktop at 1440px: card width increased from 676px to 936px, padding from 16px to 24px, logo outer size from 68px to 88px, and role text from 16.32px to 19.2px.
- Mobile: padding increased from 12.8px to 16px, logo outer size from 52px to 64px, and role text from 16.32px to 17.6px.
- Browser checks passed at 1440, 1280, 390, and 320px on development and production previews. The bundled image decoded successfully, CREATE was absent, Rocket's details remained intact, and no card clipping or horizontal overflow occurred.
- Compared Home, School, Projects, and Contact with captured baseline measurements at all four widths: their cover sources, positioning, header spacing, and body dimensions were unchanged.
- `npm run build`, `npm run lint`, and `openspec validate refresh-experience-section --strict` passed.
