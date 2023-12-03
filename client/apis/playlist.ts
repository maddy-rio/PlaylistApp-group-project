import request from 'superagent'
import { UserPlaylist } from '../../models/playlist'
import {temp} from '../temp-json/getPlaylist.js'
import { Welcome } from '../../models/temp'
import { getSession } from '../functions/startSession'
import { Playlists } from '../../models/Playlist'
// const rootUrl = '/api/v1'

export async function getPlaylist(): Promise<Welcome[]> {
  // const response = temp
  
  return temp as unknown as Welcome[]
}
export async function getUserDetails() {
  const token = await getSession()
  return await request.get(`https://api.spotify.com/v1/me`).set({
    Authorization: `Bearer ${token}`,
  })
}

export async function getUsersPlaylists(): Promise<Playlists> {
  const token = getSession()
  const response = await request.get(`/api/v1/user/playlists/${token}`)
return response.body.items
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
