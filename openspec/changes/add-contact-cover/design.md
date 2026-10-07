# Design

## Context

See `proposal.md` for motivation and `specs/contact-cover/spec.md` for behavior. `PageHeader` already supports `cover`, `coverAlt`, and `coverPosition`. Shared CSS crops cover images with `object-fit: cover`, uses banner heights of 270px on desktop, 225px at widths up to 820px, and 185px at widths up to 640px, and overlaps the page icon with the banner edge.

Contact currently has no cover. Its later `.contact-page .page-header-inner` rules add 5.5rem of desktop padding and 4rem on mobile; those rules have enough specificity to override the zero padding intended for covered headers.

## Goals / Non-Goals

**Goals:** Reuse the existing cover component, load the supplied image as a local asset, and scope spacing corrections to Contact.

**Non-Goals:** Introduce a full-page background, redesign shared banners, or change contact data and profile links.

## Decisions

- Copy `/Users/raihancarder/Downloads/londonbackground.jpeg` to `src/assets/londonbackground.jpeg` during apply and import it directly beside existing page imagery. Vite will include the asset in production. A remote URL or Downloads path would make the result dependent on an external or machine-specific source.
- Following the user's image-size request, resize the bundled JPEG to 2400 × 1800 and encode at quality 80. The result is 368,754 bytes, 56.4% smaller than the source; desktop and mobile review confirmed the bridge remains sharp at banner sizes. The Downloads original remains intact.
- Supply `coverAlt="Tower Bridge in London at night"` and reuse the current overlay and banner dimensions. This follows the existing cover-image accessibility pattern and avoids adding a new background system.
- Start with `coverPosition="75% 60%"` because the bridge sits on the right and below the center of the photograph. Tune this during desktop and mobile screenshot review; if one position cannot keep the landmark recognizable at both sizes, add only a Contact-specific responsive image-position rule. Do not stretch or modify the source photo.
- The final crop is `75% 60%`, following the user's preference for the middle of the photograph. It prioritizes the illuminated bridge deck and river reflections over the dark sky, accepting partial cropping of the tower tops on desktop.
- Restrict Contact's existing extra header padding to `.page-header:not(.has-cover) .page-header-inner`, including its mobile rule, so covered headers use the shared spacing. This preserves the fallback layout if the cover is later absent. Changing shared covered-header rules would unnecessarily affect other pages.

## Risks / Trade-offs

- [The photo contains a large dark sky area and an off-center subject] → Review desktop and mobile crops and adjust the focal position until the bridge is recognizable.
- [Contact's current padding overrides covered-header spacing] → Scope the desktop and mobile padding rules to headers without a cover and visually inspect icon/title spacing.
- [The original source may be moved before apply] → Copy it into the repository as the first implementation step and verify it is the supplied image; request the missing attachment if it is unavailable.

## Migration Plan

Deploy through the existing build process. No data migration is needed. Rollback removes the Contact cover props and imported asset and restores its prior padding selectors.
