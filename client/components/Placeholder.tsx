import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Placeholder() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const [token, setToken] = useState<any>()

  const getSpotifyAccessToken = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          scope: 'user-read-private user-read-email',
        },
      })

      window.localStorage.setItem('access_token', token)

      return token
    } catch (e) {
      console.error(e)
    }
  }

  const fetchSpotifyData = async () => {
    // const token = await getSpotifyAccessToken()
    const artistParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer BQAd9KMT5yu3E66gGuPLHpa-jLuli4lGg5uee8eaVeaKPmvYZun08bjWwcQOVMO9je3e3HIDrU4zHQfUzN4mQ9oqvyMt9VK0aHapkSdDGo-fUk5bi0o`,
        // Authorization: `Bearer ${token}`,
      },
    }
    //   const CLIENT_ID = 'edcdc478bd3b486dbd641b390065c0cf'
    //   const CLIENT_SECRET = '8a5c13bc700040758a29b4175847c84a'

    //   // create the request object for spotify authentication
    //   const artistParameters = {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    //   }

    //   // send request to spotify authentication for access token
    //   const ACCESS_TOKEN = await fetch(
    //     'https://accounts.spotify.com/api/token',
    //     artistParameters,
    //   )
    //     .then((response) => response.json())
    //     .then((data) => data.access_token)
    //     .catch((error) => console.error('Error:', error))

    //   console.log('ACCESS_TOKEN', ACCESS_TOKEN)
    //   return ACCESS_TOKEN
    // }

    // setToken(token)

    // console.log('token', token)

    const data = await fetch(
      'https://api.spotify.com/v1/search?q=stan&type=album',
      artistParameters,
    ).then((response) => response.json())
    console.log(data) // Your Spotify data
  }

  return (
    <div>
      <h1>THIS IS A PLACEHOLDER COMPONENT</h1>
      <button onClick={fetchSpotifyData}>test</button>
    </div>
  )
}

export default Placeholder
