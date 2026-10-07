# Proposal

## Why

The Contact page currently has no cover photo. The supplied nighttime London photograph will give it a personal visual identity that fits the portfolio's existing cover banners.

## What Changes

- Add the supplied Tower Bridge photograph as a cover banner at the top of Contact, as confirmed by the user.
- Crop the photo responsively without stretching it, keeping Tower Bridge recognizable on desktop and mobile.
- Match the existing cover layout and transition into the contact heading and content.
- Retain the contact copy, link order, icons, destinations, keyboard behavior, and resume download.

## Capabilities

### New Capabilities

- `contact-cover`: The Contact page's photographic cover banner, responsive framing, and accessible presentation.

### Modified Capabilities

None. The existing `profile-links` requirements remain unchanged.

## Impact

- Add the user-supplied `/Users/raihancarder/Downloads/londonbackground.jpeg` to `src/assets/londonbackground.jpeg` during implementation; the source is a 4032 × 3024 JPEG of approximately 827 KB.
- Import the local photo in `src/components/workspace/WorkspacePages.tsx` and pass it to Contact's existing `PageHeader` cover props.
- Adjust Contact's header spacing in `src/App.css` so its current desktop and mobile padding does not override the shared covered-header layout.
- No new dependencies or remote image requests are required.
