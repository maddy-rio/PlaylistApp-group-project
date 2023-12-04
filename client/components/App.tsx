import '@radix-ui/themes/styles.css'
import '../styles/theme-config.css'
import { Theme } from '@radix-ui/themes'
import CurrentPlaylist from './CurrentPlaylist'
import AddUserName from './AddUserName'

function App() {
  return (
    <>
    <Theme appearance="dark">
        <AddUserName />
    </Theme>
    </>
  )
}

export default App
