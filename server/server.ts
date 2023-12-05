import express from 'express'
import * as Path from 'node:path'
import bodyParser from 'body-parser'
// import login from './routes/songs.ts'
import cors from 'cors'
import 'dotenv/config'
import spotifyUser from './routes/spotifyUser.ts'
import tracksRoutes from './routes/tracks.ts'
import addUserRouter from './routes/addFunctions.ts'
import userPlaylist from './routes/userPlayList.ts'

const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/v1/tracks', tracksRoutes)
server.use('/api/v1/user/playlists', userPlaylist)

server.use('/api/v1/user', spotifyUser)

server.use('/api/v1/newuser', addUserRouter)

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// Include your Spotify routes

// server.use('/api/v1/playlist', playlistRoutes)


if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
