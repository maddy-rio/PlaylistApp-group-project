import connection from '../connection'


const  db = connection

export interface UserPlaylists {
  playlists_id: number
  name: string
  token: string
}
export async function getAllPlaylists(
 
): Promise<UserPlaylists[]> {
  const playlists = await db<UserPlaylists>('playlists_users').select('*')
  return playlists
}

export async function getUserPlaylists(
 spotifyId:string,
){
  const playlists = await db('playlists_users')
  .join('users','playlists_users.users_id','users.id' )
    .where('user_id', spotifyId)
    .join('playlists', 'playlists_users.playlists_id', 'playlists.id')
    .select('playlists_id as playlistsId', 'playlists.name', 'token')
  console.log(`from db function:`, playlists)
  return playlists
}



// TODO: get all playlist ids associated with a user id (for the playlist cards we display to the user)
// export async function getUserPlaylists(
//   db = connection,
//   user_id = Number,
// ): Promise<UserPlaylist[]> {
//   const playlist = await db<UserPlaylist>('playlists_users')
//     .select('*')
//     .where('user_id', user_id)
//   console.log(`db returning:`, playlist)
//   return playlist
// }

// TODO: get all users associated with a playlist id (so we can show playlist collaborators)

// TODO: add user to user table if they don’t already exist (when user logs into our site for the first time)

// TODO: add playlist to playlist table if it doesn’t already exist (when user adds a playlist to their dashboard)

// TODO: add ‘playlist to user’ entry to joined table if it doesn’t already exist