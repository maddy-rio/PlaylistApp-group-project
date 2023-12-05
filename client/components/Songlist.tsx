import { useQuery } from '@tanstack/react-query'

import { useState } from 'react'
import { songList } from '../apis/songList'
import Player from './Player'
import { getSession } from '../functions/startSession'
import { useOutletContext, useParams } from 'react-router-dom'
import Songs from './Songs'
import { Album } from '../../models/song.ts'
import { ContextType } from '../../models/contextType'

const Songlist = () => {
  const { userDetails } = useOutletContext<ContextType>()
  console.log(userDetails)
  const userImage = userDetails?.images[0] 
  const playListId = useParams().playlistId as string
  console.log(userImage)

  const token = getSession() as string
  const [playingTracks, setPlayingTracks] = useState('')
  const {
    data: songs,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['songs'],
    queryFn: () => songList(playListId, token),
  })

  if (isError) {
    return <p>Error</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  }

  function handleClick(item: Album) {
    setPlayingTracks(item.uri)
  }

  console.log(songs)
  return (
    <div>
      <h4>Today&apos;s recommend PlayList</h4>
      <Songs playlistId={playListId} />

      {songs.map((item, index) => (
        <div
          key={index}
          className="track-single d-flex justify-content-between p-2 m-1 rounded container-sm"
          onClick={() => handleClick(item)}
          role="button"
        >
          <div className="track-single-details d-flex">
            <img
              src={item?.album.images[0]?.url}
              alt={item.name}
              className="track-image rounded"
            />
            <div className="track-artist ml-3">
              <p>
                <b>{item.name}</b>
              </p>
              <div className="">
                <p className="inline">
                  {item.explicit && '🅴 '}
                  {item?.artists[0].name}
                </p>
              </div>
            </div>
          </div>
          <div className="track-single-user d-flex align-items-center">
            {userImage? <img src={userImage.url} alt="user"  className="track-image track-image-profile rounded-circle mx-2" /> : 
            <img
              className="track-image track-image-profile rounded-circle mx-2"
              src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
              alt=""
            />}
            <img
              className="track-play-pause"
              src={'/images/play-button.png'}
              alt=""
            />
          </div>
        </div>
      ))}

      {playingTracks && (
        <div>
          <Player trackUri={playingTracks} token={token} />
        </div>
      )}
    </div>
  )
}

export default Songlist
