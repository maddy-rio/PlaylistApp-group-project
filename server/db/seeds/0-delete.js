/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('playlists_tracks').del()
  await knex('playlists_users').del()
  await knex('tracks').del()
  await knex('playlists').del()
  await knex('users').del()
}
