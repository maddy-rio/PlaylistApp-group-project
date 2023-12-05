import express from 'express'
import { newUser } from '../db/functions/addInfo'
import { Profile } from '../../models/addInfo'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const addUser = req.body as Profile
    if (!addUser) {
      res.sendStatus(400)
      return
    }
    const user = await newUser(addUser)
    res.json({ user })
  } catch (error) {
    res.status(500).json({
      error: `Something went wrong adding your user: ${error}`,
    })
  }
})

export default router
