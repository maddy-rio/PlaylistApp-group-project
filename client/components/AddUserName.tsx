import { Flex, Text, TextField, IconButton, Heading } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import NavBar from './NavBar'

const AddUserName = () => {
  return (
    <Flex width="100%" height="100%" className='app'>
      <Flex direction="column" width="100%" mx="3" my="2" className='fill-height'>
        <NavBar />
        <Flex height="100%" m="7">
          <div className="username">
            <Heading as="h1" className="dashboard-h1 gradient-text">Welcome to VibesVault!</Heading>
            <label htmlFor='usernameInput'>
              <Text as="div" size="2" mb="7" weight="bold" className='username-label'>
              Get started by entering your first name or nickname:
              </Text>
              <Flex gap="4" width="100%" justify="between">
              <TextField.Root className="username-box">
              <TextField.Input
                id="usernameInput" placeholder="Nickname" className='username-field'/>
              </TextField.Root>
              <IconButton className='submit-username'>
                <ArrowRightIcon width="32px" height="32px"/>
              </IconButton>
              </Flex>
            </label>


          </div>
        </Flex>     
      </Flex>
    </Flex>
  )

}

export default AddUserName