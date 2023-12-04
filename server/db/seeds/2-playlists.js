/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('playlists').insert([
    { id: 1, name: 'Glitch Hop Happy Hour', token: 'ABC123' }, // Karl's playlist
    { id: 2, name: 'K Pop Jams', token: 'CDE456' }, // Maddy's playlist
    { id: 3, name: 'Aussie Hip Hop House', token: 'FGH789'}, // Courtney's playlist
  ])
}
