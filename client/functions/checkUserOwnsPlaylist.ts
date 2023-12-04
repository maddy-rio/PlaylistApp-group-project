import { getSession } from './startSession'
import request from 'superagent'

export async function userOwnsPlaylist(playlistId: string) {
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
