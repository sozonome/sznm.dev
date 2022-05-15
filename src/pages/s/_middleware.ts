/* eslint-disable consistent-return */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getUrl } from "lib/services/notion/link-shortener/get/url";

const middleware = async (req: NextRequest) => {
  const slug = req.nextUrl.pathname.split("/")[2];

  if (!slug) {
    return;
  }

  const { url } = await getUrl(slug);
  if (url) {
    return NextResponse.redirect(url);
  }
};

export default middleware;
