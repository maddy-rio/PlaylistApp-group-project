import { Flex, Button } from '@radix-ui/themes'
import NavBar from './NavBar'

const ThemeTest = () => {
  return (
    <Flex width="100%" height="100%">
      <Flex direction="column" width="100%" mx="3" my="2">
        <NavBar />
        <h1>Testing Radix Components</h1>
        <br></br>
        <Button size="1">Testing</Button>
        <Button size="2">Testing</Button>
        <Button size="3">Testing</Button>
        <Button size="4">Testing</Button>
        
      </Flex>
      <Flex direction="column" width="100%">
        <div className='gradient-box' />
      </Flex>
    </Flex>
  )

}

export default ThemeTest