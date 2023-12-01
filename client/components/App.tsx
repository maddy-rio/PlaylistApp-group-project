// import { useFruits } from '../hooks/useFruits.ts'

import Songs from './Songs'
import { useEffect, useState } from 'react'
import UserProfile from './UserProfile'

const CLIENT_ID = 'edcdc478bd3b486dbd641b390065c0cf'
const CLIENT_SECRET = '8a5c13bc700040758a29b4175847c84a'

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
        <UserProfile />
      </div>
    </>
  )
}

export default App
