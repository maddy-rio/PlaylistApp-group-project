import React from 'react'

// Create the authorization URL

const CLIENT_ID = 'edcdc478bd3b486dbd641b390065c0cf'
const REDIRECT_URI = 'http://localhost:5173/callback'
const SCOPE='streaming user-read-private user-read-email user-read-currently-playing user-library-read user-library-modify user-read-playback-state user-modify-playback-state'
const RESPONSE_TYPE = 'code'
const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&show_dialog=true`
  
const Login = () => {
  return <div>
   <a href={AUTH_URL}>Log in with Spotity</a>
    </div>
}

export default Login

