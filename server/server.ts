import express from 'express'
import * as Path from 'node:path'
<<<<<<< HEAD
<<<<<<< HEAD
import bodyParser from 'body-parser'
=======
import login from './routes/songs.ts'
=======

import cors from 'cors'
import 'dotenv/config'

import spotifyUser from './routes/spotifyUser.ts'
import playlistRoutes from './routes/playlist.ts'
>>>>>>> main

>>>>>>> Bonnie


const server = express()

server.use(express.json())
server.use(cors())




server.use('/api/v1/playlist', playlistRoutes)

server.use('/api/v1/user', spotifyUser)

<<<<<<< HEAD
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// Include your Spotify routes
import spotifyRoutes from './routes/auth'
server.use('/api/spotify', spotifyRoutes)

// server.use('/api/v1/playlist', playlistRoutes)
server.use('/api/v1/login',login)
=======
>>>>>>> main

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
