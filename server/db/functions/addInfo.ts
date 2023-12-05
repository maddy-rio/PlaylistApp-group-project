import connection from '../connection'

const db = connection

interface Playlists {
  name: string
  token: string
  owner_id: string
}

// create a new playlist
export function createPlaylist(data: Playlists) {
  return db.table('playlists').insert({ ...data })
}

/////////////////////////////

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
  tracks_id: string
  users_id: string
  playlists_id: number
}

// add song to playlist

export async function createTrackId(track_id: string) {
  const track = await db.table('tracks').select('*').where({ track_id }).first()
  console.log(track)
  if (track !== undefined) {
    return track.id
  }
  const [newTrack] = await db.table('tracks').insert({ track_id })
  return newTrack
}

export async function createUserId(user_id: string) {
  const user = await db.table('users').select('*').where({ user_id }).first()
  if (user!== undefined) {
    return user.id
  }
  const [newUser] = await db.table('users').insert({ user_id })
  return newUser
}

export async function addSongToPlaylist(
  track_id: string,
  users_id: string,
  playlists_id: number,
) {
  const newTrackId = await createTrackId(track_id)
  const newUserId = await createUserId(users_id)

  const newSong = await db
    .table('playlists_tracks')
    .insert({
      tracks_id: newTrackId,
      users_id: newUserId,
      playlists_id,
    })
  console.log(newSong)
  return newSong
}
