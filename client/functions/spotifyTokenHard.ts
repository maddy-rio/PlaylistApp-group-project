const CLIENT_ID = 'edcdc478bd3b486dbd641b390065c0cf'
const CLIENT_SECRET = '8a5c13bc700040758a29b4175847c84a'

/**
 *
 * @returns
 *  hard coded values of the client_id and client_secret to generate spotify access token
 */
async function spotifyTokenHard() {
  const artistParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  }

  // send request for spotify access token
  const ACCESS_TOKEN = await fetch(
    'https://accounts.spotify.com/api/token',
    artistParameters,
  )
    .then((response) => response.json())
    .then((data) => data.access_token)
    .catch((error) => console.error('Error:', error))

  console.log('ACCESS_TOKEN', ACCESS_TOKEN)
  return ACCESS_TOKEN
}

export default spotifyTokenHard
