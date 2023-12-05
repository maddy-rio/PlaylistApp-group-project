import {
  dbFetchTrackIds,
  findPlaylistTracks,
  getPlaylistItems,
} from '../apis/playlist'

interface Props {
  playlistId: number
}

function UpdateSpotifyPlaylistButton({ playlistId = 2 }: Props) {
  // this component should only render if the user is logged in and authenticated

  const handleClick = async () => {
    //  update the playlists that are in the spotify playlist
    //  fetch all the current songs in the database playlist
    //  fetch all the current songs in the spotify playlist
    //  find the tracks that dont exist in the spotify playlist
    //  load all the songs that don't exist into the spotify playlist
    // await findPlaylistTracks()
    // const platlistgetPlaylistItems = playlistId
    const { dbTracks, spotifyPlaylistId } = await dbFetchTrackIds(
      playlistId,
    ).then((data) => console.log(data))

    const spotifyTracks = await getPlaylistItems('4BUdzC67m7TKy0oMhCNVbC').then(
      (data) => data.data.items,
    )
    // const spotifyTracks = await getPlaylistItems(spotifyPlaylistId[0].spotify_playlist_id).then((data) => data.data.items)
    // const dbTrackIds = dbTracks.map((dbTrack:any) => dbTrack.id);
    console.log(dbTracks);
    
    // const uniqueSpotifyTracks = spotifyTracks.filter(dbTracks =>
    //   !dbTrackIds.includes(spotifyTrack.track.id)
    // );
  }


  return (
    <div className="spotify-update-button">
      <button onClick={handleClick}>
        Update the spotify playlist with recent submits
      </button>
    </div>
  )
}

export default UpdateSpotifyPlaylistButton
