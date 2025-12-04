import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import blockedUrls from './blocked-urls.json';

function trimTrailingSlash(path: string) {
  if (!path) return '/';
  if (path === '/') return '/';
  const noTrailing = path.replace(/\/+$/, '');
  return noTrailing || '/';
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  const normalizedPath = trimTrailingSlash(pathname);
  const normalizedFull = normalizedPath + (search || '');

  const londonMatch = normalizedPath.match(/^\/(london)\/([^/]+)$/i);
  if (londonMatch) {
    const area = londonMatch[2];
    const canonical = `/london/${area.toLowerCase()}`;
    if (normalizedPath !== canonical) {
      return NextResponse.redirect(new URL(canonical + (search || ''), request.url), 301);
    }
  }

  const svcMatch = normalizedPath.match(/^\/(services)\/([^/]+)\/([^/]+)$/i);
  if (svcMatch) {
    const service = svcMatch[2];
    const location = svcMatch[3];
    const canonical = `/services/${service.toLowerCase()}/${location.toLowerCase()}`;
    if (normalizedPath !== canonical) {
      return NextResponse.redirect(new URL(canonical + (search || ''), request.url), 301);
    }
  }

  const isBlocked = blockedUrls.some((blocked) => {
    if (typeof blocked !== 'string' || !blocked) return false;
    const hasQuery = blocked.includes('?');

    if (hasQuery) {
      const [bPath, bQuery = ''] = blocked.split('?');
      const normalizedBlockedFull = trimTrailingSlash(bPath) + (bQuery ? `?${bQuery}` : '');
      return normalizedFull === normalizedBlockedFull;
    }

    return normalizedPath === trimTrailingSlash(blocked);
  });

  if (isBlocked) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
