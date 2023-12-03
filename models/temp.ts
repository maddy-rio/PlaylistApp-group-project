export interface Welcome {
  collaborative: boolean
  description: string
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  public: boolean
  snapshot_id: string
  tracks: Tracks
  type: string
  uri: string
  primary_color: null
}

export interface ExternalUrls {
  spotify: string
}

export interface Followers {
  href: null
  total: number
}

export interface Image {
  url: string
  height: number
  width: number
}

export interface Owner {
  external_urls: ExternalUrls
  href: string
  id: string
  type: OwnerType
  uri: string
  display_name?: string
  name?: string
}

export enum OwnerType {
  Artist = 'artist',
  User = 'user',
}

export interface Tracks {
  href: string
  limit: number
  next: null
  offset: number
  previous: null
  total: number
  items: Item[]
}

export interface Item {
  added_at: Date
  added_by: Owner
  is_local: boolean
  track: Track
  primary_color: null
  video_thumbnail: VideoThumbnail
}

export interface Track {
  album: Album
  artists: Owner[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: ExternalIDS
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  popularity: number
  preview_url: null | string
  track_number: number
  type: TrackType
  uri: string
  is_local: boolean
  episode: boolean
  track: boolean
}

export interface Album {
  album_type: AlbumTypeEnum
  total_tracks: number
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: ReleaseDatePrecision
  type: AlbumTypeEnum
  uri: string
  artists: Owner[]
}

export enum AlbumTypeEnum {
  Album = 'album',
  Compilation = 'compilation',
  Single = 'single',
}

export enum ReleaseDatePrecision {
  Day = 'day',
  Year = 'year',
}

export interface ExternalIDS {
  isrc: string
}

export enum TrackType {
  Track = 'track',
}

export interface VideoThumbnail {
  url: null
}
