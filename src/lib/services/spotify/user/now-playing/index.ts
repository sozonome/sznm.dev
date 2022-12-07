import { getAccessToken } from "lib/services/spotify/auth/getAccessToken";
import { useSpotifySWR } from "lib/services/spotify/utils";
import { fetcher } from "lib/utils/fetcher";

import type { GetNowPlayingResponse, GetNowPlayingTransformed } from "./types";
import { nowPlayingDataSelector } from "./utils";

const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();
  const data = await fetcher<GetNowPlayingResponse>(
    SPOTIFY_NOW_PLAYING_ENDPOINT,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return nowPlayingDataSelector(data);
};

export const useNowPlayingData = () =>
  useSpotifySWR<GetNowPlayingTransformed>("/api/now-playing");
