import { Router } from 'express'
import * as db from '../db/functions/database'

const router = Router()

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

// router.post('/:playlistId', async (req, res) => {
//   try {
//     const playlistId = Number(req.params.playlistId)
//     const trackId = Number(req.body.trackId)
// const {userId, trackId}=req.body
//     const result = await db.addSongToPlaylist({ playlistId, trackId , userId })
//     console.log(result)
//     res.json(result)
//   } catch (err) {
//     console.log(err)
//     res.status(500).send('No songs sorry')
//   }
// })

export default router
