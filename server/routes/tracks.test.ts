import { expect, it, vi, describe } from 'vitest'
import request from 'supertest'

import server from '../server'
import { getPlaylistTrackIds } from '../db/functions/getInfo'

vi.mock('../db/functions/getInfo')

describe('/:playlistId', () => {
  it('calls getPlaylistTrackIds', async () => {
    await request(server).get('/api/v1/tracks/1')
    expect(getPlaylistTrackIds).toHaveBeenCalled()
  })
})