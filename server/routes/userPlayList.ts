import { Router } from 'express'
import * as db from '../db/functions/database'


const router = Router()



router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    console.log(userId)
    const playList = await db.getUserPlaylists(userId)
    console.log(playList)
    res.json( playList )
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})



export default router