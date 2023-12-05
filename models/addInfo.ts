export interface Playlists {
  name: string
  token: string
  owner_id: string
}

export interface UserID {
  users_id: number
  playlists_id: number
}

export interface Profile {
  user_id: string
  name: string
}

export interface PlaylistUsers {
  playlistsId: number
  usersID: number
}

export interface Track {
  trackId: number
}

export interface PlaylistTracks {
  tracksId: number
  usersId: number
  playlistsId: number
}
