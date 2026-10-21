# Spec Delta

## Purpose

Give portfolio visitors distinct, shareable page URLs without fragments while preserving navigation behavior, existing bookmarks, and direct access on the production host.

## ADDED Requirements

### Requirement: Canonical page URLs

The portfolio SHALL serve the existing Info homepage at `/`, Experience at `/experience`, School at `/education`, Projects at `/projects`, and Contact at `/contact`. Page navigation and the identity link SHALL use these paths without fragments. Page labels and content SHALL remain unchanged.

#### Scenario: Navigate through every page
- **WHEN** a visitor activates each page link on desktop or mobile
- **THEN** the matching page appears at its canonical path with an empty URL fragment
- **AND** each navigation link's destination uses its canonical path

#### Scenario: Return home using the identity link
- **WHEN** a visitor activates the Raihan Carder identity link from any page
- **THEN** the Info homepage appears at `/` without a fragment

### Requirement: Legacy bookmark conversion

Opening a root URL with `#info`, `#experience`, `#school`, `#projects`, or `#contact` SHALL replace the current history entry with the matching canonical page URL and remove the fragment. Conversion SHALL preserve the query string and SHALL NOT create an additional Back destination.

#### Scenario: Open each existing bookmark
- **WHEN** a visitor opens `/#info`, `/#experience`, `/#school`, `/#projects`, or `/#contact`
- **THEN** the URL becomes `/`, `/experience`, `/education`, `/projects`, or `/contact`, respectively
- **AND** the corresponding page is displayed without a fragment

#### Scenario: Preserve query parameters while converting
- **WHEN** a visitor opens `/?source=bookmark#school`
- **THEN** the URL becomes `/education?source=bookmark`
- **AND** Back does not return to `/?source=bookmark#school`

### Requirement: Invalid page URL normalization

Unknown page paths SHALL resolve to `/` by replacing the current history entry. A fragment on a canonical non-root path SHALL be removed without changing that page; an unrecognized root fragment SHALL be removed while showing the homepage. These normalizations SHALL preserve query strings and SHALL NOT loop.

#### Scenario: Open an unknown path
- **WHEN** a visitor opens `/missing-page?source=link#contact`
- **THEN** the homepage appears at `/?source=link` without a fragment

#### Scenario: Open an unrecognized root fragment
- **WHEN** a visitor opens `/?source=link#missing-page`
- **THEN** the homepage appears at `/?source=link`

#### Scenario: Preserve an explicit page path
- **WHEN** a visitor opens `/contact?source=link#school`
- **THEN** Contact appears at `/contact?source=link` without a fragment

### Requirement: Browser history and standard link behavior

Navigation to a different portfolio page SHALL add one history entry without a full document reload. Back and Forward SHALL restore the matching page, URL, active navigation, and title without fragments. Page links SHALL support copying destinations and opening a page in a new tab through normal browser interactions.

#### Scenario: Navigate backward and forward
- **WHEN** a visitor moves from `/` to `/education` to `/projects`, then uses Back and Forward
- **THEN** Back displays School at `/education` and Forward displays Projects at `/projects`
- **AND** each restored page has the matching active link and document title

#### Scenario: Open a page in a new tab
- **WHEN** a visitor opens the School navigation link in a new tab using browser controls
- **THEN** the new tab loads School at `/education` without a fragment

### Requirement: Accessible and responsive page transitions

Route transitions SHALL preserve the existing title pattern `<page label> | Raihan Carder`, active-link styling and `aria-current="page"`, reset the content scroll area to the top, focus the page heading, and close mobile navigation. Reactivating the current page SHALL scroll to its heading without adding a history entry. Escape and backdrop dismissal SHALL continue to close mobile navigation.

#### Scenario: Navigate after scrolling
- **WHEN** a visitor scrolls the content area and navigates to another page
- **THEN** the new page starts at the top with its main heading focused
- **AND** its title, active styling, and current-page announcement match that page

#### Scenario: Navigate on mobile
- **WHEN** a visitor opens mobile navigation and chooses Contact
- **THEN** Contact appears at `/contact` and the menu and backdrop close
- **AND** mobile navigation can still be opened and dismissed using Escape or the backdrop

#### Scenario: Reactivate the current page
- **WHEN** a visitor selects the currently active page after scrolling
- **THEN** the content returns to the heading and the heading receives focus
- **AND** the URL remains canonical without an additional history entry

### Requirement: Production direct access

The Vercel deployment SHALL serve the application document successfully for direct requests and refreshes at every canonical page path, allowing the requested page to render without a redirect to the homepage or a host 404. Existing bundled images, scripts, styles, favicon, resume download, and external links SHALL continue to work.

#### Scenario: Open and refresh each route
- **WHEN** a visitor opens or refreshes `/`, `/experience`, `/education`, `/projects`, or `/contact` on the Vercel deployment
- **THEN** the document request succeeds and the corresponding page renders at that path without a fragment

#### Scenario: Fetch assets from a direct route
- **WHEN** a visitor opens `/education` directly and subsequently visits Contact and downloads the resume
- **THEN** scripts, styles, cover images, and the favicon load as their expected file types
- **AND** the resume response is the PDF rather than the application document
- **AND** existing external profile and email links retain their destinations and behavior
