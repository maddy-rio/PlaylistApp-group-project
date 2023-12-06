import { useQuery } from '@tanstack/react-query'

import { useEffect, useState } from 'react'
import { songList } from '../apis/songList'
import Player from './Player'
import { getSession } from '../functions/startSession'
import { useOutletContext, useParams } from 'react-router-dom'
import Songs from './Songs'

import { ContextType } from '../../models/contextType'

const Songlist = () => {
  const { userDetails } = useOutletContext<ContextType>()

  const userImage = userDetails?.images[0]
  const playListId = useParams().playlistId as string

  const token = getSession() as string
  // const [playingTracks, setPlayingTracks] = useState('')
  const [tracksArray, setTrackArray] = useState<string[] | undefined>([])
  const [redoeredTracks,setRedoerededTracks] = useState<string[] | undefined>([])

  const {
    data: songs,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['songs'],
    queryFn: () => songList(playListId, token),
  })
  useEffect(()=>{

    if(songs){
      const trackUriArray =songs.map((item) => item.uri)
      setTrackArray(trackUriArray)
    }
  },[songs])

  if (isError) {
    return <p>Error</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  }
  

  function handleClick(index: number) {
    // setPlayingTracks(item.uri)
    setRedoerededTracks(tracksArray)
    console.log(index)
    const reorderedLinks = [
      ...tracksArray.slice(index),
      ...tracksArray.slice(0, index),
    ]
    setRedoerededTracks(reorderedLinks)

    // Update the state with the new order
  }

  console.log(tracksArray)
  return (
    <div>
      <h4>Today&apos;s recommend PlayList</h4>
      <Songs playlistId={playListId} />

      {songs.map((item, index) => (
        <div
          key={index}
          className="track-single d-flex justify-content-between p-2 m-1 rounded container-sm"
          onClick={() => handleClick(index)}
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
            {userImage ? (
              <img
                src={userImage.url}
                alt="user"
                className="track-image track-image-profile rounded-circle mx-2"
              />
            ) : (
              <img
                className="track-image track-image-profile rounded-circle mx-2"
                src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                alt=""
              />
            )}
            <img
              className="track-play-pause"
              src={'/images/play-button.png'}
              alt=""
            />
          </div>
        </div>
      ))}

      {tracksArray && (
        <div>
          {/* <Player trackUri={playingTracks} token={token} /> */}
          <Player trackUri={redoeredTracks} token={token} />
        </div>
      )}
    </div>
  )
}

export default Songlist
