import { addTrackToPlaylist, getUsersPlaylists } from '../apis/playlist'
import NewPlaylist from './NewPlaylist'

function Placeholder() {
  //  This component is handling the current user session
  //  currently authorisation scope is everything
  //  Placeholder is set up to test scopes
  //
  //  Access current session -- call getSession() for token

  async function handlePlaylists() {
    const data = await getUsersPlaylists()
    console.log(data.body)
  }

  async function handleAddToPlaylist() {
    const trackId = '7ggnbOaIL5u5unRbcL31ke'
    const playlistId = '59qlzhGMmajrcKowRl1GN1'
    const data = await addTrackToPlaylist({ trackId, playlistId })
    console.log(data.body)
  }

  return (
    <div>
      <h1>THIS IS A PLACEHOLDER COMPONENT</h1>
      <button onClick={handlePlaylists}>getUsersPlaylists</button>
      <button onClick={handleAddToPlaylist}>handleAddToPlaylist</button>
      <NewPlaylist />
    </div>
  )
}

export default Placeholder
