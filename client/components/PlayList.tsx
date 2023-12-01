// import CreatePlaylist from './CreatePlaylist'
import { getPlaylist } from '../apis/playlist'
import { useQuery } from '@tanstack/react-query'
import { UserPlaylist } from '../../models/playlist'
import { Welcome } from '../../models/temp'

const initialData = {
  playlist_id: '',
  user_id: '',
}

const PlaylistPage = () => {
  const {
    data: playlists,
    isLoading,
    error,
  } = useQuery<Welcome[]>({
    queryKey: ['playlists'],
    queryFn: getPlaylist,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error</div>
  }
  console.log(playlists?.map((p) => p.description), 'playlists')
  // const renderPlaylists = () => {
  return (
    <>
      {playlists?.map((Playlist) => (
        <div key={Playlist.id}>
          {Playlist.name} <br></br>
          
          {Playlist.description}
          <br></br>
          total tracks: {Playlist.tracks.total} <br></br>

          <img src={Playlist.images[1].url} />
        </div>
      ))}
    </>
  )
  //   if (playlists.length > 0) {
  //     return (
  //       <div>

  //         {/* <h2>Hi {User.id}! Here&apos;s all the playlists your&apos;re collaborating on: </h2> */}
  //         {/* {playlists?.map((Playlist) => (
  //           // <div key={Playlist.id}>
  //           //   <h3>{Playlist.}</h3>
  //           //   <CreatePlaylist />
  //           // </div>
  //         ))} */}
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <h2>Hi {User.id}!
  //         <br></br>
  //         Get started by adding a playlist.
  //         </h2>
  //         <CreatePlaylist />
  //       </div>
  //     )
  //   }

  // }
  // return (<>

  // </>)
}

export default PlaylistPage
