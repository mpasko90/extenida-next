# Extendia Next Constitution

This document outlines the core architectural and development principles for the Extendia Next project. All contributions, including those from AI agents, MUST adhere to these principles.

## Core Principles

### I. Server Components First

**Description**: Prioritize the use of React Server Components (RSCs) for data fetching, accessing the backend (e.g., file system, databases), and managing SEO-critical metadata. This is the default component type for this project. Client-side interactivity should be an exception, not the rule.

**Mandates**:

- All new pages (`page.tsx`) and layouts (`layout.tsx`) MUST be Server Components by default.
- Data fetching and access to sensitive environment variables MUST occur only in Server Components.
- Metadata generation (e.g., `generateMetadata`) MUST be done in Server Components.

### II. Isolate Client Components

**Description**: Any component requiring client-side interactivity (e.g., using hooks like `useState`, `useEffect`, or event listeners) MUST be isolated into its own file with the `'use client'` directive at the top. These components should be as small and specific as possible.

**Mandates**:

- The `'use client'` directive MUST only be used in files containing client-side logic.
- Client Components SHOULD be leaf components in the tree whenever possible, imported into Server Components.
- Do not place data-fetching logic in Client Components. Pass data down from Server Component parents as props.

### III. Static Data Management

**Description**: All primary business data (e.g., services, portfolio projects, reviews) is managed statically within TypeScript files in the `data/` directory. This centralizes content management and ensures type safety.

**Mandates**:

- All content updates or additions (e.g., adding a new service) MUST be made by modifying the appropriate file in the `data/` directory.
- Do not hardcode business data directly into components. Import it from the `data/` directory.

### IV. Styling with Tailwind CSS

**Description**: Styling MUST be implemented using Tailwind CSS utility classes. Adherence to the brand's design system, defined in `tailwind.config.ts`, is mandatory.

**Mandates**:

- Use utility classes for all styling. Avoid writing custom CSS files.
- All colors used MUST correspond to the brand palette (`extendia-primary`, `extendia-secondary`, `extendia-accent`).
- `shadcn/ui` components are the standard; use the CLI to add new ones, do not create them manually in `components/ui`.

## Development Workflow

### Code Conventions

- **Language**: All code, variables, functions, and comments MUST be written in English.
- **Path Aliases**: Absolute path aliases (e.g., `@/components/layout`) MUST be used for all imports. Relative paths (`../`) are discouraged.

### SEO & Routing

- **URL Structure**: The primary URL structure for location-based pages is `/[city]/[area]`.
- **Redirects**: Deprecated routes MUST be permanently redirected (301) in `next.config.mjs`.

## Governance

This constitution is the source of truth for architectural decisions. Any deviation requires a documented justification and approval. All code reviews, whether human or AI-driven, MUST validate changes against these principles.

**Version**: 1.0 | **Ratified**: 2025-10-31
