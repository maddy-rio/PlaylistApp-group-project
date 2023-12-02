const CLIENT_ID = 'af9d151622404d30bbcf34dfe4ceea67'
const CLIENT_SECRET = 'c6a9d41b71124e81b5456630579f503c'

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
