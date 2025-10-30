import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Import the list of blocked URLs
import blockedUrls from './blocked-urls.json';

// Normalise trailing slashes (keep root '/') and remove multiple trailing slashes
function trimTrailingSlash(path: string) {
  if (!path) return '/';
  if (path === '/') return '/';
  // remove all trailing slashes
  const noTrailing = path.replace(/\/+$/, '');
  return noTrailing || '/';
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname; // e.g. '/online-gambling-free-spins' or '/'
  const search = request.nextUrl.search;     // e.g. '?p=14839' or ''

  const normalizedPath = trimTrailingSlash(pathname);
  const normalizedFull = normalizedPath + (search || '');

  // Check if the URL is on the blocked list
  // Handle entries with query (e.g. '/?p=123') and without
  const isBlocked = blockedUrls.some((blocked) => {
    if (typeof blocked !== 'string' || !blocked) return false;
    const hasQuery = blocked.includes('?');

    if (hasQuery) {
      // Split the blocked entry into path and query; normalise the path
      const [bPath, bQuery = ''] = blocked.split('?');
      const normalizedBlockedFull = trimTrailingSlash(bPath) + (bQuery ? `?${bQuery}` : '');
      return normalizedFull === normalizedBlockedFull;
    }

    // Without query – compare just the normalised paths, regardless of trailing slash
    return normalizedPath === trimTrailingSlash(blocked);
  });

  if (isBlocked) {
    // Return 410 Gone – indicates the resource was permanently removed
    return new NextResponse(null, {
      status: 410,
      statusText: 'Gone',
    });
  }

  // Continue as normal for other requests
  return NextResponse.next();
}

// Middleware configuration – specify which paths it runs on
export const config = {
  matcher: [
    /*
     * Match all paths EXCEPT:
     * - api (API routes)
     * - _next/static (static assets)
     * - _next/image (image optimisation)
     * - favicon.ico, robots.txt, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
