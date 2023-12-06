import { Flex, Button, Heading, Text } from '@radix-ui/themes'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import Navigation from '../components/Navigation'
import Canvas from '../components/Canvas'

import { useParams, useOutletContext } from 'react-router-dom'
import { getPlaylistInfo } from '../apis/playlist'
import { useQuery } from '@tanstack/react-query'

import Track from '../components/Track'
import Songs from '../components/Songs'
import Player from '../components/Player'
import { ContextType } from '../../models/contextType'
import { getSession } from '../functions/startSession'
import { useEffect, useState } from 'react'
import { songList } from '../apis/songList'

const CurrentPlaylist = () => {
  const { userDetails } = useOutletContext<ContextType>()

  const userImage = userDetails?.images[0]
  const playListId = useParams().playlistId as string
  const [tracksArray, setTrackArray] = useState<string[] | undefined>([])
  const [redoeredTracks, setRedoerededTracks] = useState<string[] | undefined>(
    [],
  )

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

  useEffect(() => {
    if (songs) {
      const trackUriArray = songs.map((item) => item.uri)
      setTrackArray(trackUriArray)
    }
  }, [songs])

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
  const todaysTheme = 'A song tells the story of the day'

  return (
    <>
      <Flex width="100%" height="100%" className="app">
        <Flex direction="column" width="100%" mx="3" my="2">
          <Navigation />
          <Flex direction="column" justify="end" height="100%" m="7">
            <Heading as="h1" align="left" className="theme-h1">
              Today's Theme:
            </Heading>

            <Heading as="h2" className="theme-h2 gradient-theme">
              <em>{todaysTheme}</em>
            </Heading>
            <Songs playlistId={playListId as string} />
            <div className="player-box">
              <Heading as="h3" className="player-h3">
                Currently Playing
              </Heading>
              <div className="player">
                {/* <button href="google.com"></button> */}
              </div>
            </div>
          </Flex>
          <div className="background">
            <Canvas />
          </div>
        </Flex>

        <Flex direction="column" width="100%" mt="2" mr="2" mb="-3">
          <div className="gradient-box">
            <Flex align="center" justify="end" m="3">
              <Button size="2" className="green-button">
                <svg height="20" width="20" viewBox="0 0 24 24">
                  <path
                    className="svg-icon-black"
                    d="m11,0C4.92,0,0,4.92,0,11s4.92,11,11,11,11-4.92,11-11S17.08,0,11,0Zm5.04,15.87c-.2.32-.62.43-.94.23-2.58-1.58-5.83-1.94-9.66-1.06-.37.08-.74-.15-.82-.52-.08-.37.15-.74.52-.82,4.19-.96,7.78-.55,10.68,1.23.32.2.43.62.23.94Zm1.35-3c-.25.4-.78.53-1.18.28-2.96-1.82-7.46-2.34-10.96-1.28-.45.14-.93-.12-1.07-.57-.14-.45.12-.93.57-1.07,4-1.21,8.96-.63,12.36,1.46.4.25.53.78.28,1.18Zm.12-3.12c-3.55-2.11-9.39-2.3-12.78-1.27-.54.16-1.12-.14-1.28-.69-.16-.54.14-1.12.69-1.28,3.89-1.18,10.34-.95,14.43,1.47.49.29.65.92.36,1.41-.29.49-.92.65-1.41.36Z"
                  />
                </svg>
                Play on Spotify
              </Button>
            </Flex>

            <Flex direction="column" m="7">
              <Heading as="h1" align="left" className="theme-h1">
                Playlist
              </Heading>
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
            </Flex>
          </div>
        </Flex>
      </Flex>
    </>
  )
}

export default CurrentPlaylist
