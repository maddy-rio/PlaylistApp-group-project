import '@radix-ui/themes/styles.css'
import '../styles/theme-config.css'
import { Theme } from '@radix-ui/themes'
import CurrentPlaylist from './CurrentPlaylist'
import AddUserName from './AddUserName'
import Login from './Login'
import PlaylistPage from './PlayList'
import Songlist from './Songlist'

function App() {
  return (
    <>
      <div className="app">
        <h1>VIBESVAULT</h1>
        <Login />
        <PlaylistPage />
        <Songlist />
      </div>
    </>
  )
}

export default App
