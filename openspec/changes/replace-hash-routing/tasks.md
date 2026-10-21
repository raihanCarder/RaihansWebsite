# Tasks

## 1. Canonical routes and shared navigation

- [x] 1.1 Add a compatible React Router dependency and shared route metadata for `/`, `/experience`, `/education`, `/projects`, and `/contact`; verify package installation succeeds and the dependency resolves without React/Node compatibility errors.
- [x] 1.2 Mount `BrowserRouter`, register the existing page components as children of the workspace layout, and render them through `Outlet`; verify each canonical URL renders exactly one matching page and the existing workspace and analytics components remain mounted once.
- [x] 1.3 Replace identity/sidebar hash anchors with router links and derive active page metadata from the pathname, removing custom active-page/hash synchronization; verify every page link has a fragment-free destination, only the correct link is active, the root link returns home, and navigation does not reload the document.
- [x] 1.4 Use browser automation to check all five routes, identity navigation, Back/Forward, and new-tab link behavior; record the command or reproducible procedure and results, including that normal transitions push one entry and restore the correct URL, page, and title.
- [x] 1.5 Document the canonical route table in README, explicitly mapping the existing Info label to `/` and School label to `/education`; verify the documented paths match the registered routes and visible page labels remain unchanged.

## 2. Legacy compatibility and URL normalization

- [x] 2.1 Add the router normalization boundary described in design.md: convert recognized root fragments, strip other page fragments, preserve query strings, and replace unknown page paths with `/`; verify it computes a stable canonical URL before rendering the page tree and never bypasses router state with raw history mutations.
- [x] 2.2 Use browser automation to exercise all five old bookmarks, `/?source=bookmark#school`, `/?source=link#missing-page`, `/contact?source=link#school`, and `/missing-page?source=link#contact`; verify each expected spec destination, query preservation, empty fragments, and absence of redirect loops or duplicate Back entries, and record the results.
- [x] 2.3 Document legacy bookmark conversion and unknown-path fallback in README; verify the documented examples match the compatibility scenarios in the spec.

## 3. Page transition behavior

- [x] 3.1 Adapt title, main-content scroll reset, heading focus, and menu closure to resolved route transitions; retain active-page scroll/focus without adding history entries and preserve modified-click link behavior; verify all transitions use the existing main scroll container and cancel stale focus timers.
- [x] 3.2 Use browser automation at desktop and 390-pixel mobile widths to verify title, active styling, `aria-current`, focused heading, content scroll position, same-page reactivation, menu closure after navigation, Escape, backdrop dismissal, and Back/Forward behavior; record the results and check that no page content or cover layout changed.

## 4. Hosting fallback and deployment documentation

- [x] 4.1 Add root `vercel.json` with the documented Vite SPA rewrite to `/index.html`; verify valid JSON and the expected rewrite source/destination, keeping the current root asset base and leaving `cleanUrls` disabled.
- [ ] 4.2 Validate direct requests and refreshes for every canonical path and an unknown path using Vercel routing locally or an available Vercel preview; verify successful page document responses and correct rendered destinations. Record the environment and results; explicitly report any host-level verification unavailable before handoff, since Vite preview does not validate Vercel rewrites. Do not publish as part of this task.
- [x] 4.3 Verify generated JS/CSS, images, favicon, resume PDF response/download, external profile/email links, and Vercel analytics requests after a direct nested-route load; record response types and any browser/network errors so fallback HTML cannot silently replace an expected asset.
- [x] 4.4 Document Vercel's direct-link fallback and the unsupported clean-route behavior of the existing `gh-pages` deployment script in README; verify the documentation describes the observed production host without changing deployment targets or publishing the site.

## 5. Integration checks

- [x] 5.1 Run `npm run build`, `npm run lint`, and `git diff --check`; verify all pass and review the final diff for unintended content, styling, or external-link changes.
- [x] 5.2 Repeat the canonical navigation, legacy URL, and desktop/mobile transition smoke checks against the built app served with `npm run preview`; record results separately from Vercel routing verification and confirm no application page link generates a fragment.

## Workflow follow-up

- Review and release the router and hosting fallback together through the normal project workflow.
- After release, smoke-test canonical paths and old bookmarks on the custom domain; if rollback is needed, restore the previous application and hosting configuration together.
