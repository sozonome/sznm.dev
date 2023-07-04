import { getAccessToken } from '~/lib/services/spotify/auth/getAccessToken';
import { fetcher } from '~/lib/utils/fetcher';

import type { GetNowPlayingResponse } from './types';
import { nowPlayingDataSelector } from './utils';

const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const fetchNowPlaying = async () => {
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
