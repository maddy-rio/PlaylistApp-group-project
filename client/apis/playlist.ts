import request from 'superagent'

import { temp } from '../temp-json/getPlaylist.js'
import { Welcome } from '../../models/temp'
import { getSession } from '../functions/startSession'

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

export async function getUsersPlaylists(userId: string) {
  // const token = getSession()
  console.log(userId)
  const responseArr = await request.get(`/api/v1/user/playlists/${userId}`)
  // const result = responseArr.body.map((item) => item.name)
  // console.log(response.body)
  console.log(responseArr.body)
  return responseArr.body
}

export async function addTrackToPlaylist(
  playlistId: string,
  trackId: string,
  // userId: string,
) {
  console.log(playlistId, trackId)
  // const token = getSession()
  const response = await request
    .post(`'/api/v1/user/playlists/${playlistId}`)
    .send({ trackId})

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

  return response.body.data.items
}

export async function getPlaylistInfo(playlistId: string) {
  const token = getSession()

  const response = await request
    .get(`https://api.spotify.com/v1/playlists/${playlistId}`)
    .set({
      Authorization: `Bearer ${token}`,
    })

  return response.body
}
