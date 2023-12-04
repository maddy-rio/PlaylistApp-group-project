import { Router } from 'express'
import { post } from 'superagent'

const router = Router()

router.get('/callback', async (req, res) => {
  try {
    const code = req.query.code
    console.log('Received code:', code)
    const tokenResponse = await post('https://accounts.spotify.com/api/token')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        grant_type: 'authorization_code',
        code: code as string,
        redirect_uri: 'http://localhost:1573/callback',
        client_id: '453c32bfdcdb45f9a05a140d5069f66d',
        client_secret: '8f5a28fb33de41ec9dc189471efa8301',
      })

    console.log('Token Response:', tokenResponse.body)

    const accessToken = tokenResponse.body.access_token
    console.log('Token Response:', tokenResponse.body)
    res.send({ accessToken })
  } catch (error) {
    console.error('Error:')
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
