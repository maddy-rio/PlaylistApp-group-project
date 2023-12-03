import '@radix-ui/themes/styles.css'
import '../styles/theme-config.css'
import { Theme } from '@radix-ui/themes'
import ThemeTest from './ThemeTest'


import LandingPage from './LandingPage'
import NavBar from './NavBar'
import PlaylistPage from './PlayList'

function App() {
  return (
    <>
    <Theme appearance="dark">
        {/* <NavBar />
        <PlaylistPage /> */}
        <ThemeTest />
    </Theme>
    </>
  )
}

export default App
