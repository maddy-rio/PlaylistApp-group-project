/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tracks').insert([
    {id: 1, track_id: '1yaFHifoHlN5MEtL5YEgA4'},
    {id: 2, track_id: '5IQou2aojeIetE99Gy7Izr'},
    {id: 3, track_id: '1Cj2vqUwlJVG27gJrun92y'}
  ]);
}
