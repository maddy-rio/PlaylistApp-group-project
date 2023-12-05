// import CreatePlaylist from './CreatePlaylist'
import { getUsersPlaylists } from '../apis/playlist'
import { useQuery } from '@tanstack/react-query'

import { Link, useOutletContext } from 'react-router-dom'
import { ContextType } from '../../models/contextType'

interface playlistProps {
  playlistsId: string
  name: string
  id: string
}

const PlaylistPage = () => {
  const { userDetails } = useOutletContext<ContextType>()
  const {
    data: playlists,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['playlists'],
    queryFn: () => getUsersPlaylists(userDetails?.id),
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
        {/* <div className="flex-d">
        {/* <img src={userInfo.images[0].url} /> */}
        <h3>
          Hi {userDetails?.display_name}! Here&apos;s all the playlists you are
          collaborating on:
        </h3>
      </div>
      <div className="flex">
        {playlists?.map((playlist: playlistProps, index: number) => (
          <Link to={`/playlist/${playlist.playlistsId}`} key={index}>
            <div key={playlist.id}>
              <h4>{playlist.name}</h4> <br></br>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default PlaylistPage
