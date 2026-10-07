# Tasks

## 1. Replace the context section

- [x] 1.1 Import the prepared transparent `src/assets/raihan-carder-ascii.png` and render it in Contact's bottom signature section in `src/components/workspace/WorkspacePages.tsx`. Remove the visible "A little context" title row and standalone "Toronto, Ontario" span, keeping `{footer.note}` below the image and the footer below the section. Verify the image decodes with transparent background, matches the supplied lettering, and the removed labels are absent.
- [x] 1.2 Preserve a valid accessible section name through a visually hidden Raihan Carder heading and give the image `alt="Raihan Carder"`. Verify the accessibility tree identifies the image and section by name without art punctuation, and the static image adds no keyboard tab stop.
- [x] 1.3 Add Contact-specific responsive image styles in `src/App.css`, including the visually hidden heading style: display the image as a block, constrain it to the content width, and preserve its proportions with automatic height. Remove unused contact-location styles without removing shared icons used elsewhere. Inspect screenshots at 1280px and 390px: verify the full art fits without cropping, stretching, scrolling, or page overflow, and the description remains readable.

## 2. Integration verification

- [x] 2.1 Run `npm run build` and `npm run lint`; verify both pass, the transparent PNG is bundled in the production output, and no new runtime dependency was added.
- [x] 2.2 Inspect the final Contact page on desktop and mobile. Verify the cover and crop, heading, availability, link order and behavior, resume download, and copyright footer are preserved. Confirm other pages remain unchanged and record the checks in this task file.

Verification: Build and lint passed; production output includes the 16.50 KB PNG. Browser and screenshot checks at 1280px and 390px verified the entire transparent signature fits at 860 × 111.78px and 358 × 46.53px respectively, preserving its proportions with no page overflow. The description wraps normally, removed labels are absent, and the footer remains below the signature. The accessibility tree exposes the named section, heading, and image as Raihan Carder without art punctuation or added tab stops. Contact's cover crop remains 75% 60%; link order, Devpost destination and new-tab attributes, visible keyboard focus, and resume download passed. Home, School, and Projects header image sources, crop positions, and measurements match the baseline. No new runtime dependencies were added.
