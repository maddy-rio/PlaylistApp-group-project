/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('playlists_users').del()
  await knex('playlists_users').insert([
    {  user_id: 1, playlist_id: 1 },
    {  user_id: 2, playlist_id: 2 },
    {  user_id: 3, playlist_id: 3 },
  ])
}
