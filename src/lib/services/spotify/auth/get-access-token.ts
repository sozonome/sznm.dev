import { env } from '~/lib/constants/env';
import { fetcher } from '~/lib/utils/fetcher';

import type { GetAccessTokenResponse } from './types';

const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const basic = btoa(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`);

const basicHeaders = {
  Authorization: `Basic ${basic}`,
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const getAccessToken = () =>
  fetcher<GetAccessTokenResponse>(SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: basicHeaders,
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: env.SPOTIFY_REFRESH_TOKEN,
    }),
  });
