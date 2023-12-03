
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('playlist').del()
  await knex('playlist').insert([

    {id: 1, playlistName: 'Friend Jams'},
    {id: 2, playlistName: 'Summer Vibes'},
    {id: 3, playlistName: 'Study Hits'}
  ]);
}
