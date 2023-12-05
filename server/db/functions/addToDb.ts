import connection from '../connection'

const db = connection

interface UserID {
  users_id: number
  playlists_id: number
}

// add a playlist to profile
export async function NewUserPlaylist(data: UserID) {
  return db.table('playlists_users').insert({ ...data })
}

interface Profile {
  user_id: string
  name: string
}

// add username to profile
export function addUsername(data: Profile) {
  return db
    .table('users')
    .where({ user_id: data.user_id })
    .update({ name: data.name })
}

interface Playlists {
  playlistName: string
  playlistUserId: string
}

// create a new playlist
export function createPlaylist(data: Playlists) {
  return db.table('playlists').insert({ name: data.playlistName })
}

interface PlaylistUsers {
  playlistsId: number
  usersID: number
}

// create playlist join to users table
export function JoinPlaylist(data: PlaylistUsers) {
  return db.table('playlists').insert({ ...data })
}

interface Track {
  trackId: number
}

// create new track
export function newTrack(data: Track) {
  return db.table('tracks').insert({ ...data })
}

interface PlaylistTracks {
  tracksId: number
  usersId: number
  playlistsId: number
}

// add song to playlist
export function addSongToPlaylist(data: PlaylistTracks) {
  return db.table('playlists_tracks').insert({ ...data })
}
