# Spec Delta

## Purpose

Present professional experience with a personal photographic cover and readable role cards that adapt to desktop and mobile screens.

## ADDED Requirements

### Requirement: Supplied Experience banner
The Experience page SHALL display the user-supplied countryside photograph as a cover above its heading, served as a bundled site asset. The image SHALL have a concise alternative description of the landscape.

#### Scenario: Open Experience
- **WHEN** a visitor opens Experience
- **THEN** the supplied photograph appears above the Experience heading
- **AND** it loads without access to the original Downloads file
- **AND** its text alternative describes grassy hills with grazing cattle

### Requirement: Optimized photograph quality
The delivered banner image MUST be smaller than the supplied 340,948-byte JPEG and preserve visual quality at its displayed desktop and mobile sizes, without visible blur, block artifacts, or color shifts compared with the source under the same crop.

#### Scenario: Compare the optimized banner
- **WHEN** the optimized image is compared with the source at the same displayed size and crop on desktop and mobile
- **THEN** the optimized file is smaller than 340,948 bytes
- **AND** the landscape retains detail without visible compression artifacts, blur, or color shifts

### Requirement: Responsive banner framing
The banner SHALL fill the Experience content area's width without distortion or horizontal overflow. Its crop SHALL emphasize the grassy hills and retain recognizable cattle, and its heading and subtitle SHALL remain readable with spacing consistent with other covered pages.

#### Scenario: View the desktop banner
- **WHEN** Experience is viewed at a 1280-pixel-wide desktop viewport
- **THEN** the banner fills the content area's width and shows the landscape and cattle without stretching
- **AND** the header has no unintended extra padding or text overlap

#### Scenario: View the mobile banner
- **WHEN** Experience is viewed at a 390-pixel-wide mobile viewport
- **THEN** the landscape and at least one cow remain recognizable
- **AND** the banner and heading fit the page without horizontal scrolling

### Requirement: Displayed experience roles
The Experience timeline SHALL omit the CREATE UofT Tech Associate entry and continue to display the Rocket Innovation Studio Software Developer Intern role with its existing period, current status, description, and logo.

#### Scenario: Read the updated timeline
- **WHEN** a visitor opens Experience
- **THEN** the Rocket Innovation Studio role is displayed with its existing details
- **AND** no CREATE UofT role card is displayed

### Requirement: Larger readable role cards
Experience cards SHALL provide larger padding, logos, and role text than the previous presentation. At desktop widths with available space, the timeline SHALL use a wider content area. At mobile widths, dates, status, logos, and text SHALL remain readable without clipping or horizontal overflow.

#### Scenario: Compare desktop cards
- **WHEN** the updated Experience page is compared with its previous layout at a 1440-pixel-wide desktop viewport
- **THEN** the remaining card occupies a wider area and has larger padding, logo, and role text
- **AND** its date and status remain legible and aligned with the card

#### Scenario: Read mobile cards
- **WHEN** Experience is viewed at 390 pixels wide
- **THEN** the remaining card has larger padding, logo, and role text than the previous mobile layout
- **AND** all role details fit without clipping or horizontal scrolling

### Requirement: Preserve other page presentation
Experience presentation changes SHALL preserve other pages' existing cover images, content widths, and card styles.

#### Scenario: Navigate between pages
- **WHEN** a visitor opens Home, School, Projects, or Contact after viewing Experience
- **THEN** each page retains its existing cover and content layout
