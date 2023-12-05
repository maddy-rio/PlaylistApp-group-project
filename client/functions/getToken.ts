import request from 'superagent'

const SPOTIFY_CLIENT_ID = 'e6902475a4424e50813fb15d818401c6'
const SPOTIFY_CLIENT_SECRET_ID = '88f21bdbd3424f3b8a7a489fc332dbaa'

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
