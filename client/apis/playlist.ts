import request from 'superagent'
import { UserPlaylist } from '../../models/playlist'
import {temp} from '../temp-json/getPlaylist.js'
import { Welcome } from '../../models/temp'
// const rootUrl = '/api/v1'

export async function getPlaylist(): Promise<Welcome[]> {
  // const response = temp
  console.log(temp)
  return temp as unknown as Welcome[]
}
