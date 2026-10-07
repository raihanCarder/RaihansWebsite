# Tasks

## 1. Add the Contact banner

- [x] 1.1 Copy `/Users/raihancarder/Downloads/londonbackground.jpeg` to `src/assets/londonbackground.jpeg`. Verify the copied asset matches the supplied photograph and decodes correctly; preserve the original file.
- [x] 1.2 Import the asset in `src/components/workspace/WorkspacePages.tsx` and set Contact's `PageHeader` cover, descriptive alt text, and initial focal position of `75% 60%`. Verify the Contact banner loads above the heading with the expected alt text and no remote image dependency.
- [x] 1.3 Scope Contact's desktop and mobile header-padding rules in `src/App.css` to headers without a cover. Inspect Contact at 1280px and 390px widths to verify the existing icon overlap, heading spacing, and banner heights; adjust the Contact crop as needed to keep Tower Bridge recognizable without distortion or horizontal overflow.

## 2. Integration verification

- [x] 2.1 Run `npm run build` and `npm run lint` and verify both pass. Confirm the production output contains the new image and does not reference the original Downloads location.
- [x] 2.2 Review Contact on desktop and mobile, including keyboard focus, existing copy, link order and destinations, new-tab behavior, and resume download. Confirm the Home, School, and Projects cover images and layouts are unchanged; record the visual and interaction check results.

Image optimization: At the user's request, the bundled JPEG was resized to 2400 × 1800 and compressed at quality 80, reducing it from 846,465 to 368,754 bytes (56.4%). The original photo was preserved. Build and desktop/mobile browser checks passed again after optimization.

Verification: Build and lint passed. Browser checks at 1280px and 390px confirmed image decoding, descriptive alt text, 270px/185px banner heights, zero extra header padding, the shared -31px icon overlap, and no horizontal overflow. Following the user's crop correction, screenshots and browser checks were repeated for the final 75% 60% crop, which emphasizes the bridge deck and river reflections with less dark sky. Contact link order, Devpost destination and external-link attributes, visible keyboard focus, and resume downloads passed. Home, School, and Projects header measurements, image sources, and crop positions matched their pre-change values. Production output includes the bundled JPEG and contains no Downloads path.
