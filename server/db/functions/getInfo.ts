import connection from '../connection'
import { PlaylistTracks } from '../../../models/getInfo'

const db = connection

export async function getAllTracks(
  playlistId: number,
): Promise<PlaylistTracks[]> {
  const tracks = await db('playlists_tracks')
    .where('playlists_id', playlistId)
    .select('*')
  return tracks
}
