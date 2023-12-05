import { codeVerifier } from '../functions/generateRandomString'
import { base64encode } from '../functions/base64encode'
import { sha256 } from '../functions/sha'
import { gatherUserTokenFromSpotify } from '../functions/getToken'
import { useEffect, useState } from 'react'
import { getSession, startSession } from '../functions/startSession'
import { getUserDetails } from '../apis/playlist'
import PlaylistPage from './PlayList'
import { useOutletContext } from 'react-router-dom'
import { ContextType } from '../../models/contextType'

const SPOTIFY_CLIENT_ID = 'edcdc478bd3b486dbd641b390065c0cf'
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
    console.log(code)
    const user_token = await gatherUserTokenFromSpotify(code, redirectUri)
    console.log(user_token)
    startSession(user_token.access_token)
  } catch (err) {
    console.error(err)
  }
}

function Login() {
  const { userDetails, changeUserDetails } = useOutletContext<ContextType>()
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  useEffect(() => {
    // already in session
    const fecthUserDetails = async () => {
      if (code) {
        // true if redirected from spotify auth
        await fetchToken()
      } else if (!getSession()) {
        await initiateSpotifyAuthentication()
      }
      const data = await getUserDetails()

      changeUserDetails(data)
    }
    fecthUserDetails()
  }, [code])

  console.log(userDetails)
  if (!userDetails) {
    return <div>Loading user Info...</div>
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
        {userDetails && <PlaylistPage />}
      </>
    </div>
  )
}

export default Login
