/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('playlists', table => {
      table.increments('id')
      table.string('name')
      table.string('token')
      table.string('owner_id')
      table.string('spotify_playlist_id')
      table.unique('token')
    })
}


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('playlists')
}
