/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { env } from '~/lib/constants/env';

const funPath = 'why-i';

export const middleware = (req: NextRequest) => {
  const isFunPath = !!req.nextUrl.href.includes(funPath);

  if (isFunPath) {
    return NextResponse.redirect(env.MM_URL);
  }

  if (!req.nextUrl.pathname.startsWith('/s/')) {
    return NextResponse.next();
  }

  const slug = req.nextUrl.pathname.split('/')[2];

  if (!slug) {
    return NextResponse.rewrite(`${req.nextUrl.origin}/404`);
  }

  return NextResponse.redirect(`${env.SHORTENER_HOST_NAME}/${slug}`);
};

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|robots.txt).*)',
    '/why-i:path*',
    '/s/:path*',
  ],
};
