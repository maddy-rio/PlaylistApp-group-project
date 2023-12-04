import { Route } from 'react-router'
import { SuperAgentRequest } from 'superagent'
import express from 'express'
import { getAllTracks } from '../db/functions/getInfo'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const playlistId = Number(req.params)
    const tracks = await getAllTracks(playlistId)
    res.json(tracks)
  } catch (err) {
    console.log(err)
    res.status(500).send('No songs sorry')
  }
})

export default router
