import connection from '../connection'
import { PlaylistTrackIds } from '../../../models/getInfo'

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

// [
//   { trackId: '1Cj2vqUwlJVG27gJrun92y' },
//   { trackId: '1Cj2vqUwlJVG27gJrun92y' }
// ]

// [
//   '1Cj2vqUwlJVG27gJrun92y',
//   '1Cj2vqUwlJVG27gJrun92y'
// ]

