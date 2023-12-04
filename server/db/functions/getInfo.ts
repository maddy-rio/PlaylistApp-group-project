import connection from "../connection";

const db = connection

export function getAllTracks(playlistId : number){
  return db
    .select('*')
    .from('playlists_tracks')
    .where('playlists_id', playlistId)

} 
