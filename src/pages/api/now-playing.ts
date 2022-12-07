import type { NextRequest } from "next/server";

import { defaultHeader } from "lib/constants/api/header";
import { getNowPlaying } from "lib/services/spotify/user/now-playing";

export const config = {
  runtime: "experimental-edge",
};

const nowPlaying = async (req: NextRequest) => {
  if (req.method !== "GET") {
    return new Response(undefined, { status: 400 });
  }

  try {
    const response = await getNowPlaying();

    if (!response || !response.isPlaying) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: defaultHeader,
      });
    }

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        ...defaultHeader,
        "cache-control": "s-maxage=1, stale-while-revalidate=20",
      },
    });
  } catch {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: defaultHeader,
    });
  }
};

export default nowPlaying;
