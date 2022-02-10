type SongImage = {
  url: string;
};

type SongArtist = {
  name: string;
};

type SongAlbum = {
  name: string;
  artists: Array<SongArtist>;
  images: Array<SongImage>;
};

type ExternalUrl = {
  spotify: string;
};

type SongItem = {
  name: string;
  album: SongAlbum;
  external_urls: ExternalUrl;
};

export type GetNowPlayingResponse = {
  is_playing: boolean;
  item: SongItem;
  currently_playing_type: string;
};

export type GetNowPlayingTransformed = {
  isPlaying: boolean;
  trackTitle: string;
  album: string;
  artist: string;
  albumArtUrl: string;
  trackUrl: string;
};
