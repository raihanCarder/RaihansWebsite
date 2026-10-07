# contact-signature Specification

## Purpose

Present Raihan's identity through the supplied ASCII signature at the bottom of Contact, paired with a readable portfolio description.

## Requirements

### Requirement: ASCII signature replaces context labels
The Contact page SHALL show the user-supplied seven-line ASCII name art beneath its links and above its copyright footer. The visible "A little context" heading, associated information icon, and standalone "Toronto, Ontario" line with its location icon SHALL be removed from that section.

#### Scenario: View the bottom of Contact
- **WHEN** a visitor scrolls below the contact links
- **THEN** the supplied ASCII signature is visible before the copyright footer
- **AND** the former context heading and standalone location line are absent

### Requirement: Retain the portfolio description
The signature section SHALL display "Toronto-based computer science student designing polished software experiences across full-stack, AI, and mobile." beneath the ASCII art as ordinary readable text.

#### Scenario: Read the signature description
- **WHEN** a visitor views the ASCII signature
- **THEN** the existing description appears beneath it and wraps naturally at narrow widths

### Requirement: Preserve the art across viewport sizes
The art SHALL use the supplied design on a genuinely transparent background. It SHALL preserve all seven rows and their spacing, scaling proportionally to fit desktop and mobile content widths without cropping, stretching, or horizontal scrolling.

#### Scenario: View at desktop width
- **WHEN** Contact is viewed at 1280 pixels wide
- **THEN** the full art fits the content width with its character alignment intact

#### Scenario: View at mobile width
- **WHEN** Contact is viewed at 390 pixels wide
- **THEN** the seven art rows retain their shape
- **AND** the entire image fits within the content width without horizontal scrolling or page overflow

### Requirement: Accessible signature identification
Assistive technology SHALL identify the signature as "Raihan Carder" without reading each art character. The signature SHALL NOT add unnecessary keyboard tab stops.

#### Scenario: Read with assistive technology
- **WHEN** a visitor reads the signature section using a screen reader
- **THEN** the name Raihan Carder and the description are available as readable text
- **AND** the punctuation forming the art is excluded from speech

#### Scenario: Navigate with the keyboard
- **WHEN** a visitor tabs through Contact
- **THEN** the static signature image does not introduce an additional tab stop

### Requirement: Preserve the surrounding Contact page
The signature SHALL preserve Contact's cover image and crop, main heading, availability text, link order and behavior, resume download, and copyright footer. Other pages SHALL retain their existing content.

#### Scenario: Use Contact after the replacement
- **WHEN** a visitor opens Contact
- **THEN** the cover and existing contact links continue to work as before
- **AND** the copyright footer remains beneath the signature and description
