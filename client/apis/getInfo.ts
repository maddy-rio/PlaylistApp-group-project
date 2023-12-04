import request from 'superagent'

import { PlaylistTracks } from '../../models/getInfo'

export async function getTracks(): Promise<PlaylistTracks[]> {
  const response = await request.get('/api/v1/tracks')
  console.log(response)
  return response.body.tracks
}
