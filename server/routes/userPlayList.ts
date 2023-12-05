import { Router } from 'express'
import * as db from '../db/functions/database'
import { addSongToPlaylist } from '../db/functions/addInfo'
import { getPlaylistCollaborators, getUserPlaylists } from '../db/functions/getInfo'

const router = Router()

//    /api/v1/user/playlists

router.get('/:userId', async (req, res) => {
  try {
    const userId = Number(req.params.userId)
    const playList = await getUserPlaylists(userId)
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

router.get('/get-users/:playlistId', async (req, res) => {
  try {
    const playlists_id = Number(req.params.playlistId)
    const users = await getPlaylistCollaborators(playlists_id)
    res.json({ users })
  } catch(err) {
    console.log(err)
    res.status(500).send('No songs sorry')
  }
})


export default router
