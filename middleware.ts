import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Import listy zablokowanych URL-i
import blockedUrls from './blocked-urls.json';

// Normalizuje końcowe slashe (zostawia root '/') i usuwa wielokrotne slashe na końcu
function trimTrailingSlash(path: string) {
  if (!path) return '/';
  if (path === '/') return '/';
  // usuń wszystkie końcowe slashe
  const noTrailing = path.replace(/\/+$/, '');
  return noTrailing || '/';
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname; // np. '/online-gambling-free-spins' lub '/'
  const search = request.nextUrl.search;     // np. '?p=14839' lub ''

  const normalizedPath = trimTrailingSlash(pathname);
  const normalizedFull = normalizedPath + (search || '');

  // Sprawdź czy URL jest na liście zablokowanych
  // Obsłuż zarówno wpisy z query (np. '/?p=123') jak i bez
  const isBlocked = blockedUrls.some((blocked) => {
    if (typeof blocked !== 'string' || !blocked) return false;
    const hasQuery = blocked.includes('?');

    if (hasQuery) {
      // Rozbij blokowany wpis na ścieżkę i query, znormalizuj ścieżkę
      const [bPath, bQuery = ''] = blocked.split('?');
      const normalizedBlockedFull = trimTrailingSlash(bPath) + (bQuery ? `?${bQuery}` : '');
      return normalizedFull === normalizedBlockedFull;
    }

    // Bez query – porównuj same ścieżki po normalizacji, niezależnie od końcowego slasha
    return normalizedPath === trimTrailingSlash(blocked);
  });

  if (isBlocked) {
    // Zwróć status 410 Gone - informuje że zasób jest permanentnie usunięty
    return new NextResponse(null, {
      status: 410,
      statusText: 'Gone',
    });
  }

  // Kontynuuj normalnie dla innych requestów
  return NextResponse.next();
}

// Konfiguracja middleware - określa na których ścieżkach ma działać
export const config = {
  matcher: [
    /*
     * Dopasuj wszystkie ścieżki OPRÓCZ:
     * - api (API routes)
     * - _next/static (pliki statyczne)
     * - _next/image (optymalizacja obrazów)
     * - favicon.ico, robots.txt, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
