import { Router } from 'express'
import SpotifyWebApi from 'spotify-web-api-node'

// const CLIENT_ID = 'edcdc478bd3b486dbd641b390065c0cf'
// const CLIENT_SECRET = '8a5c13bc700040758a29b4175847c84a'
// const redirect_uri = 'http://localhost:3000/callback';
const router = Router()

router.post('/', async (req, res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    clientId: 'edcdc478bd3b486dbd641b390065c0cf',
    clientSecret: '8a5c13bc700040758a29b4175847c84a',
    redirectUri: 'http://localhost:3000',
    
  })
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body['access_token'],
        refreshToken: data.body['refresh_token'],
        expiresIn: data.body['expires_in'],
      })
    })
    .catch(() => {
      res.sendStatus(500).json({ message: 'Something went wrong' })
    })
})

export default router
