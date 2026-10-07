# Spec Delta

## Purpose

Help portfolio visitors discover Raihan's external profiles through clearly labeled, recognizable links on the homepage and contact page.

## ADDED Requirements

### Requirement: Homepage Devpost placement
The homepage's Find me online section SHALL contain exactly one Devpost link immediately after LinkedIn and immediately before Email, preserving the other links and their relative order.

#### Scenario: View homepage links
- **WHEN** a visitor views Find me online on the homepage
- **THEN** the links appear in this order: Download Resume, GitHub, LinkedIn, Devpost, Email

### Requirement: Contact page Devpost placement
The contact page's Links section SHALL contain exactly one Devpost link after LinkedIn, preserving Email first and Download Resume last.

#### Scenario: View contact links
- **WHEN** a visitor views the contact page's Links section
- **THEN** the links appear in this order: Email, GitHub, LinkedIn, Devpost, Download Resume

### Requirement: Devpost destination and navigation
Both profile links SHALL use the visible label Devpost and the destination `https://devpost.com/raihancarder`. They SHALL open in a new tab with the same noreferrer protection as the existing external profile links.

#### Scenario: Follow either Devpost profile link
- **WHEN** a visitor activates Devpost from the homepage or contact page
- **THEN** the browser opens `https://devpost.com/raihancarder` in a new tab without sending a referrer

### Requirement: Devpost icon presentation
Both Devpost link rows SHALL display the recognizable Devpost logo at the same size and with the same color treatment as neighboring icons. The icon SHALL be decorative for assistive technology, leaving the visible Devpost label as the link's accessible name.

#### Scenario: View the Devpost icon at different viewport sizes
- **WHEN** either page is displayed at desktop or mobile width
- **THEN** the Devpost logo is visible, aligned with neighboring icons, and does not overlap the link text

#### Scenario: Navigate with assistive technology
- **WHEN** a visitor focuses either Devpost link using a keyboard and screen reader
- **THEN** it is announced as Devpost without a redundant icon label and retains the existing visible focus treatment
