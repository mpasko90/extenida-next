# Quickstart: Refactor Area Pages for SEO

This guide provides the essential steps to get the new area page structure up and running.

## 1. Create the New Directory Structure

Create a new directory at `app/london`. This will house the dynamic `[area]` pages.

```bash
mkdir -p app/london
```

## 2. Migrate Area Pages

Move the contents of each existing area page from `app/areas/[area]` to `app/london/[area]`. For example:

```bash
mv app/areas/putney app/london/putney
mv app/areas/wimbledon app/london/wimbledon
# ... repeat for all areas
```

## 3. Configure Redirects

Open `next.config.mjs` and add the following `redirects` function to the configuration object. This will handle the 301 redirects from the old URLs to the new ones.

```javascript
async redirects() {
  return [
    {
      source: '/areas/:slug',
      destination: '/london/:slug',
      permanent: true,
    },
  ];
}
```

## 4. Update Metadata Generation

Ensure that each `page.tsx` within the new `app/london/[area]` directories correctly generates dynamic metadata. The `generateMetadata` function should use the `area` parameter to create unique titles and descriptions.

Example from `app/london/[area]/page.tsx`:

```typescript
export async function generateMetadata({ params }: { params: { area: string } }) {
  const areaName = params.area.charAt(0).toUpperCase() + params.area.slice(1);
  return {
    title: `Home Extensions in ${areaName} | Extendia`,
    description: `Looking for home extensions in ${areaName}? Extendia is your trusted partner for design and build projects in London.`,
  };
}
```

## 5. Run the Development Server

Start the development server to test the changes.

```bash
npm run dev
```

Verify that navigating to a `/london/[area]` URL works correctly and that accessing an old `/areas/[area]` URL redirects you to the new structure.
