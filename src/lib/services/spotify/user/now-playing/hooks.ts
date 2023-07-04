import type { GetNowPlayingTransformed } from '~/lib/services/spotify/user/now-playing/types';
import { useGetAPI } from '~/lib/services/utils';

export const useNowPlayingData = () =>
  useGetAPI<GetNowPlayingTransformed>({
    path: '/api/now-playing',
  });
