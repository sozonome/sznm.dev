import type { GetNowPlayingResponse, GetNowPlayingTransformed } from './types';

export const nowPlayingDataSelector = (
  response: GetNowPlayingResponse
): GetNowPlayingTransformed => {
  return {
    isPlaying: response.is_playing,
    trackTitle: response.item.name,
    artist: response.item.album.artists.map(({ name }) => name).join(', '),
    album: response.item.album.name,
    albumArtUrl: response.item.album.images[0].url,
    trackUrl: response.item.external_urls.spotify,
  };
};
