import SpotifyWebApi from 'spotify-web-api-node'

export function startSession(token: string) {
  return sessionStorage.setItem('accessToken', token)
}

export function getSession() {
  return sessionStorage.getItem('accessToken')
}

const token = getSession()
export const spotifyApi = new SpotifyWebApi({setaccessToken: token})