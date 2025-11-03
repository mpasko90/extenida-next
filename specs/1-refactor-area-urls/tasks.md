# Tasks: Refactor Area Pages for SEO

**Input**: Design documents from `specs/1-refactor-area-urls/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup

**Purpose**: Prepare the new directory structure.

- [X] T001 Create new directory `app/london`.

---

## Phase 2: User Story 1 - Access Area Page via New URL (Priority: P1) 🎯 MVP

**Goal**: Migrate existing area pages to the new `/london/[area]` URL structure.

**Independent Test**: Navigate to `/london/putney`. The Putney area page should load correctly.

### Implementation for User Story 1

- [X] T002 [P] [US1] Move `app/areas/fulham` to `app/london/fulham`.
- [X] T003 [P] [US1] Move `app/areas/hammersmith` to `app/london/hammersmith`.
- [X] T004 [P] [US1] Move `app/areas/kingston` to `app/london/kingston`.
- [X] T005 [P] [US1] Move `app/areas/putney` to `app/london/putney`.
- [X] T006 [P] [US1] Move `app/areas/richmond` to `app/london/richmond`.
- [X] T007 [P] [US1] Move `app/areas/surbiton` to `app/london/surbiton`.
- [X] T008 [P] [US1] Move `app/areas/surrey` to `app/london/surrey`.
- [X] T009 [P] [US1] Move `app/areas/twickenham` to `app/london/twickenham`.
- [X] T010 [P] [US1] Move `app/areas/wandsworth` to `app/london/wandsworth`.
- [X] T011 [P] [US1] Move `app/areas/wimbledon` to `app/london/wimbledon`.
- [X] T012 [US1] Remove the dynamic `[area]` subdirectories from `app/areas`. Note: root `app/areas/page.tsx` was temporarily kept as a redirect, then fully removed once config-level redirects were shipped.

**Checkpoint**: All area pages are now served from `/london/[area]`.

---

## Phase 3: User Story 2 - SEO Crawler Indexes Dynamic Metadata (Priority: P2)

**Goal**: Ensure each area page has unique, server-generated metadata for SEO.

**Independent Test**: View the source of `/london/richmond` and verify the `<title>` and `<meta name="description">` tags are specific to Richmond.

### Implementation for User Story 2

- [X] T013 [US2] Verify that each `app/london/[area]/page.tsx` file exports a `generateMetadata` function that uses the `area` param to create dynamic content. No new code is likely needed, but all pages must be checked for this.

- [X] T019 [US2] Ensure each `app/london/[area]/page.tsx` includes a JSON-LD `<script type="application/ld+json">` containing `BreadcrumbList` and `LocalBusiness`, tailored to the specific area (name, slug, and breadcrumbs).
- [X] T019 Acceptance: One and only one `LocalBusiness` script per page with fields `name`, `url`, `address.addressLocality` (Area), `address.addressRegion` ("London"), and a `BreadcrumbList` `Home > London > Area`.
- [X] T020 [US2] Validate JSON-LD correctness by viewing source for at least 5 area pages (e.g., Putney, Wimbledon, Richmond, Fulham, Wandsworth) and confirming: (a) presence of one JSON-LD script, (b) correct breadcrumb hierarchy (Home > London > Area), (c) `LocalBusiness` fields reflect the area.
- [X] T021 (Constitution, US2) Audit Server Component compliance for all `app/london/[area]/page.tsx`: confirm no `'use client'` directive and that metadata generation occurs server-side only.

**Checkpoint**: All area pages have dynamic, SEO-friendly metadata.

---

## Phase 4: User Story 3 - Redirect Old URLs (Priority: P3)

**Goal**: Implement permanent 301 redirects from `/areas/[area]` to `/london/[area]`.

**Independent Test**: Accessing `/areas/kingston` in a browser should result in the URL changing to `/london/kingston` and the correct page loading.

### Implementation for User Story 3

- [X] T014 [US3] Modify `next.config.mjs` to include a `redirects` function that permanently redirects all traffic from `/areas/:slug` to `/london/:slug` and `/areas` to `/london`.
- [X] T015 [US3] Keep `/london` as the canonical index page (no redirect). Ship a server page at `/london` listing all areas.
- [X] T022 [US1] Implement canonical lowercase slugs for `/london/[area]`: allow mixed-case inputs but 301-redirect to lowercase canonical (e.g., `/london/Wimbledon` → `/london/wimbledon`). Implement via `middleware.ts` to normalize casing for dynamic segments.
- [X] T024 [US3] Enforce ordering: ship redirects (T014, T022) before removing legacy dynamic subdirectories (T012). Validated locally before deletion.

**Checkpoint**: All old area URLs correctly redirect to the new structure, preserving SEO value.

---

## Phase 5: Polish & Cross-Cutting Concerns

- [X] T016 Run `npm run dev` and manually test all area pages and redirects.
- [ ] T018 [US2] Manually test that navigating to `/london/nonexistent-area` correctly triggers the 404 Not Found page.
- [X] T025 [US2] Update `app/sitemap.ts` to emit `/london/[area]` URLs and remove `/areas/[area]`.
- [ ] T026 [US2] Validate sitemap by inspecting `/sitemap.xml`: confirm presence of all `/london/[area]` entries and absence of legacy `/areas/*`.
- [X] T027 Replace internal links pointing to `/areas/[area]` with `/london/[area]` across the codebase (components/, data/, app/), minimizing redirect hops.
- [ ] T028 [NFR] Run Lighthouse (desktop) for 5 representative `/london/[area]` pages; record SEO scores ≥95. Investigate and remediate if any page falls below threshold.
	- Note: Putney = 100, Wimbledon = 100 (local Windows temp cleanup error observed but score reported 100). Remaining 3 pages to validate post-build or on preview.
- [ ] T029 [NFR] Post-deploy: Monitor Google Search Console for 7 days to ensure legacy `/areas/*` URLs do not report 404 errors. Acceptance: zero 404s for legacy area paths after one week.
- [X] T030 [US3] Acceptance test: Requesting `/areas` returns an HTTP 301 redirect to `/london`. `/london` serves the canonical index page. Validated via local build route list and manual checks.

### Optional Refinements

- [ ] T023 [Optional] Confirm taxonomy for "Surrey" under the `/london/` segment: either (a) treat as non-London and move to a distinct top-level segment, or (b) document rationale for keeping under `/london/`. Update spec/plan if a change is required.
- [ ] T031 [Optional, Constitution] Add a lightweight CI/lint script to assert `app/london/[area]/page.tsx` files do not include `'use client'` and that `generateMetadata` is exported (complements T021 manual audit).

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Must be completed first.
- **User Story 1 (Phase 2)**: Depends on Setup.
- **User Story 2 (Phase 3)**: Depends on User Story 1.
- **User Story 3 (Phase 4)**: Can be done in parallel with other user stories after Phase 1, but is logically dependent on the new pages existing.
- **Polish (Phase 5)**: Depends on all user stories being complete.

### Parallel Opportunities

- All file-moving tasks in Phase 2 (T002-T011) can be executed in parallel.

## Implementation Strategy

### MVP First (User Story 1)

1. Complete Phase 1: Setup.
2. Complete Phase 2: User Story 1.
3. **STOP and VALIDATE**: Test that all area pages load correctly from the new `/london/[area]` URLs.

### Incremental Delivery

1. **Increment 1 (MVP)**: Complete Phases 1 and 2. At this point, the site works, but without redirects or guaranteed metadata.
2. **Increment 2**: Complete Phase 3. Metadata is now optimized.
3. **Increment 3**: Complete Phase 4. Redirects are in place, completing the SEO refactor.
4. **Increment 4**: Complete Phase 5 for final validation.
