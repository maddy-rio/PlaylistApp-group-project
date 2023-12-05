import request from 'superagent'

const SPOTIFY_CLIENT_ID = 'edcdc478bd3b486dbd641b390065c0cf'
const SPOTIFY_CLIENT_SECRET_ID = '8a5c13bc700040758a29b4175847c84a'

export const gatherUserTokenFromSpotify = async (
  code: any,
  redirect_uri: string,
) => {
  const checkVerifier = localStorage.getItem('code_verifier')

  // Encode the credentials using base64
  const encodedCredentials = btoa(
    SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET_ID,
  )

  const res = await request
    .post('https://accounts.spotify.com/api/token')
    .set({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + encodedCredentials,
    })
    .send({
      client_id: SPOTIFY_CLIENT_ID,
      grant_type: 'authorization_code',
      code,
      redirect_uri,
      code_verifier: checkVerifier,
    })
  return res.body
}
