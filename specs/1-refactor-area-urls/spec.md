# Feature Specification: Refactor Area Pages for SEO

**Feature Branch**: `1-refactor-area-urls`
**Created**: 2025-10-31
**Status**: Draft
**Input**: User description: "Refactor area pages for SEO with new /london/[area] URL structure and server-side metadata"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Access Area Page via New URL (Priority: P1)

As a user, I want to access location-specific content by navigating to a clean, hierarchical URL like `/london/putney` so that I can easily find information relevant to my chosen area.

**Why this priority**: This is the core functionality of the feature. It directly impacts user experience and is the foundation for the SEO improvements.

**Independent Test**: Can be fully tested by navigating to a `/london/[area]` URL and verifying that the correct page content is displayed. This delivers immediate value by making the URL structure more intuitive.

**Acceptance Scenarios**:

1. **Given** a valid area name like "putney", **When** a user navigates to `/london/putney`, **Then** the webpage for the Putney area is displayed.
2. **Given** a valid area name with different casing like "Wimbledon", **When** a user navigates to `/london/wimbledon`, **Then** the webpage for the Wimbledon area is displayed, handling case-insensitivity gracefully.
3. **Given** a valid area name with mixed casing like "Wimbledon", **When** a user navigates to `/london/Wimbledon`, **Then** the server responds with a 301 redirect to the canonical lowercase URL `/london/wimbledon`.

---

### User Story 2 - SEO Crawler Indexes Dynamic Metadata (Priority: P2)

As a search engine crawler, I want to find unique and descriptive metadata (title, description, and structured data) on each server-rendered area page, so that each page can be accurately indexed and ranked for its specific location.

**Why this priority**: This is the primary driver for the refactor. Without unique metadata, the SEO value of having separate area pages is lost.

**Independent Test**: Can be tested by fetching a `/london/[area]` page and inspecting the `<head>` of the HTML response. The presence of a unique `<title>`, `<meta name="description">`, and a JSON-LD script for structured data confirms the implementation.

**Acceptance Scenarios**:

1. **Given** the URL `/london/richmond`, **When** a crawler requests the page, **Then** the HTML response contains a `<title>` tag like "Extending and Renovating Homes in Richmond | Extendia".
2. **Given** the URL `/london/fulham`, **When** a crawler requests the page, **Then** the HTML response contains a `<meta name="description">` tag with content specific to services in Fulham.
3. **Given** any valid area page, **When** a crawler views the source, **Then** a `<script type="application/ld+json">` tag is present containing `BreadcrumbList` and `LocalBusiness` schema.

---

### User Story 3 - Redirect Old URLs (Priority: P3)

As a user or search engine, when I try to access a deprecated URL like `/areas/kingston`, I want to be permanently redirected (301) to the new URL `/london/kingston` to maintain link equity and avoid broken user experiences.

**Why this priority**: Prevents loss of traffic and SEO ranking from existing backlinks pointing to the old URLs. It's crucial for a smooth transition.

**Independent Test**: Can be tested by making an HTTP request to an old `/areas/[area]` URL and asserting that the response is an HTTP 301 redirect to the corresponding `/london/[area]` URL.

**Acceptance Scenarios**:

1. **Given** a request for the old URL `/areas/surbiton`, **When** the server receives the request, **Then** it responds with a 301 status code and a `Location` header pointing to `/london/surbiton`.
2. **Given** a user clicks a legacy link to `/areas/wandsworth`, **When** the browser follows the link, **Then** the user's address bar updates to `https://www.extendia.co.uk/london/wandsworth` and the correct page loads.

---

### Edge Cases

- **Invalid Area**: What happens when a user navigates to `/london/nonexistent-area`? The system should display a user-friendly 404 Not Found page.
- **No Area**: How does the system handle a request to `/london/`? It should redirect to the main `/areas` page.
- **Mixed-Case Area Slug**: Requests to `/london/[Area]` using non-lowercase characters MUST permanently (301) redirect to the lowercase canonical `/london/[area]`.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The application MUST generate pages for specific London areas using the URL structure `/london/[area]`.
- **FR-002**: Each area page MUST be a Server Component to allow for server-side generation of metadata.
- **FR-003**: Each area page MUST export a `generateMetadata` function to dynamically create unique `<title>` and `<meta name="description">` tags based on the area.
- **FR-004**: The application MUST implement permanent (301) redirects for all legacy `/areas/[area]` paths to their new `/london/[area]` counterparts.
- **FR-005**: Each area page MUST include a JSON-LD script with `Schema.org` structured data, specifically `BreadcrumbList` and `LocalBusiness`, tailored to the specific area.
  - Minimum JSON-LD fields for `LocalBusiness`: `name`, `url`, `address.addressLocality` (Area), `address.addressRegion` ("London"), and an accompanying `BreadcrumbList` reflecting `Home > London > Area`.
- **FR-006**: The system MUST return a 404 Not Found page for any URL matching `/london/[area]` where `[area]` is not a recognized service area.
- **FR-007**: The application MUST redirect requests from `/london/` to the `/areas` page.
- **FR-008**: The sitemap MUST include entries for all `/london/[area]` pages and MUST NOT include legacy `/areas/[area]` pages.
- **FR-009**: Requests to `/london/[Area]` with uppercase letters in `[Area]` MUST be permanently redirected (301) to the lowercase canonical `/london/[area]`.

### Key Entities

- **Area**: Represents a geographical service area within London.
  - **Attributes**: `name` (e.g., "Putney"), `slug` (e.g., "putney").

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of requests to old `/areas/[area]` URLs return an HTTP 301 redirect to the corresponding `/london/[area]` URL.
- **SC-002**: All pages under `/london/` achieve a Lighthouse SEO score of 95 or higher.
- **SC-003**: When inspecting the HTML source of any five distinct area pages, each page contains a unique title tag and meta description.
- **SC-004**: Google Search Console reports zero 404 errors for the old `/areas/*` URLs one week after deployment.
- **SC-005**: The `BreadcrumbList` structured data on an area page, like `/london/putney`, correctly shows the hierarchy: Home > London > Putney.
- **SC-006**: `/sitemap.xml` lists all `/london/[area]` pages and zero `/areas/*` pages after deployment.
- **SC-007**: Mixed-case requests (e.g., `/london/Wimbledon`) return a 301 to the lowercase canonical URL in 100% of sampled tests.
