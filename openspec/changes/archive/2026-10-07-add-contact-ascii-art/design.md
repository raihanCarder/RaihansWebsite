# Design

## Context

See `proposal.md` for motivation and `specs/contact-signature/spec.md` for behavior. Contact's current `.contact-note` section has a visible heading, `footer.note`, and a standalone location line. The user subsequently supplied a PNG of the exact artwork and requested transparency so the signature can scale to fit.

The prepared `src/assets/raihan-carder-ascii.png` is 1577 × 205 pixels and 16,496 bytes. Its background was removed through a user-authorized pixel conversion, keeping the original lettering geometry and anti-aliased edges. Empty padding was trimmed. The original `/Users/raihancarder/Downloads/ascii-art-text.png` remains intact.

## Goals / Non-Goals

**Goals:** Use the prepared transparent image, show the full artwork proportionally at desktop and mobile widths, and retain the description as readable text.

**Non-Goals:** Regenerate the artwork, render a scrolling text block, or change the cover, profile links, or copyright footer.

## Decisions

- Import the local PNG and render it as an `img` in Contact. This follows the user's supplied image choice and avoids the line-wrapping and mobile scrolling constraints of preformatted ASCII text.
- Use `alt="Raihan Carder"` and a visually hidden heading for the section's existing `aria-labelledby` target. The image is static and gets no `tabIndex`; a scroll container is unnecessary.
- Use scoped image styles with block display, width constrained to the content area, and `height: auto`. Do not use `object-fit: cover`, fixed image heights, or horizontal overflow. The entire design shrinks proportionally on mobile; its small strokes are inherently finer there, but the full name stays visible.
- Keep `{footer.note}` in a normal paragraph beneath the image. Remove the former context title row and location span. Keep the shared `Info` and `MapPin` imports because other pages still use them; remove only unused contact-location CSS.
- Add a visually hidden heading style because the current styles have no reusable equivalent. Leave the Contact cover and all shared layout rules intact.

## Risks / Trade-offs

- [Fine strokes become smaller on phones] → Review the complete scaled image at 390px while preserving the full design and readable description beneath it.
- [A black matte could remain around the lettering] → Confirm actual alpha transparency and inspect the image against the site's background; the prepared asset's alpha spans 0–255.
- [Removing the visible heading could leave an invalid section label] → Retain a valid visually hidden heading as the section's accessible name.

## Migration Plan

Use the existing build and deploy process. Rollback restores the former heading and location line and removes the signature image reference and scoped styles.
