import request from 'superagent'

export const searchSongs = async (token:string, input:string) => {
  const result = await request
    .get(`https://api.spotify.com/v1/search?q=${input}&type=track`)
    .set('Authorization', `Bearer ${token}`)

  

  console.log(result.body)
  return result.body
}
