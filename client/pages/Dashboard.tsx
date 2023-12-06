import { Flex, Text, Button, Heading, Card, AspectRatio, Dialog, TextField } from '@radix-ui/themes'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import Navigation from '../components/Navigation'
import gradient from '@privjs/gradients'
// import CreatePlaylist from './CreatePlaylist'
import { getUsersPlaylists } from '../apis/playlist'
import { useQuery } from '@tanstack/react-query'

import { Link, useOutletContext } from 'react-router-dom'
import { ContextType } from '../../models/contextType'
import Canvas from '../components/Canvas'


interface playlistProps {
  playlistsId: string
  name: string
  id: string
}

const Dashboard = () => {
  const { userDetails } = useOutletContext<ContextType>() || {};
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
    <Flex width="100%" height="100%" className='app'>
      <Flex direction="column" width="100%" mx="3" my="2" className='fill-height'>
        <Navigation />
        <Flex height="100%" m="7">
          <div className="dashboard">
            <Heading as="h1" className="dashboard-h1 gradient-text">Hi {userDetails?.display_name}! Here’s all the playlists you’re collaborating on:</Heading>
            <Flex className="playlist-preview" width="100%" px="8" gap="8" justify="center"wrap="wrap" >
            {playlists?.map((playlist: playlistProps, index: number) => (
              <Link to={`/dashboard/${playlist.playlistsId}`} key={index}>
              <Card key={playlist.id} className='playlist-card'>
                  <Flex direction="column" gap="4" p="2">
                    <AspectRatio ratio="1/1">
                      {/* TODO: Add conditional - if no album art, show below div... */}
                      <div className='album-art' style={{background: gradient(playlist.id) }}></div>
                      {/* ...otherwise show album art */}
                    </AspectRatio> 
                    <Flex direction="column" gap="2">
                      <svg height="24" width="24" viewBox="0 0 24 24">
                        <path className="svg-icon-white" d="m11,0C4.92,0,0,4.92,0,11s4.92,11,11,11,11-4.92,11-11S17.08,0,11,0Zm5.04,15.87c-.2.32-.62.43-.94.23-2.58-1.58-5.83-1.94-9.66-1.06-.37.08-.74-.15-.82-.52-.08-.37.15-.74.52-.82,4.19-.96,7.78-.55,10.68,1.23.32.2.43.62.23.94Zm1.35-3c-.25.4-.78.53-1.18.28-2.96-1.82-7.46-2.34-10.96-1.28-.45.14-.93-.12-1.07-.57-.14-.45.12-.93.57-1.07,4-1.21,8.96-.63,12.36,1.46.4.25.53.78.28,1.18Zm.12-3.12c-3.55-2.11-9.39-2.3-12.78-1.27-.54.16-1.12-.14-1.28-.69-.16-.54.14-1.12.69-1.28,3.89-1.18,10.34-.95,14.43,1.47.49.29.65.92.36,1.41-.29.49-.92.65-1.41.36Z"/>
                      </svg>
                      <Heading as="h2" className='dashboard-h2'>{playlist.name}</Heading>
                      <Text className="dashboard-subtitle">Collaborating with: string of users</Text>
                      </Flex>
                      <Button variant="outline" size="2">
                        <PlusCircledIcon />
                        Add a song
                      </Button>
                  </Flex>
                </Card>
                </Link>
                    ))}
             
              
              <Card className='playlist-card'>
                  <Flex direction="column" gap="4" className='add-playlist-content' p="2">
                    <AspectRatio ratio={1/1}>
                      <div className='dashed-box' >
                        <svg height="36" width="36" viewBox="0 0 56 56">
                        <path className="plus-icon" d="m26.79,38.63v-9.5h-9.5c-.54,0-.86-.32-.86-.86,0-.43.32-.86.86-.86h9.5v-9.5c0-.43.32-.86.86-.86.43,0,.86.43.86.86v9.5h9.5c.43,0,.86.43.86.86,0,.54-.43.86-.86.86h-9.5v9.5c0,.54-.43.86-.86.86-.54,0-.86-.32-.86-.86Zm28.51-10.37c0,15.34-12.42,27.65-27.65,27.65S0,43.6,0,28.26,12.31.61,27.65.61s27.65,12.42,27.65,27.65ZM27.65,2.34C13.28,2.34,1.73,14.01,1.73,28.26s11.56,25.92,25.92,25.92,25.92-11.56,25.92-25.92S41.91,2.34,27.65,2.34Z"/>
                        </svg>
                      </div>
                    </AspectRatio>
                    <Flex className="add-playlist-text" direction="column" gap="2">
                      <Text className='dashboard-subtitle'>Create a new Spotify playlist or add an existing one</Text>
                    </Flex>

                    <Dialog.Root>
                      <Dialog.Trigger>
                        <Button variant="outline" size="2">
                          <PlusCircledIcon />
                          Add playlist
                        </Button>
                      </Dialog.Trigger>

                      <Dialog.Content style={{ maxWidth: 450 }}>
                        <Dialog.Title>Add a playlist</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                          Instructions lorem ipsum.
                        </Dialog.Description>

                        <Flex direction="column" gap="3">
                          <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                              Playlist
                            </Text>
                            <TextField.Input
                              placeholder="Enter playlist ID"
                            />
                          </label>
                        </Flex>
                      </Dialog.Content>
                    </Dialog.Root>

                  </Flex>
                </Card>
            </Flex>
          </div>
        </Flex>     
      </Flex>
    </Flex>
    <div className='background'>
    <Canvas />
    </div>
    </>
  )

}

export default Dashboard