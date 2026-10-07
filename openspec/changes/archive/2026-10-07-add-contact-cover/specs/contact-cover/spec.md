# Spec Delta

## Purpose

Give the Contact page a personal photographic cover that fits the portfolio's existing banner layout while keeping contact information accessible.

## ADDED Requirements

### Requirement: Supplied Contact cover
The Contact page SHALL display the user-supplied nighttime Tower Bridge photograph as a cover banner above its heading, matching the site's existing cover presentation.

#### Scenario: Open Contact
- **WHEN** a visitor opens Contact
- **THEN** the supplied photograph appears in a banner above the contact heading and content
- **AND** the photo is served as a bundled site asset without requiring access to the original Downloads file

### Requirement: Responsive photographic framing
The banner SHALL fill the Contact content area's width without distorting the photograph or creating horizontal overflow. Tower Bridge SHALL remain recognizable at desktop and mobile widths.

#### Scenario: View on desktop
- **WHEN** Contact is viewed at a desktop viewport of 1280 pixels wide
- **THEN** the banner fills the page width, retains the image's proportions, and frames Tower Bridge rather than mostly empty sky

#### Scenario: View on mobile
- **WHEN** Contact is viewed at a mobile viewport of 390 pixels wide
- **THEN** the banner adapts to the page width with Tower Bridge recognizable and no horizontal overflow

### Requirement: Accessible cover and heading
The cover SHALL have a concise alternative description identifying Tower Bridge at night. The existing heading, subtitle, and contact content SHALL remain readable, with header spacing consistent with the other covered pages.

#### Scenario: Read the covered page
- **WHEN** a visitor views Contact or reads it with assistive technology
- **THEN** the cover has a descriptive text alternative
- **AND** the contact icon, heading, and subtitle are readable without unintended extra padding or overlap

### Requirement: Preserve contact navigation
Adding the cover SHALL preserve the existing contact copy, link order, icons, destinations, new-tab behavior, keyboard focus, and resume download. Other pages' banners SHALL retain their existing images and layout.

#### Scenario: Use the contact links
- **WHEN** a visitor uses Contact after the banner is added
- **THEN** the links remain Email, GitHub, LinkedIn, Devpost, Download Resume in that order
- **AND** keyboard navigation, external link behavior, and resume download continue to work

#### Scenario: View other pages
- **WHEN** a visitor opens Home, School, or Projects
- **THEN** their existing cover images and layout are unchanged
