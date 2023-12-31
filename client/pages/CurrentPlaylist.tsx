import { Flex, Button, Heading, Text, Dialog } from '@radix-ui/themes'
import Navigation from '../components/Navigation'
import Canvas from '../components/Canvas'
import { PlusCircledIcon, ArrowLeftIcon } from '@radix-ui/react-icons'

import { useParams, useOutletContext } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getSession } from '../functions/startSession'
import { useEffect, useState } from 'react'

import Songs from '../components/Songs'
import Player from '../components/Player'
import { ContextType } from '../../models/contextType'
import { songList } from '../apis/songList'
import { getPlaylistName } from '../apis/getInfo'
import { Album } from '../../models/song'

const CurrentPlaylist = () => {
  const { userDetails } = useOutletContext<ContextType>()

  const userImage = userDetails?.images[0]
  const playListId = useParams().playlistId as string
  const [tracksArray, setTrackArray] = useState<string[] | undefined>([])
  const [reorderedTracks, setReorderedTracks] = useState<string[] | undefined>(
    [],
  )

  const token = getSession() as string

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
  console.log(getSession())

  function handleClick(index: number) {
    // setPlayingTracks(item.uri)
    setReorderedTracks(tracksArray)
    console.log(index)
    const reorderedLinks = [
      ...tracksArray.slice(index),
      ...tracksArray.slice(0, index),
    ]
    setReorderedTracks(reorderedLinks)

    // Update the state with the new order
  }
  const todaysTheme = 'A song that tells a story'

  return (
    <>
      <Flex width="100%" height="100%" className="app">
        <Flex direction="column" width="100%" mx="3" my="2">
          <Navigation />
          <Flex>
          <Button variant="ghost" size="3" style={{color: 'white'}}>
            <ArrowLeftIcon width="20" height="20"/>
            Back to Playlists
          </Button>
          </Flex>
          <Flex direction="column" justify="end" height="100%" className="theme-box" m="7">
            <Heading as="h1" align="left" className="playlist-h1">
              Today's Theme
            </Heading>

            <Heading as="h2" className="theme-h2 gradient-theme">
              <em>Your favourite Pippin song</em>
            </Heading>
            <div className="player-box">
              <Heading as="h3" className="player-h3">
                Currently Playing
              </Heading>
              <div className="player">
              {tracksArray && (
                <div>
                  <Player trackUri={reorderedTracks} token={token} />
                </div>
              )}
              </div>
            </div>
          </Flex>
          <div className="background">
            <Canvas />
          </div>
        </Flex>

        <Flex direction="column" width="100%" mt="2" mr="2" mb="-3" className='scroll-inside'>
          <div className="gradient-box">
            {/* <Flex align="center" justify="end" m="3">
              <Button size="2" className="green-button">
                <svg height="20" width="20" viewBox="0 0 24 24">
                  <path
                    className="svg-icon-black"
                    d="m11,0C4.92,0,0,4.92,0,11s4.92,11,11,11,11-4.92,11-11S17.08,0,11,0Zm5.04,15.87c-.2.32-.62.43-.94.23-2.58-1.58-5.83-1.94-9.66-1.06-.37.08-.74-.15-.82-.52-.08-.37.15-.74.52-.82,4.19-.96,7.78-.55,10.68,1.23.32.2.43.62.23.94Zm1.35-3c-.25.4-.78.53-1.18.28-2.96-1.82-7.46-2.34-10.96-1.28-.45.14-.93-.12-1.07-.57-.14-.45.12-.93.57-1.07,4-1.21,8.96-.63,12.36,1.46.4.25.53.78.28,1.18Zm.12-3.12c-3.55-2.11-9.39-2.3-12.78-1.27-.54.16-1.12-.14-1.28-.69-.16-.54.14-1.12.69-1.28,3.89-1.18,10.34-.95,14.43,1.47.49.29.65.92.36,1.41-.29.49-.92.65-1.41.36Z"
                  />
                </svg>
                Play on Spotify
              </Button>
            </Flex> */}

            <Flex direction="column" m="9">
              <Heading as="h1" align="left" className="playlist-h1">
                Playlist
              </Heading>
              <Heading as="h2" align="left" className="playlist-h2">
                 Playlist name
              </Heading>
              <Text>Access token: 123456 </Text>
              <Flex justify="between" className='filtering'>
                <Text className="filter-today">Added today</Text>
                <Text className="filter-none">All songs</Text>
              </Flex>
              <Flex direction='column' className="playlist-songs">

                <Dialog.Root>
                  <Dialog.Trigger>
                    <Button size="3" className='add-song'>
                      <PlusCircledIcon width="28px" height="28px"/>
                      Add your song
                    </Button>
                  </Dialog.Trigger>

                  <Dialog.Content style={{ maxWidth: 560 }}>
                    <Dialog.Title>Add a song</Dialog.Title>
                    <Songs playlistId={playListId as string} />
                  </Dialog.Content>
                </Dialog.Root>
                
                {songs.map((item, index) => (
                <div
                  key={index}
                  className="track-single d-flex justify-content-between p-2 rounded container-sm"
                  onClick={() => handleClick(index)}
                  role="button"
                >
                  <div className="track-single-details d-flex">
                    <img
                      src={item?.album.images[0]?.url}
                      alt={item.name}
                      className="track-image"
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
                    {/* {userImage ? (
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
                    )} */}
                    <div className="circle-play">
                    <svg height="24px" preserveAspectRatio="xMidYMid" viewBox="0 0 64 64" width="24px"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm-7.61 18.188c-.435.251-.702.715-.701 1.216v25.194a1.402 1.402 0 0 0 2.104 1.214L47.61 33.214a1.402 1.402 0 0 0 0-2.428L25.793 18.188c-.435-.25-.97-.25-1.404 0Z" fill="currentColor"></path></svg>
                    </div>
                  </div>
                </div>
              ))}
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </>
  )
}

export default CurrentPlaylist
