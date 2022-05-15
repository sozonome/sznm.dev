/* eslint-disable consistent-return */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getUrl } from "lib/services/notion/link-shortener/getUrl";

const middleware = async (req: NextRequest) => {
  const slug = req.nextUrl.pathname.split("/")[2];

  if (!slug) {
    return NextResponse.rewrite(`${req.nextUrl.origin}/404`);
  }

  const entry = await getUrl(slug);
  if (entry.url) {
    await fetch(`${req.nextUrl.origin}/api/notion/shortener/add-click`, {
      method: "POST",
      body: JSON.stringify(entry),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return NextResponse.redirect(entry.url);
  }
};

export default middleware;
