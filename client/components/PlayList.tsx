// import CreatePlaylist from './CreatePlaylist'
import { getUsersPlaylists, getUserDetails } from '../apis/playlist'
import { useQuery } from '@tanstack/react-query'
import { UserPlaylist } from '../../models/playlist'
import { Welcome } from '../../models/temp'
import { Link } from 'react-router-dom'

const initialData = {
  playlist_id: '',
  user_id: '',
}

const PlaylistPage = () => {
  const { data: playlists } = useQuery({
    queryKey: ['playlists'],
    queryFn: getUsersPlaylists,
  })

  const {
    data: userInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserDetails,
  })
  console.log(playlists)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error</div>
  }

  return (
    <>
      <h2>Hi, {userInfo?.body?.display_name}</h2>

      {playlists?.map((playlist) => (
        <Link to={`/playList/${playlist.id}`} key={playlist.id}>
          <div key={playlist.id}>
            <h3>{playlist.name}</h3> <br></br>
            <p>{playlist.description}</p>
            <br></br>
            <p>Total tracks: {playlist.tracks.total} </p>
            <br></br>
            <img src={playlist?.images[0]?.url} alt={playlist?.name} />
          </div>
        </Link>
      ))}
    </>
  )
}

export default PlaylistPage
