export type NowPlayingProps = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type PageSeoProps = {
  title: string;
  titleTemplate?: string;
  description?: string;
};

export type BlogSeoProps = {
  title: string;
  description?: string;
  date: string;
  url: string;
};
