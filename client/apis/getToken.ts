import request from 'superagent'

export const getToken = async (code: string) => {
  const result = await request.post('/api/v1/login').send({ code })
  console.log('hi,api token')

  // console.log(result.body)
  return result.body
}
