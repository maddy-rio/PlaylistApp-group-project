import { getSession } from './startSession'
import request from 'superagent'

/**
 *
 * @param playlistId takes playlist Id
 *
 * check the current logged in user is the owner of the playlist
 *
 * @returns boolean
 */
export async function userOwnsPlaylist(playlistId: string): Promise<boolean> {
  const user = await request.get('https://api.spotify.com/v1/me').set({
    Authorization: `Bearer ${getSession()}`,
  })

  const playlist = await request
    .get(
      `https://api.spotify.com/v1/playlists/${playlistId}
  `,
    )
    .set({
      Authorization: `Bearer ${getSession()}`,
    })

  if (user.body.id === playlist.body.owner.id) {
    return true
  }
  return false
}
