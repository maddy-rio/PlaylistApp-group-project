import request from 'superagent'
import { Playlists as dbPlaylist } from '../../models/dbPlaylist'
import { temp } from '../temp-json/getPlaylist.js'
import { Welcome } from '../../models/temp'
import { getSession } from '../functions/startSession'
import { Playlists, Item } from '../../models/Playlist'
// const rootUrl = '/api/v1'

export async function getPlaylist(): Promise<Welcome[]> {
  // const response = temp

  return temp as unknown as Welcome[]
}
export async function getUserDetails() {
  const token = await getSession()
  const response = await request.get(`https://api.spotify.com/v1/me`).set({
    Authorization: `Bearer ${token}`,
  })

  return response.body
}

export async function getUsersPlaylists(): Promise<Item[]> {
  const token = getSession()
  const response = await request.get(`/api/v1/user/playlists/${token}`)
  return response.body.items
}

interface AddTrackToPlaylist {
  playlistId: string
  trackId: string
}
export async function addTrackToPlaylist(playlistId, trackId: string) {
  console.log(playlistId.playlistId, trackId)
  const token = getSession()
  const response = await request
    .post(`/api/v1/user/playlist/add-track/${playlistId.playlistId}`)
    .send({ trackId: trackId, token })
  console.log(response.body.data)
  return response.body
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

export async function getPlaylistItems(playlistId: string) {
  const token = getSession()
  const response = await request
    .get(`/api/v1/user/playlist/playlist-items`)
    .query({ playlistId, token })
  console.log(response.body)
  return response.body
}

export async function getPlaylistInfo(playlistId: string) {
  const token = getSession()
  const response = await request
    .get(`https://api.spotify.com/v1/playlists/${playlistId}`)
    .set({
      Authorization: `Bearer ${token}`,
    })
  console.log(response.body)
  return response.body
}
