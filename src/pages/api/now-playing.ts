import type { NextRequest } from "next/server";

import { defaultHeader } from "lib/constants/api/header";
import { getNowPlaying } from "lib/services/spotify/user/now-playing";
import type { GetNowPlayingTransformed } from "lib/services/spotify/user/now-playing/types";

export const config = {
  runtime: "experimental-edge",
};

const nowPlaying = async (req: NextRequest) => {
  if (req.method !== "GET") {
    return new Response(undefined, { status: 400 });
  }

  try {
    const response = await getNowPlaying();

    if (!response || !response.item) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: defaultHeader,
      });
    }

    const data: GetNowPlayingTransformed = {
      isPlaying: response.is_playing,
      trackTitle: response.item.name,
      artist: response.item.album.artists.map(({ name }) => name).join(", "),
      album: response.item.album.name,
      albumArtUrl: response.item.album.images[0].url,
      trackUrl: response.item.external_urls.spotify,
    };
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        ...defaultHeader,
        "cache-control": "s-maxage=1, stale-while-revalidate=59",
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
