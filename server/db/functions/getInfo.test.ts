import * as db from '../functions/getInfo'
import { describe, it, expect, beforeAll, beforeEach } from 'vitest'

import connection from '../connection'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getAllTasks', () => {
  it('gets all song ids connected to a playlist id', async () => {
    const allWins = await db.getPlaylistByToken("ABC123")
    expect(allWins).toHaveLength(1)
  })
})

describe('addPlaylistToUser', () => {
  it('adds playlist id and userid to join table', async () => {
    const allWins = await db.addPlaylistToUser(1, 2)
    expect(allWins).toHaveLength(1)
  })
})



