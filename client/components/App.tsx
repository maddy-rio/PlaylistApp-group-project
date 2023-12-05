
import '../styles/theme-config.css'
import { Theme } from '@radix-ui/themes'
import CurrentPlaylist from '../pages/CurrentPlaylist'
import AddUserName from '../pages/AddUserName'
import Login from './Login'
import PlaylistPage from '../pages/PlayList'
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
