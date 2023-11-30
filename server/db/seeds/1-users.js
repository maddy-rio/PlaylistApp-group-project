/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, user_id: '12132859372' }, // Karl's user id
    { id: 2, user_id: 'madison-rio' }, // Maddy's user id
    { id: 3, user_id: '315trxhvgbgbjejjnw4gl4n46nxm' }, // Courtney's user id
  ])
}
