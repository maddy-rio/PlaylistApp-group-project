import request from 'superagent'
import { Profile } from '../../models/addInfo'

export async function addProfile(newUser: Profile) {
  const response = await request.post('/api/v1/newuser').send(newUser)
  return response.body.user
}
