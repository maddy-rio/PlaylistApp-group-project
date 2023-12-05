/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('playlists_tracks').insert([
    {playlists_id: 1, tracks_id: 1, users_id: 1, date:'3/12/2023'},
    {playlists_id: 2, tracks_id: 2, users_id: 2, date:'3/12/2023'},
    {playlists_id: 3, tracks_id: 3, users_id: 3, date:'3/12/2023'},
    //  test
    {playlists_id: 2, tracks_id: 4, users_id: 3, date:'3/12/2023'},
    {playlists_id: 2, tracks_id: 5, users_id: 3, date:'3/12/2023'},
    {playlists_id: 2, tracks_id: 6, users_id: 3, date:'3/12/2023'},
    {playlists_id: 2, tracks_id: 7, users_id: 3, date:'3/12/2023'},
    {playlists_id: 2, tracks_id: 8, users_id: 3, date:'3/12/2023'},
    {playlists_id: 2, tracks_id: 9, users_id: 3, date:'3/12/2023'},
    {playlists_id: 2, tracks_id: 10, users_id: 3, date:'3/12/2023'},
  ]);
}
