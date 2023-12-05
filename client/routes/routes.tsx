import { Route, createRoutesFromElements } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import Login from '../components/Login'
import App from '../components/App'
import SinglePlaylistPage from '../pages/SinglePlaylistPage'
import UpdateSpotifyPlaylistButton from '../components/UpdateSpotifyPlaylistButton'
import SpotifyCreatePlaylistButton from '../components/SpotifyCreatePlaylistButton'

export const routes = createRoutesFromElements(
  <>
    {/* TEMPORARY INITIAL PATH */}
    <Route path="/">
      <Route path="test" element={<UpdateSpotifyPlaylistButton />}/>
      <Route path="login" element={<Login />} />
      <Route path="login/callback" element={<App />} />

      <Route path="playlist/:playlistId" element={<SinglePlaylistPage />} />
      <Route path="*" element={<Placeholder />} />
    </Route>
  </>,
)
