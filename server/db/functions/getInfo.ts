import connection from '../connection'
import { PlaylistTrackIds, UserPlaylists, UserName } from '../../../models/getInfo'

const db = connection

// TODO: return array of track ids from playlist id
export async function getPlaylistTrackIds(
  playlistId: number,
): Promise<PlaylistTrackIds[]> {
  const tracks = await db('playlists_tracks')
    .where('playlists_id', playlistId)
    .join('tracks', 'playlists_tracks.tracks_id', 'tracks.id')
    .select('tracks.track_id as trackId')
  console.log(`from db function:`, tracks)
  return tracks
}

export async function getUserPlaylists(
  userId: number,
): Promise<UserPlaylists[]> {
  const playlists = await db('playlists_users')
    .where('users_id', userId)
    .join('playlists', 'playlists_users.playlists_id', 'playlists.id')
    .select('playlists_id', 'name', 'token', 'owner_id')
  console.log(`from db function:`, playlists)
  return playlists
}

export  async function getUserName( userId: number ): Promise<UserName[]> {
  const name = await db('users')
    .where('users.id', userId)
    .select('name')
    console.log(`from db function:`, name)
    return name
}



