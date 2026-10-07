# Proposal

## Why

Visitors cannot currently reach Raihan's Devpost profile from the homepage or contact links. Adding it alongside the existing profiles makes his hackathon work easier to discover.

## What Changes

- Add a Devpost link to `https://devpost.com/raihancarder` in the homepage's Find me online section, immediately after LinkedIn and before Email.
- Add the same link to the contact page's Links section, after LinkedIn while retaining Email first and the resume last.
- Display the Devpost logo in both link rows, matching the existing icon sizing and color treatment.
- Preserve the existing external-link behavior: open in a new tab with `rel="noreferrer"`.

## Capabilities

### New Capabilities

- `profile-links`: Discoverable external profile links on the homepage and contact page, including Devpost placement, destination, and icon presentation.

### Modified Capabilities

None. The project currently has no main specs.

## Impact

- Update the homepage and footer social link arrays in `src/data/siteContent.ts`.
- Extend the shared link icon renderer in `src/components/workspace/WorkspacePages.tsx` with a local Devpost SVG.
- No new runtime dependencies, APIs, or deployment changes are expected.
- Sidebar links and project-specific Devpost links are outside this change's scope.
