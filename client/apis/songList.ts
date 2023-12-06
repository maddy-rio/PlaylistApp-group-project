import request from 'superagent'
import {Album} from '../../models/song.ts'

interface Item {
  trackId: string
}


export const songList = async (playlistId :string, token: string) => {
  console.log(playlistId)
  const responseArr = await request.get(
    `/api/v1/tracks/${playlistId}`,
  )
  const resultWithIds = responseArr.body.map((item: Item) => item.trackId)

  console.log('resultWithIds', resultWithIds)



  const result = await request
    .get(`https://api.spotify.com/v1/tracks?ids=${resultWithIds}`)
    .set('Authorization', `Bearer ${token}`)

  console.log(result.body.tracks)
  return result.body.tracks  as Album[]
}
