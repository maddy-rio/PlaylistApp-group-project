// import CreatePlaylist from './CreatePlaylist'
import { getUsersPlaylists, getUserDetails } from '../apis/playlist'
import { useQuery } from '@tanstack/react-query'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const initialData = {
  playlist_id: '',
  user_id: '',
}

const PlaylistPage = () => {
  const [userId, setUserId] = useState('')
  //get user details
  const {
    data: userInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserDetails,
  })
  //get user playlists
  const { data: playlists } = useQuery({
    queryKey: ['playlists'],
    queryFn: () => getUsersPlaylists(userInfo?.id),
  })

  useEffect(() => {
    if (userInfo) {
      setUserId(userInfo.id)
    }
  }, [userInfo])

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
          Hi {userInfo?.display_name}! Here&apos;s all the playlists you are
          collaborating on:
        </h3>
      </div>
      <div className="flex">
        {playlists?.map((playlist:any) => (
          <Link to={`/playlist/${playlist.playlistsId}`} key={playlist.id}>
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
