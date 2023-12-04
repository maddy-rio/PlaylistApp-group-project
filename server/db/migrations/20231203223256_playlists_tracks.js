/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('playlists_tracks', (table) => {
    table.integer('playlists_id').references('playlists.id')
    table.integer('tracks_id').references('tracks.id')
    table.integer('users_id').references('users.id')
    table.string('date')
    table.unique(['playlists_id', 'tracks_id'])
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('playlists_tracks')
}
