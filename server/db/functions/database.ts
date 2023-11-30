import connection from '../connection'
import { UserPlaylist } from '../../../models/playlist'

export async function getAllPlaylists(db = connection): Promise<UserPlaylist[]> {
  const playists = await db<UserPlaylist>('playlists_users').select('*')
  return playists
}
