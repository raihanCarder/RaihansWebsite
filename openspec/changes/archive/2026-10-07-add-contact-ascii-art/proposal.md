# Proposal

## Why

The user wants the bottom of Contact to feel more personal through the supplied ASCII name art. It will replace the existing context heading and separate location line while retaining the portfolio description.

## What Changes

- Replace the Contact page's visible "A little context" heading and its icon with the supplied seven-line ASCII art.
- Remove the standalone "Toronto, Ontario" line and its location icon from that section.
- Keep the supplied description directly below the art: "Toronto-based computer science student designing polished software experiences across full-stack, AI, and mobile."
- Use the transparent PNG prepared from the user's supplied image, preserving the lettering and spacing with accessible plain-text identification as Raihan Carder.
- Scale the complete image proportionally to fit desktop and mobile content widths without cropping or horizontal scrolling.
- Keep the signature section beneath the contact links and above the existing copyright footer.

## Capabilities

### New Capabilities

- `contact-signature`: The Contact page's ASCII name signature, accompanying description, responsive presentation, and accessible identification.

### Modified Capabilities

None. Existing profile-link behavior remains unchanged.

## Impact

- Update the Contact note section in `src/components/workspace/WorkspacePages.tsx` using the local transparent `src/assets/raihan-carder-ascii.png` image.
- Add scoped signature styles in `src/App.css`; remove obsolete contact-location styles if unused elsewhere.
- Keep `footer.note` as the source of the description in `src/data/siteContent.ts`.
- The completed `add-contact-cover` change is compatible and remains a separate change; preserve its photo and crop.
- The transparent PNG is already prepared (1577 × 205 pixels, 16,496 bytes). No new runtime dependencies are required.
