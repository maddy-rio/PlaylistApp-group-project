import { codeVerifier } from '../functions/generateRandomString'
import { base64encode } from '../functions/base64encode'
import { sha256 } from '../functions/sha'
import { gatherUserTokenFromSpotify } from '../functions/getToken'
import { useEffect } from 'react'
import { getSession, startSession } from '../functions/startSession'
import { getUserDetails, getUserInfoFromDb } from '../apis/playlist'
import Dashboard from '../pages/Dashboard'
import { useOutletContext } from 'react-router-dom'
import { ContextType } from '../../models/contextType'

const SPOTIFY_CLIENT_ID = 'e6902475a4424e50813fb15d818401c6'
const redirectUri = 'http://localhost:5173/login'

// TypeError: Cannot destructure property 'userDetails' of 'useOutletContext(...)' as it is null.
//     at Login (http://localhost:5173/client/components/Login.tsx?t=1701759555829:77:11)

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

const getToken = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
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
    const fetchUserDetails = async () => {
      if (code) {
        await getToken()
      } else if (!getSession()) {
        await initiateSpotifyAuthentication()
      }
      const data = await getUserDetails()
      changeUserDetails(data)
      const user = await getUserInfoFromDb(data.id).then(
        (data) => data.body.data[0]?.user_id,
      )
      if (user) {
        window.location.href = '/dashboard'
      } else {
        window.location.href = '/newuser/' + data.id
      }
    }
    fetchUserDetails()
  }, [code])

  console.log(userDetails)
  if (!userDetails) {
    return <div>Loading user Info...</div>
  }
  return (
    <>
      <Dashboard />
    </>
  )
}

export default Login
