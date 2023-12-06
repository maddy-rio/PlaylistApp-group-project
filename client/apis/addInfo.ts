import request from 'superagent'
import { Profile } from '../../models/addInfo'

export async function addProfile(newUser: Profile) {
  const response = await request.post('/api/v1/newuser').send(newUser)
  return response.body.user
}

//Add token to playlist

// export async function addPlaylistToUser(token: string) {
  export async function addPlaylistToUser(
    playlistId: number,
    userId: number,
  ) {
  const playlistToUser = await request
    .post('/api/v1/user/playlists/db-add-playlist-to-user')
    .send({ playlistId, userId })
  return playlistToUser
}

//Send the playlist to the user

export async function getPlaylistByToken(token: string) {
  const response = await request.get('/api/v1/user/playlists/token/get').query({ token })
  return response.body
}
