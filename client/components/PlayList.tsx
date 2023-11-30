import {User, Playlists} from '../../models/playlist'



const PlaylistPage = ({Playlists, User})  => {
  const renderPlaylists = () => {
    if (Playlists.length > 0) {
      return (
        <div>
          <h2>Hi {User.id}! Here&apos;s all the playlists your&apos;re collaborating on: </h2>
          {Playlists.map((Playlist) => (
            <div key={Playlist.id}>
              <h3>{Playlist.playlistName}</h3>
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <div>
          <h2>Hi {User.id}!
          <br></br>
          Get started by adding a playlist.
          </h2>
        </div>
      )
    }

  }
  return (<>
  <div>{renderPlaylists()}</div>
  </>)
} 

export default PlaylistPage