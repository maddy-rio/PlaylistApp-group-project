import express from 'express'
import * as Path from 'node:path'
import SpotifyWebApi from 'spotify-web-api-node'
import cors from 'cors'
import 'dotenv/config'
import login from './routes/login.ts'
import refresh from './routes/refreshToken.ts'
// import playlistRoutes from './routes/playlist.ts'

const server = express()

server.use(express.json())
server.use(cors())


// server.use('/api/v1/playlist', playlistRoutes)
server.use('/api/v1/login',login)
server.use('/api/v1/refresh',refresh)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
// server.listen(3001)

// server.post('/login', (req, res) => {
//   const code = req.body.code

//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: process.env.REDIRECT_URI,
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//   })

//   spotifyApi
//     .authorizationCodeGrant(code)
//     .then((data) => {
//       res.json({
//         accessToken: data.body.access_token,
//         refreshToken: data.body.refresh_token,
//         expiresIn: data.body.expires_in,
//       })
//     })
//     .catch((err) => {
//       console.log(err)
//       res.sendStatus(400)
//     })
// })

export default server
