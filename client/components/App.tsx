import '@radix-ui/themes/styles.css'
import '../styles/theme-config.css'
import { Theme } from '@radix-ui/themes'
import CurrentPlaylist from './CurrentPlaylist'

function App() {
  return (
    <>
    <Theme appearance="dark">
        <CurrentPlaylist />
    </Theme>
    </>
  )
}

export default App
