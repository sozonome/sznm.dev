/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const slug = req.nextUrl.pathname.split("/")[2];

  if (!slug) {
    return NextResponse.rewrite(`${req.nextUrl.origin}/404`);
  }

  const entry = await fetch(
    `${req.nextUrl.origin}/api/notion/shortener/get-url?slug=${slug}`
  ).then((res) => res.json());

  if (entry.url) {
    await fetch(`${req.nextUrl.origin}/api/notion/shortener/add-click`, {
      method: "POST",
      body: JSON.stringify({ slug }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return NextResponse.redirect(entry.url);
  }
};

export const config = {
  matcher: ["/s/:path*"],
};
