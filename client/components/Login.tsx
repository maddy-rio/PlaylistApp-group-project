import { codeVerifier } from '../functions/generateRandomString'
import { base64encode } from '../functions/base64encode'
import { sha256 } from '../functions/sha'
import { gatherUserTokenFromSpotify } from '../functions/getToken'
import { useEffect, useState } from 'react'
import { getSession, startSession } from '../functions/startSession'
import { getUserDetails } from '../apis/playlist'

const SPOTIFY_CLIENT_ID = 'e6902475a4424e50813fb15d818401c6'
const redirectUri = 'http://localhost:5173/login'

async function initiateSpotifyAuthentication() {
  const scope = `
  streaming
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

export interface Pokedex {
  country: string
  display_name: string
  email: string
  explicit_content: ExplicitContent
  external_urls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Image[]
  product: string
  type: string
  uri: string
}

export interface ExplicitContent {
  filter_enabled: boolean
  filter_locked: boolean
}

export interface ExternalUrls {
  spotify: string
}

export interface Followers {
  href: string
  total: number
}

export interface Image {
  url: string
  height: number
  width: number
}

function Login() {
  const [userDetails, setUserDetails] = useState<Pokedex | null>()
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  useEffect(() => {
    if (code) {
      // true if redirected from spotify auth
      fetchToken()
    } else if (getSession()) {
      // already in session
      const fecthUserDetails = async () => {
        const data = await getUserDetails()
        setUserDetails(data.body)
      }
      console.log(getSession());
      
      fecthUserDetails()
    } else {
      initiateSpotifyAuthentication()
    }
  })
  if (!userDetails) {
    return <div>Login</div>
  }
  return (
    <div>
      <>
        <h1>logged in with {userDetails.display_name}</h1>
        <p>{userDetails.country}</p>
        <p>{userDetails.email}</p>
        <p>{userDetails.href}</p>
        <p>{userDetails.id}</p>
        <p>{userDetails.product}</p>
        <p>{userDetails.type}</p>
        <p>{userDetails.uri}</p>
      </>
    </div>
  )
}

export default Login
