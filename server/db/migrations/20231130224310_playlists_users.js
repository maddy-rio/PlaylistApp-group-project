/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('playlists_users', (table) => {
    table.integer('playlist_id').references('playlists.id')
    table.integer('user_id').references('users.id')
    table.unique(['playlist_id', 'user_id'])
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('playlists_users')
}
