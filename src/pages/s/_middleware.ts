/* eslint-disable consistent-return */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { addUrlClick } from "lib/services/notion/link-shortener/addUrlClick";
import { getUrl } from "lib/services/notion/link-shortener/getUrl";

const middleware = async (req: NextRequest) => {
  const slug = req.nextUrl.pathname.split("/")[2];

  if (!slug) {
    return NextResponse.rewrite(`${req.nextUrl.origin}/404`);
  }

  const entry = await getUrl(slug);
  if (entry.url) {
    await addUrlClick(entry);
    return NextResponse.redirect(entry.url);
  }
};

export default middleware;
