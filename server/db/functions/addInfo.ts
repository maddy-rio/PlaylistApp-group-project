import connection from '../connection'
import {
  Playlists,
  UserID,
  Profile,
  PlaylistUsers,
  Track,
  PlaylistTracks,
} from '../../../models/addInfo'

const db = connection

// create a new playlist
export function createPlaylist(data: Playlists) {
  return db.table('playlists').insert({ ...data })
}

/////////////////////////////

// add a playlist to profile
export async function NewUserPlaylist(data: UserID) {
  return db.table('playlists_users').insert({ ...data })
}

// add username to profile
export function addUsername(data: Profile) {
  return db
    .table('users')
    .where({ user_id: data.user_id })
    .update({ name: data.name })
}

// create playlist join to users table
export function JoinPlaylist(data: PlaylistUsers) {
  return db.table('playlists').insert({ ...data })
}

// create new track
export function newTrack(data: Track) {
  return db.table('tracks').insert({ ...data })
}

// add song to playlist
export function addSongToPlaylist(data: PlaylistTracks) {
  return db.table('playlists_tracks').insert({ ...data })
}

//add a new user to the database
export function newUser(data: Profile) {
  return db.table('users').insert({ ...data })
}
