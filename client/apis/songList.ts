import request from 'superagent'
import { getSession } from '../functions/startSession'

export const songList = async () => {
  // const response = await request.get('/api/vi/songlist')
  const token = getSession()
  const response = ['1yaFHifoHlN5MEtL5YEgA4',
  '5IQou2aojeIetE99Gy7Izr',
  '1Cj2vqUwlJVG27gJrun92y'].join(',')
  console.log(response)
  const result = await request
    .get(`https://api.spotify.com/v1/tracks?ids=${response}`)
    .set('Authorization', `Bearer ${token}`)

  

  console.log(result.body.tracks)
  return result.body.tracks
}
