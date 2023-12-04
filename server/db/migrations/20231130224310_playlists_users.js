/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('playlists_users', (table) => {
    table.integer('playlists_id').references('playlists.id')
    table.integer('users_id').references('users.id')
    table.unique(['playlists_id', 'users_id'])
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('playlists_users')
}
