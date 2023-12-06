import { Router } from 'express'
import * as db from '../db/functions/database'
import { NewUserPlaylist, addSongToPlaylist } from '../db/functions/addInfo'
import { getPlaylistByToken, getUserDetails } from '../db/functions/getInfo'

const router = Router()

router.post('/db-add-playlist-to-user', async (req, res) => {
  try {
    const { playlistId, userId } = req.body
    console.log(playlistId, userId);
    
    const data = {
      playlists_id: Number(playlistId),
      users_id: Number(userId),
    }
    const data2 = await NewUserPlaylist(data)
    res.json({ data: data2 })
  } catch (err) {
    console.log(err)
    res.status(500).send('No songs sorry')
  }
})

router.get('/token/get', async (req, res) => {
  try {
    const token = req.query.token
    console.log(token)
    const data = await getPlaylistByToken(token as string)
    res.json({ data })
  } catch (err) {
    console.log(err)
    res.status(500).send('No songs sorry')
  }
})

router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId

    const playList = await db.getUserPlaylists(userId)

    res.json(playList)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/:playlistId', async (req, res) => {
  try {
    const playlists_id = Number(req.params.playlistId)

    const tracks_id = req.body.trackId
    const users_id = req.body.userId
    const result = await addSongToPlaylist(tracks_id, users_id, playlists_id)

    res.json(result)
  } catch (err) {
    console.log(err)
    res.status(500).send('No songs sorry')
  }
})

router.get('/getDbUserDetails/:spotifyUserId', async (req, res) => {
  try {
    const spotifyUserId = req.params.spotifyUserId
    const data = await getUserDetails(spotifyUserId)
    res.json({ data })
  } catch (err) {
    console.log(err)
    res.status(500).send('No songs sorry')
  }
})



export default router

// get userplaylist
