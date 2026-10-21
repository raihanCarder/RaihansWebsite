# Proposal

## Why

The portfolio currently uses fragment URLs such as `/#school` and rewrites even the homepage to `/#info`. Visitors should be able to navigate, bookmark, share, and refresh a distinct URL for each page without a `#`.

## What Changes

- Replace custom hash navigation with React Router and canonical paths: `/`, `/experience`, `/education`, `/projects`, and `/contact`.
- Use `/` for the existing Info homepage and `/education` for the existing School page, preserving visible labels and page content.
- Convert all five existing root hash links to their corresponding clean paths using history replacement so old bookmarks continue to work.
- Remove fragments from application page URLs, preserve query strings during normalization, and send unknown page paths to `/` using history replacement.
- Preserve active navigation, page titles, heading focus, content scrolling, browser history, and mobile menu interactions.
- Configure Vercel to serve the application for direct page requests and refreshes while continuing to serve bundled assets and the resume correctly.

## Capabilities

### New Capabilities

- `page-routing`: Canonical page paths, navigation and history behavior, legacy fragment conversion, and direct route loading on the production host.

### Modified Capabilities

None. Existing profile-link and page-presentation requirements continue to apply unchanged.

## Impact

- Routing setup in `src/main.tsx` and `src/App.tsx`, and the shared layout/navigation in `src/components/workspace/PortfolioWorkspace.tsx`.
- A shared route definition module if needed to keep page paths and metadata consistent; existing page components and content are reused.
- `package.json` and `package-lock.json` gain a compatible React Router dependency.
- New root `vercel.json` routing configuration and README documentation for canonical routes and deployment behavior.
- Focused browser verification of navigation, legacy links, history, accessibility, and refreshes, plus the existing build and lint checks.
- Production target is the Vercel-hosted custom domain confirmed during exploration. The repository's existing `gh-pages` deploy script is not a supported clean-route deployment path in this change; GitHub Pages fallback work, hosting migration, publishing, and page redesign are out of scope.
