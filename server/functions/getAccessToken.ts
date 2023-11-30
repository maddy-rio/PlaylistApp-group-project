export async function accessToken() {
  try {
    const CLIENT_ID = 'edcdc478bd3b486dbd641b390065c0cf'
    const CLIENT_SECRET = '8a5c13bc700040758a29b4175847c84a'

    // create the request object for spotify authentication
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    }

    // send request to spotify authentication for access token
    const ACCESS_TOKEN = await fetch(
      'https://accounts.spotify.com/api/token',
      authParameters,
    )
      .then((response) => response.json())
      .then((data) => data.access_token)
      .catch((error) => console.error('Error:', error))

    return ACCESS_TOKEN
  } catch (error) {
    return error
  }
}
