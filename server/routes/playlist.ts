import { Router } from 'express'
import { createPlaylist } from '../db/functions/addInfo'
import { Playlists } from '../../models/dbPlaylist'

const router = Router()


router.post('/add-playlist', async (req, res) => {
  try {
    const data: Playlists = req.body.playlist
    console.log(data);
    
    const newPlaylist = await createPlaylist(data)
    res.json({
      message: 'successfully added playlist to database' + newPlaylist,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
