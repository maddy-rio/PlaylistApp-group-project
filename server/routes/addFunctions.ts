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

//Add token to playlist

router.post('/', async (req, res) => {
  try {
    const addTokenToPlaylist = req.body
    if (!addTokenToPlaylist) {
      res.sendStatus(400)
      return
    }
    const newPlaylist = await addTokenToPlaylist
    res.json({ newPlaylist })
  } catch (error) {
    res.status(500).json({
      error: `Something went wrong adding your token: ${error}`,
    })
  }
})

//Get playlist from table

router.get('/', async (req, res) => {
  try {
    const playlist = await 'playlists'
    res.json({ playlist })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
