# Research: Refactor Area Pages for SEO

## Decision: Use Next.js Permanent Redirects

**Rationale**: The primary requirement is to redirect old `/areas/[area]` URLs to the new `/london/[area]` structure with a 301 status code to preserve SEO value. The official Next.js documentation provides a clean and efficient way to handle this directly within the `next.config.mjs` file. This approach is server-level, requires no client-side logic, and is the most performant and reliable method for this use case.

**Alternatives considered**:

*   **Middleware**: Using `middleware.ts` to handle redirects would also work, but it's more complex than necessary for this static set of redirects. Middleware is better suited for more dynamic logic, such as authentication or A/B testing.
*   **Client-side redirects**: Using `useEffect` in a React component to perform a redirect is not SEO-friendly and would result in a poor user experience. This was not a viable option.

## Decision: Dynamic Segment for Area Pages

**Rationale**: The new URL structure `/london/[area]` requires a dynamic segment in the App Router. Creating a directory structure like `app/london/[area]/page.tsx` is the standard and recommended way to handle this in Next.js. This allows for server-side rendering of each area page while sharing a common layout and logic.

**Alternatives considered**:

*   **Static pages**: Creating a static page for each area (e.g., `app/london/putney/page.tsx`) would be repetitive and difficult to maintain. A dynamic segment is much more scalable.
