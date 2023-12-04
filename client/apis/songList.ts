import request from 'superagent'
import { getSession } from '../functions/startSession'

export const songList = async (playlistId: string, token: string) => {
  console.log(playlistId)
  const responseArr = await request.get(`/api/v1/playlist/${playlistId.playlistId}`)
  const resultWithIds = responseArr.body.map((item) => item.trackId)

  console.log(resultWithIds)

  // const response = ['1yaFHifoHlN5MEtL5YEgA4',
  // '5IQou2aojeIetE99Gy7Izr',
  // '1Cj2vqUwlJVG27gJrun92y'].join(',')

  const result = await request
    .get(`https://api.spotify.com/v1/tracks?ids=${resultWithIds}`)
    .set('Authorization', `Bearer ${token}`)

  console.log(result.body.tracks)
  return result.body.tracks
}
