/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('tracks', table => {
    table.increments('id')
    table.string('track_id')
  })
}


/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
export async function down(knex) {
return knex.schema.dropTable('tracks')
}
