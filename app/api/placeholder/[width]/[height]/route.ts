import { NextResponse } from 'next/server';

interface RouteParams { width: string; height: string }

export function GET(_req: Request, { params }: { params: RouteParams }) {
  const w = Math.max(1, Math.min(2000, parseInt(params.width, 10) || 1));
  const h = Math.max(1, Math.min(2000, parseInt(params.height, 10) || 1));
  const bg = '1e293b'; // slate-800
  const fg = '94a3b8'; // slate-400
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><rect width="100%" height="100%" fill="#${bg}"/><text x="50%" y="50%" fill="#${fg}" font-family="system-ui,Arial" font-size="${Math.min(w,h)/6}" dominant-baseline="middle" text-anchor="middle">${w}×${h}</text></svg>`;
  return new NextResponse(svg, { headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' } });
}
