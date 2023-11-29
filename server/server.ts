import express from 'express'
import * as Path from 'node:path'
import login from './routes/songs.ts'


// import playlistRoutes from './routes/playlist.ts'

const server = express()

server.use(express.json())

// server.use('/api/v1/playlist', playlistRoutes)
server.use('/api/v1/login',login)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
