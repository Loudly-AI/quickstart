export interface Genre {
  id: number
  name: string
  description: string
  image_url: string
  instruments: string[]
  bpm: {
    low: number
    high: number
  }
  suggested_instruments: string[]
  micro_genres: Record<string, any>[]
}

export interface Tag {
  id: number
  name: string
  active: boolean
}

export interface Song {
  id: string
  title: string
  duration: number
  music_file_path: string
  genres: Tag[]
  secondary_genres: Tag[]
  moods: Tag[]
  instruments: Tag[]
  keys: Tag[]
  energies: Tag[]
  eras: Tag[]
  has_vocal: boolean
  tempo_bpm: number
}

export interface SongResponse {
  items: Song[]
  pagination_data: {
    current_page: number
    last_page: number
    items_per_page: number
    items_count: number
    total_pages: number
    total_items: number
  }
}


export interface GenreListProps {
  cardStyle?: string
}

export interface SongKey {
  id: number;
  name: string;
  active: boolean;
}

export interface PromptSongResponse {
  id: string;
  title: string;
  duration: number;
  music_file_path: string;
  wave_form_file_path: string;
  created_at: string;
  bpm: number;
  key: SongKey;
}