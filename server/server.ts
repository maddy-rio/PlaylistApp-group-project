import express from 'express'
import * as Path from 'node:path'

import cors from 'cors'
import 'dotenv/config'

import spotifyUser from './routes/spotifyUser.ts'
import playlistRoutes from './routes/playlist.ts'



const server = express()

server.use(express.json())
server.use(cors())




server.use('/api/v1/playlist', playlistRoutes)

server.use('/api/v1/user', spotifyUser)


if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
