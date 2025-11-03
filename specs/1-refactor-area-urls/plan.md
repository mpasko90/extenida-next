# Implementation Plan: Refactor Area Pages for SEO

**Branch**: `1-refactor-area-urls` | **Date**: 2025-10-31 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `specs/1-refactor-area-urls/spec.md`

## Summary

This plan outlines the technical steps to refactor the area pages for improved SEO. The core of this work involves migrating the existing pages from the `app/areas/[area]` directory structure to `app/london/[area]`. This change requires moving files, updating routing, and implementing permanent (301) redirects from the old URLs to the new ones to preserve link equity and ensure a seamless user experience.

## Technical Context

**Language/Version**: TypeScript (as per `tsconfig.json`)
**Primary Dependencies**: Next.js 14+, React 18+
**Storage**: N/A (Content is stored statically in the `data/` directory)
**Testing**: Manual testing, potentially with Jest for utility functions.
**Target Platform**: Web (Vercel)
**Project Type**: Web application
**Performance Goals**: Maintain Lighthouse SEO score of 95+ on all area pages.
**Constraints**: Redirects must be permanent (301). Metadata must be generated server-side.
**Scale/Scope**: Affects all existing area pages (currently 9).

## Constitution Check

*The principles outlined in `.specify/memory/constitution.md` have been reviewed. This plan adheres to the core principles, particularly "Server Components First" for metadata and "Static Data Management" for content.*

## Project Structure

### Documentation (this feature)

```text
specs/1-refactor-area-urls/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (to be created)
```

### Source Code (repository root)

```text
app/
├── london/
│   └── [area]/
│       └── page.tsx
└── areas/
    ├── page.tsx      // KEEP: serves as the main /areas index
    └── [area]/
        └── page.tsx  // These dynamic subdirectories will be removed after migration

next.config.mjs // Redirects will be configured here
```

**Structure Decision**: The existing Next.js App Router structure will be modified. A new `london` directory will be created within `app/` to house the dynamic `[area]` pages. The legacy `app/areas` directory will retain its root `page.tsx` to serve as the `/areas` index, while all dynamic area subdirectories under `app/areas` will be removed after their contents are migrated to `app/london/[area]`. Redirects will be managed in `next.config.mjs`.

## Complexity Tracking

N/A
 
## Additional Technical Notes

### Redirect Ordering

Redirects for `/areas/:slug` → `/london/:slug` and `/london/` → `/areas`, along with canonical lowercase enforcement for `/london/[area]`, MUST be deployed before removing legacy dynamic subdirectories under `app/areas` to avoid a gap without redirects.

### Canonicalization Strategy

Canonical lowercase enforcement for `/london/[area]` will be implemented via `middleware.ts` that 301-redirects mixed-case paths (e.g., `/london/Wimbledon`) to lowercase (`/london/wimbledon`), since framework-level redirects do not normalize segment casing dynamically.

### Sitemap Alignment

Update `app/sitemap.ts` to include `/london/[area]` entries and exclude legacy `/areas/[area]`, ensuring search engines discover the new structure promptly.

### Internal Links Hygiene

Search and update internal links across the codebase to point directly to `/london/[area]` instead of `/areas/[area]`, reducing redirect hops and improving crawl efficiency.

### Non-Functional Verification

Phase 5 will include Lighthouse spot checks (desktop) targeting SEO ≥95 for representative area pages and a post-deploy Google Search Console review to confirm no 404s on legacy `/areas/*` URLs over a 7-day window.
