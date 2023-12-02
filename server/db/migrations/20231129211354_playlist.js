
export async function up(knex) {
  await knex.schema.createTable('playlist', (table) => {
    table.increments('id')
    table.string('playlistName')
  })
}


export async function down(knex) {
  await knex.schema.dropTable('playlist')
}
