/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('playlists').del()
  await knex('playlists').insert([
    { id: 1, playlist_id: '44A5th7x5wlXxSwcnO7T9E' }, // Karl's playlist
    { id: 2, playlist_id: '2spviMMQXcRtrxDlcIPJta' }, // Maddy's playlist
    { id: 3, playlist_id: '1Gyu0Nea6xlTNfA33qlxhO' }, // Courtney's playlist
  ])
}
