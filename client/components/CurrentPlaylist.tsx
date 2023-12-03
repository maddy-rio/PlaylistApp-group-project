import { Flex, Button, Heading, Text } from '@radix-ui/themes'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import NavBar from './NavBar'
        <Flex>
          <Button variant="ghost" size="3" style={{color: 'white'}}>
            <ArrowLeftIcon width="20" height="20"/>
            Back to Playlists
          </Button>
        </Flex>

const CurrentPlaylist = () => {
  const todaysTheme = 'A song that tells a story'

  return (
    <Flex width="100%" height="100%" className='app'>
      <Flex direction="column" width="100%" mx="3" my="2">
        <NavBar />
        <Flex direction="column" justify="end" height="100%" m="7">
            <Heading as="h1" align="left" className="theme-h1">
              Today's Theme:
            </Heading>
            <Heading as="h2" className="theme-h2 gradient-theme">
              <em>{todaysTheme}</em>
            </Heading>
          </Flex>
      </Flex>
      <Flex direction="column" width="100%">
        <div className='gradient-box'>
          <Flex align="center" justify="end" m="3">
            <Button size="2" className="green-button">
              <svg height="20" width="20" viewBox="0 0 24 24">
                <path className="svg-icon-black" d="m11,0C4.92,0,0,4.92,0,11s4.92,11,11,11,11-4.92,11-11S17.08,0,11,0Zm5.04,15.87c-.2.32-.62.43-.94.23-2.58-1.58-5.83-1.94-9.66-1.06-.37.08-.74-.15-.82-.52-.08-.37.15-.74.52-.82,4.19-.96,7.78-.55,10.68,1.23.32.2.43.62.23.94Zm1.35-3c-.25.4-.78.53-1.18.28-2.96-1.82-7.46-2.34-10.96-1.28-.45.14-.93-.12-1.07-.57-.14-.45.12-.93.57-1.07,4-1.21,8.96-.63,12.36,1.46.4.25.53.78.28,1.18Zm.12-3.12c-3.55-2.11-9.39-2.3-12.78-1.27-.54.16-1.12-.14-1.28-.69-.16-.54.14-1.12.69-1.28,3.89-1.18,10.34-.95,14.43,1.47.49.29.65.92.36,1.41-.29.49-.92.65-1.41.36Z"/>
              </svg>
              Play on Spotify
            </Button>
          </Flex>
          <Flex direction="column" m="7">
            <Heading as="h1" align="left">
              Playlist
            </Heading>
          </Flex>
        </div>
      </Flex>
    </Flex>
  )

}

export default CurrentPlaylist