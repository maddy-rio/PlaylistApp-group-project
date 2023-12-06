import request from 'superagent'

import { PlaylistTracks } from '../../models/getInfo'
import { PlaylistName } from '../../models/Playlist'

export async function getTracks(): Promise<PlaylistTracks[]> {
  const response = await request.get('/api/v1/tracks')
  console.log(response)
  return response.body.tracks
}

export async function getPlaylistName(): Promise<PlaylistName> {
  const response = await request.get('/api/v1/user/playlists')
  console.log(response)
  return response.body.playlistName
}
