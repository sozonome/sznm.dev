/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { SHORTENER_HOST_NAME } from '~/lib/constants/env';

export const middleware = async (req: NextRequest) => {
  const slug = req.nextUrl.pathname.split('/')[2];

  if (!slug) {
    return NextResponse.rewrite(`${req.nextUrl.origin}/404`);
  }

  return NextResponse.redirect(`${SHORTENER_HOST_NAME}/${slug}`);
};

export const config = {
  matcher: ['/s/:path*'],
};
