import { codeVerifier } from '../functions/generateRandomString'
import { base64encode } from '../functions/base64encode'
import { sha256 } from '../functions/sha'
import { gatherUserTokenFromSpotify } from '../functions/getToken'
import { useEffect } from 'react'
import { getSession, startSession } from '../functions/startSession'

const SPOTIFY_CLIENT_ID = 'e6902475a4424e50813fb15d818401c6'
const redirectUri = 'http://localhost:5173/login'

async function initiateSpotifyAuthentication() {
  const scope = `
  user-read-playback-state 
  user-modify-playback-state 
  user-read-currently-playing 
  app-remote-control 
  playlist-read-private 
  playlist-read-collaborative 
  playlist-modify-private 
  playlist-modify-public 
  user-follow-modify 
  user-follow-read 
  user-read-playback-position 
  user-top-read 
  user-read-recently-played 
  user-library-modify 
  user-library-read 
  user-read-email 
  user-read-private`
  // NEED TO STORE IN LOCALSTORAGE TO PERSIST BETWEEN PAGE RERENDERS
  window.localStorage.setItem('code_verifier', codeVerifier)
  const authUrl = new URL('https://accounts.spotify.com/authorize')
  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed)

  const params = {
    response_type: 'code',
    client_id: SPOTIFY_CLIENT_ID,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  }
  authUrl.search = new URLSearchParams(params).toString()
  window.location.href = authUrl.toString()
}

const fetchToken = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    const user_token = await gatherUserTokenFromSpotify(code, redirectUri)
    startSession(user_token.access_token)
  } catch (err) {
    console.error(err)
  }
}

function Login() {
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  useEffect(() => {
    if (code) {
      // true if redirected from spotify auth
      fetchToken()
    } else if (getSession()) {
      // already in session
      return
    } else {
      initiateSpotifyAuthentication()
    }
  })

  return <div>Login</div>
}

export default Login
