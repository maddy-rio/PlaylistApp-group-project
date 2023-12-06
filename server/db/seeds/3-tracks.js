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
    // jatin
    {id: 4, track_id: '24WpMTZgdms4wTwjjazAyQ'},
    {id: 5, track_id: '1Cj2vqUwlJVG27gJrun92y'},
    {id: 6, track_id: '5uaERBXNDMimmF4HSpsiNe'},
    {id: 7, track_id: '5NmIhWgyGQZPt0nHzXjeU7'},
    {id: 8, track_id: '4qhnCaxJrz8NJMZamhKOwV'},
    {id: 9, track_id: '27wagGe4GzPzyFCWjtnNsG'},
    {id: 10, track_id: '70pSulW3pIqsi4s38lCQ7B'},
    {id: 11, track_id: '6b7dulnFUeiCv0QX0ercjz'},
    {id: 12, track_id: '4WR5W2oTZrcVLIPM7KuRLG'},
    {id: 13, track_id: '6mowYD3217gX6kDx02P5Un'},
    {id: 14, track_id: '1GgvIZEIJ0UaqsicCZMFp0'},
  ]);
}
// https://open.spotify.com/track/5uaERBXNDMimmF4HSpsiNe?si=7fb54d911fc74897
// https://open.spotify.com/track/5NmIhWgyGQZPt0nHzXjeU7?si=7b6a1221e2714e76
// https://open.spotify.com/track/4qhnCaxJrz8NJMZamhKOwV?si=708c58e1948a4f42
// https://open.spotify.com/track/27wagGe4GzPzyFCWjtnNsG?si=d01532b207474aa5
// https://open.spotify.com/track/70pSulW3pIqsi4s38lCQ7B?si=5031248370124d12
// https://open.spotify.com/track/6b7dulnFUeiCv0QX0ercjz?si=dbd48c5fc9774b8e
// https://open.spotify.com/track/4WR5W2oTZrcVLIPM7KuRLG?si=97087be52a894680
// https://open.spotify.com/track/6mowYD3217gX6kDx02P5Un?si=b24e5742f0b5474a
// https://open.spotify.com/track/1GgvIZEIJ0UaqsicCZMFp0?si=3a2b6e21e238422a