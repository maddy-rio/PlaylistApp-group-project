import request from 'superagent'
import { getSession } from '../functions/startSession'

export async function getUserDetails() {
  const token = await getSession()
  return await request.get(`https://api.spotify.com/v1/me`).set({
    Authorization: `Bearer ${token}`,
  })
}

export function getUsersPlaylists() {
  const token = getSession()
  return request.get(`/api/v1/user/playlists/${token}`)
}

interface AddTrackToPlaylist {
  playlistId: string
  trackId: string
}
export function addTrackToPlaylist(data: AddTrackToPlaylist) {
  const token = getSession()
  return request
    .post(`/api/v1/user/playlist/${data.playlistId}`)
    .send({ trackId: data.trackId, token })
}
