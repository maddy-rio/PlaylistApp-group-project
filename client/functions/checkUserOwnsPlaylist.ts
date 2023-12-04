import { spotifyApi } from './startSession'
import request from 'superagent'

async function checkUserOwnsPlalist() {
  await request.get('https://api.spotify.com/v1/me')
}
