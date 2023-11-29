// import { useFruits } from '../hooks/useFruits.ts'

import Login from './Login'
import Songs from './Songs'
import Dashboard from './Dashboard'
import { useEffect, useState } from 'react'

const CLIENT_ID = 'edcdc478bd3b486dbd641b390065c0cf'
const CLIENT_SECRET = '8a5c13bc700040758a29b4175847c84a'
const RESPONSE_TYPE = 'token'
const REDIRECT_URI = 'http://localhost:3000'
const Auth_ENDPOINT = 'https://accounts.spotify.com/api/authrize'

// const code = new URLSearchParams(window.location.search).get('code')
// console.log(code)
function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    // API Access Token

    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then((response) => response.json())
      .then((data) => setToken(data.access_token))
      .catch((error) => console.error('Error:', error))
  }, [])
  console.log(token)
  return (
    <>
      <div className="app">
        <Songs token={token} />
        {/* {code ? <Dashboard code={code}/> : <Login />} */}
        {/* <Login /> */}
        {/* <a
          href={`${Auth_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Log in with Spotify
        </a> */}
      </div>
    </>
  )
}

export default App
