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
      <div>
        <img src={userInfo.images[0].url} />
        <h2>Hi, {userInfo?.display_name}</h2>
      </div>
      {playlists?.map((playlist) => (
        <Link to={`/playList/${playlist.id}`} key={playlist.id}>
          <div key={playlist.id}>
            <h3>{playlist.name}</h3> <br></br>
            {playlist.images.length !== 0? <img src={playlist?.images[0]?.url} alt={playlist?.name}  style={{ height: '64px', width: '64px' }} /> : null}
            <p>{playlist.description}</p>
            <br></br>
            <p>Total tracks: {playlist.tracks.total} </p>
            <br></br>
          </div>
        </Link>
      ))}
    </>
  )
}

export default PlaylistPage
