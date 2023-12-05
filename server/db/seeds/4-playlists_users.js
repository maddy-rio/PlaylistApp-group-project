/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('playlists_users').insert([
    {  users_id: 1, playlists_id: 1 },
    {  users_id: 2, playlists_id: 2 },
    {  users_id: 3, playlists_id: 3 },
    {  users_id: 2, playlists_id: 1 },
    {  users_id: 3, playlists_id: 1 },
  ])
}
