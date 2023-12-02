import request from 'superagent'

export const getRefreshToken = async (refreshToken: string) => {
  const result = await request.post('/api/v1/refresh').send({ refreshToken })
  console.log('hi,api refreshed token')

  console.log(result.body)
  return result.body
}