export interface MusicTrackData {
  title: string;
  artist: string;
  cover: string;
  audio: string;
}

export interface MusicData {
  initialTrackIndex?: number;
  tracks: MusicTrackData[];
}
