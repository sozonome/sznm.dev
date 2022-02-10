import type { NextApiRequest, NextApiResponse } from "next";

import { getNowPlaying } from "lib/services/spotify/user/now-playing";
import type { GetNowPlayingTransformed } from "lib/services/spotify/user/now-playing/types";

const nowPlaying = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(400);
  }

  const response = await getNowPlaying();

  if (!response || !response.item) {
    return res.status(200).json({ isPlaying: false });
  }

  const data: GetNowPlayingTransformed = {
    isPlaying: response.is_playing,
    trackTitle: response.item.name,
    artist: response.item.album.artists.map(({ name }) => name).join(", "),
    album: response.item.album.name,
    albumArtUrl: response.item.album.images[0].url,
    trackUrl: response.item.external_urls.spotify,
  };

  return res.status(200).json(data);
};

export default nowPlaying;
