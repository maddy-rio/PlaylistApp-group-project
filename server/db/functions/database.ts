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


// TODO: get all users associated with a playlist id (so we can show playlist collaborators)


// TODO: add user to user table if they don’t already exist (when user logs into our site for the first time)


// TODO: add playlist to playlist table if it doesn’t already exist (when user adds a playlist to their dashboard)
// AND THEN: add ‘playlist to user’ entry to joined table if it doesn’t already exist


// TODO: delete ‘playlist to user’ entry from joined table (when user removes playlist from dashboard)

