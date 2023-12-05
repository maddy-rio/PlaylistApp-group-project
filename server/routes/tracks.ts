import express from 'express'
import { getPlaylistTrackIds,addTrackToPlaylist } from '../db/functions/getInfo'

const router = express.Router()

router.get('/:playlistId', async (req, res) => {
  try {
   
    const playlistId = Number(req.params.playlistId)
   
    const tracks = await getPlaylistTrackIds(playlistId)
    res.json(tracks)
  } catch (err) {
    console.log(err)
    res.status(500).send('No songs sorry')
  }
})



export default router
