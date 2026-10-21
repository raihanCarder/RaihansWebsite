# Verification

## Environment

- Node v22.16.0; installed React Router 7.18.4 (requires Node >=20 and React >=18), with React/React DOM 19.2.3.
- Existing local Playwright installation and cached Chromium; no browser test dependency added to the portfolio.
- Development server: `npm run dev -- --host 127.0.0.1 --port 4175`.
- Before implementation, `/private/tmp/portfolio-baseline.cjs` captured each page's article HTML, width, and height at 1280x900 and 390x900 into `/private/tmp/portfolio-baseline.json`.

## Canonical navigation

Command: `node /private/tmp/check-portfolio-routing.cjs` against the development server.

Passed at 1280px and 390px:

- All five navigation destinations, identity navigation, matching titles, heading focus, and exactly one active/current page link.
- Different-page navigation increments the router history index once; current-page navigation does not increment it.
- Browser Back/Forward restores the expected URL, page, and title.
- A document-scoped token and a marker on the sidebar survive navigation, confirming no full document reload or workspace remount.
- Modified clicks open both a different page and the active page in new tabs at canonical URLs.
- Each page's rendered article HTML and dimensions exactly match the original baseline at both viewport sizes.
- No uncaught browser errors.

The scripts and JSON reports are temporary local verification artifacts. The procedure above records their assertions for review; built-app checks and the host verification limitation are recorded below.

## Legacy compatibility

Command: `ROUTING_GROUP=compatibility node /private/tmp/check-portfolio-routing.cjs` against the development server.

Passed at 1280px and 390px for all five old root bookmarks and these additional cases:

| Input | Result |
| --- | --- |
| `/?source=bookmark#school` | `/education?source=bookmark` |
| `/?source=link#missing-page` | `/?source=link` |
| `/contact?source=link#school` | `/contact?source=link` |
| `/missing-page?source=link#contact` | `/?source=link` |

Each case checks title/page/focus, an empty fragment, no extra history entry during normalization, Back to a preceding Projects page, and Forward to the canonical result. No redirect loops or uncaught browser errors occurred.

## Page transitions

Command: `ROUTING_GROUP=transitions node /private/tmp/check-portfolio-routing.cjs` against the development server.

Passed at 1280px and 390px:

- Scroll Projects to 600px, reactivate Projects, and verify main-content scroll reaches zero, heading focus returns, and history index stays unchanged.
- Scroll again and navigate to School; verify scroll zero, focused heading, matching title, and active link.
- Back/Forward restores the matching page with its content scroll reset.
- On mobile, navigation closes the menu; reopening then pressing Escape or clicking the backdrop dismisses it; Forward while the menu is open also closes it.
- No uncaught browser errors.

## Production build and assets

Commands:

```sh
npm run build
npm run lint
git diff --check
openspec validate replace-hash-routing --strict
npm run preview -- --host 127.0.0.1 --port 4176
node /private/tmp/check-portfolio-routing.cjs http://127.0.0.1:4176 all
node /private/tmp/check-portfolio-routing.cjs http://127.0.0.1:4176 assets
```

All build, lint, whitespace, and OpenSpec validation checks passed. The final application diff leaves `WorkspacePages.tsx`, site content, assets, and CSS unchanged.

The production browser run repeated canonical navigation, legacy compatibility, and transition checks at 1280x900 and 390x900. All passed. The article markup and dimensions matched the original pages; bundled asset URL differences were normalized for the production markup comparison. No application page links contain fragments, and no uncaught browser exceptions occurred.

Direct loading and refresh of all five routes returned HTTP 200 and rendered the expected page on Vite preview. An unknown path returned the app document and normalized to `/`. All 19 distinct page image/script/style/favicon URLs returned HTTP 200 with their expected MIME types. The resume returned `application/pdf`, began with `%PDF-`, and completed a browser download. Contact's email and external profile destinations, new-tab behavior, and noreferrer protection passed.

The browser reported 404 responses for `/_vercel/insights/script.js` and `/_vercel/speed-insights/script.js`. Separate generic HTTP requests to those paths received Vite's HTML fallback with `text/html`, not executable analytics scripts. This local server does not supply Vercel analytics endpoints. Both existing analytics integrations remain in App once; their hosted responses still need checking on Vercel along with deployed refresh behavior.

Temporary reports:

- `/private/tmp/portfolio-routing-all-4176.json`
- `/private/tmp/portfolio-routing-assets-4176.json`
- `/private/tmp/portfolio-routing-1280.png`
- `/private/tmp/portfolio-routing-390.png`

## Vercel configuration and remaining host verification

`vercel.json` is valid JSON and its rewrite settings pass the routing portion of the current official schema fetched from `https://openapi.vercel.sh/vercel.json`. The rule is Vercel's documented Vite SPA fallback, `/(.*)` to `/index.html`; `cleanUrls` is not enabled. Full-schema meta-validation with the existing Ajv encountered unrelated draft-version inconsistencies in the downloaded function-trigger definitions, so only the actual routing settings were schema-validated.

Task 4.2 remains open: no Vercel CLI is installed on PATH or in the inspected npm execution cache, this checkout has no `.vercel/project.json`, and no preview containing this uncommitted change is available. Vite preview verifies the built app but does not execute Vercel's routing configuration. No project was linked and no deployment was created.

Before release, verify direct requests and refreshes for all five canonical paths and an unknown path using Vercel routing or a preview containing this change. Check that static assets, the resume, and both hosted analytics scripts return the expected content types. Mark task 4.2 complete only after that environment-specific verification succeeds.
