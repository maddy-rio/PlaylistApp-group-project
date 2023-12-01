import { Router } from 'express'
import * as db from '../db/functions/database'
import { UserPlaylist } from '../../models/playlist'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const playData: UserPlaylist[] = await db.getAllPlaylists()
    console.log(playData, ' routes')
    res.json({ playData })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


export default router
