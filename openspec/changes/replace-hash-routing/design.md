# Design

## Context

See `proposal.md` for motivation and `specs/page-routing/spec.md` for the behavior contract. This design is warranted by a new routing dependency and changes spanning application composition, layout, URL compatibility, and hosting.

`PortfolioWorkspace.tsx` currently owns page state, a `hashchange` listener, hash links, title/focus/scroll effects, and conditional page rendering. `WorkspacePages.tsx` already exports all five page components, whose headings accept programmatic focus. The scroll container is the main content element, not the browser window. React 19 and Vite are already installed; there is no router or checked-in browser test harness.

The live custom domain returned `server: Vercel` during exploration. Vite uses `base: "/"`, and no `vercel.json` exists. An older `gh-pages` script remains in `package.json`; it does not establish the production host. Existing specifications cover content, presentation, and external links, with no conflicting URL requirements.

## Goals / Non-Goals

**Goals:** Make the router location the source of truth, keep the shared workspace mounted across ordinary transitions, and apply compatibility normalization before rendering a page. Keep route metadata consistent with the sidebar, topbar, and title.

**Non-Goals:** Server rendering, framework migration, route loaders, page redesign, renaming visible Info/School labels, adding alternate `/home` or `/school` URLs, or implementing a GitHub Pages fallback. Publishing is a separate operation.

## Decisions

### 1. Use a declarative browser router with a shared layout

Add a React Router release compatible with the installed React and local Node versions. Mount `BrowserRouter` around the application in `src/main.tsx`. Define the page routes in `src/App.tsx`, nesting the existing page components beneath the shared `PortfolioWorkspace` layout. Render the matched child with `Outlet` inside the existing main content element. Keep analytics and speed insights mounted once.

Move the page identifiers, canonical paths, labels, and icons into a small shared route metadata module such as `src/data/pageRoutes.ts`. Reuse it for route registration and navigation where practical. Derive the active page from the router pathname; remove `getPageFromHash`, the separate active-page state, and the custom `hashchange` synchronization.

Use `Link` for the identity and `NavLink` for page navigation, with exact matching for the root link. Retain the existing active CSS class. Normal navigation pushes one history entry; clicking the active page performs its existing scroll/focus action without pushing an entry. Intercept only ordinary unmodified same-tab clicks for this special case, preserving modified clicks and browser link controls.

**Alternatives:** A custom History API router duplicates location/history synchronization and link behavior. `HashRouter` retains the problem. A framework/data router adds mechanisms that these static pages do not need. The declarative layout and navigation approach follows the [React Router routing guide](https://reactrouter.com/start/declarative/routing) and [navigation guide](https://reactrouter.com/start/declarative/navigating).

### 2. Normalize compatibility URLs through replacement navigation

A normalization boundary inside the router reads the current pathname, query, and fragment before rendering the route tree. It computes one canonical target and uses replacement navigation only when the URL differs. Do not mutate browser history behind an already mounted router.

Apply these rules in order:

1. For root paths with a recognized legacy fragment, map `info` to `/`, `experience` to `/experience`, `school` to `/education`, `projects` to `/projects`, and `contact` to `/contact`.
2. For canonical paths, retain the path and remove any fragment. A non-root path takes precedence over a legacy-looking fragment.
3. For unknown paths, select `/` and remove any fragment. For root with an unknown fragment, retain `/` and remove the fragment.
4. Carry the original query string into the target without interpreting it. Once the target equals the current URL, render normally.

This keeps old bookmarks useful without introducing intermediate Back destinations or redirect loops. No application navigation will generate fragments. Server redirects alone cannot handle legacy fragments because fragments are not sent in HTTP requests. Dropping legacy support would unnecessarily break existing shared links.

### 3. Preserve transitions using the existing content container

Drive the title, scroll reset, heading focus, and menu closure from the resolved page identity so client navigation and browser Back/Forward receive the same treatment. Reuse the content ref and cancellable focus scheduling after the routed heading mounts. Keep same-page smooth scrolling and Escape/backdrop behavior. Retain external anchors and download links rather than passing them through the page router.

Using only window scroll restoration would miss the workspace's independent scroll area. Re-mounting the entire workspace for every page would discard useful layout state and complicate menu behavior.

### 4. Deliver the application document on Vercel page requests

Add root `vercel.json` with the SPA rewrite from `/(.*)` to `/index.html`, following [Vercel's Vite deep-linking instructions](https://vercel.com/docs/frameworks/frontend/vite#using-vite-to-make-spas). Keep the current Vite build and root asset base; do not enable `cleanUrls` as part of this change. Verify that existing static files and Vercel analytics endpoints continue to resolve correctly.

Document the canonical paths, Vercel fallback, and GitHub Pages limitation in README. A React-only change cannot make a direct `/education` request reach the application on a static host. A custom 404 workaround would solve a separate host's constraints and is unnecessary for the observed production target.

## Risks / Trade-offs

- **Development fallback can mask production 404s:** Verify direct requests, refreshes, response types, and unknown paths against Vercel routing before release. Vite preview alone does not prove `vercel.json` behavior.
- **URL and UI state can drift during normalization:** Resolve compatibility targets before the page tree renders and derive all active state from the normalized location.
- **Broad fallback can hide asset failures:** Verify successful requests and content types for generated JS/CSS, images, favicon, and the PDF; check browser errors and analytics requests.
- **Focus or scroll can target the previous page:** Run effects after the routed content commits, cancel stale focus timers, and test actual heading focus and main-container scroll position.
- **Unknown URLs show the homepage:** This preserves the existing fallback intent; a dedicated not-found page is outside this change.
- **GitHub Pages lacks the proposed Vercel configuration:** Document that `npm run deploy` does not provide this clean-route hosting contract.

## Migration Plan

Implement the router and hosting fallback in the same change. Run build/lint and focused browser checks against the built app. Validate the Vercel configuration locally where possible; verify on a Vercel preview when one is available through the normal review workflow. Record any unavailable host-level verification explicitly rather than treating Vite fallback as equivalent. Do not publish as part of implementation unless separately authorized.

After release, smoke-test each canonical path and legacy root bookmark on the custom domain. For rollback, restore the prior application bundle and hosting configuration together; old fragment bookmarks will still work, while newly shared clean URLs would no longer be supported by the prior implementation.
