import { Router } from 'express'
import { requestPlaylist } from '../functions/requestPlaylist'

const router = Router()

// /api/v1/playlists

router.get('/:playlistName', async (req, res) => {
  try {
    const { playlistName } = req.params
    const data = await requestPlaylist(playlistName)
    res.json({
      message: data,
    })
  } catch (error) {
    res.json(error.message)
  }
})

export default router
