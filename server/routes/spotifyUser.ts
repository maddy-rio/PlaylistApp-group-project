import { Router } from 'express'
import request from 'superagent'

const router = Router()

//    /api/v1/user

// CURRENT USER ENDPOINT SCOPES--- UNLOCKED*

// user profile details
router.get('/:token', async (req, res) => {
  try {
    const { token } = req.params
    const data = await request.get(`https://api.spotify.com/v1/me`).set({
      Authorization: `Bearer ${token}`,
    })
    res.json(data.body)
  } catch (error) {
    res.json(error.message)
  }
})

// user playlists
router.get('/playlists/:token', async (req, res) => {
  try {
    const { token } = req.params
    const data = await request
      .get(`https://api.spotify.com/v1/me/playlists`)
      .set({
        Authorization: `Bearer ${token}`,
      })
    res.json(data.body)
  } catch (error) {
    res.json(error.message)
  }
})

// user add to playlist
router.post('/playlist/add-track/:playlistId', async (req, res) => {
  try {
    const { playlistId } = req.params
    const { trackId, token } = req.body
    const data = await request
      .post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`)
      .set({
        Authorization: `Bearer ${token}`,
      })
      .send({
        uris: [`spotify:track:${trackId}`],
        position: 0,
      })
    return res.json({ data })
  } catch (error) {
    console.error('Error adding tracks to playlist:', error.response.body)
  }
})

//  user create a new playlist
router.post('/playlist/add-playlist/:name', async (req, res) => {
  try {
    const { name } = req.params
    const { description, token, isPublic, user_id } = req.body
    const data = await request
      .post(`https://api.spotify.com/v1/users/${user_id}/playlists`)
      .set({
        Authorization: `Bearer ${token}`,
      })
      .send({ name, description, public: isPublic })
    res.json({ data })
  } catch (error) {
    console.error(error.message)
  }
})

router.get(`/playlist/playlist-items`, async (req, res) => {
  try {
    const { playlistId, token } = req.query
    const data = await request
      .get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`)
      .set({
        Authorization: `Bearer ${token}`,
      })
    const dressedData = JSON.parse(data.text)
    return res.json({ data: dressedData })
  } catch (error) {
    console.error(error)
  }
})

// remove items in playlist
// view user tracks in playlist

export default router
