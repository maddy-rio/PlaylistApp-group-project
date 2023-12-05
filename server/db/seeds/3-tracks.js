/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tracks').insert([
    {id: 1, track_id: '1yaFHifoHlN5MEtL5YEgA4'},
    {id: 2, track_id: '5IQou2aojeIetE99Gy7Izr'},
    {id: 3, track_id: '1Cj2vqUwlJVG27gJrun92y'},
    //  test
    {id: 4, track_id: '5IQou43534aojeIetE99Gy7Izr'},
    {id: 5, track_id: '5IQou2534543534aojeIetE99Gy7Izr'},
    {id: 6, track_id: '5IQou2a5345435ojeIetE99Gy7Izr'},
    {id: 7, track_id: '5IQou2a34534534ojeIetE99Gy7Izr'},
    {id: 8, track_id: '5IQou2ao345345345345jeIetE99Gy7Izr'},
    {id: 9, track_id: '5IQou2ao543543jeIetE99Gy7Izr'},
    {id: 10, track_id: '5IQou2ao5345435345jeIetE99Gy7Izr'},
  ]);
}
