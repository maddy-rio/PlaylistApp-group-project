import request from 'superagent'
import { getSession } from '../functions/startSession'
import { Playlists } from '../../models/Playlist'

export async function getUserDetails() {
  const token = await getSession()
  return await request.get(`https://api.spotify.com/v1/me`).set({
    Authorization: `Bearer ${token}`,
  })
}

export function getUsersPlaylists(): Promise<Playlists> {
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
    .post(`/api/v1/user/playlist/add-track/${data.playlistId}`)
    .send({ trackId: data.trackId, token })
}

interface NewPlaylist {
  user_id: string
  name: string
  description: string
  isPublic: boolean
}

export function createNewPlaylist(data: NewPlaylist) {
  const { user_id, name, description, isPublic } = data
  const token = getSession()
  return request.post(`/api/v1/user/playlist/add-playlist/${name}`).send({
    description,
    user_id,
    isPublic,
    token,
  })
}

export function getPlaylistItems(playlistId: string) {
  const token = getSession()
  return request
    .get(`/api/v1/user/playlist/playlist-items`)
    .query({ playlistId, token })
}
