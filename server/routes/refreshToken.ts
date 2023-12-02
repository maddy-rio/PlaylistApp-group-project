import { Router } from 'express'
import SpotifyWebApi from 'spotify-web-api-node'
import cors from 'cors'
import 'dotenv/config'

const router = Router()


router.post('/', (req, res) => {
  const refreshToken = req.body.refreshToken
  console.log(refreshToken)
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body['access_token'],

        expiresIn: data.body['expires_in'],
      })
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(400)
    })
})

export default router