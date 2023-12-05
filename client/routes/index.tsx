import { Route, createRoutesFromElements } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Dashboard from '../pages/Dashboard'
import CurrentPlaylist from '../pages/CurrentPlaylist'

import AddUserName from '../pages/AddUserName'
import '@radix-ui/themes/styles.css'


import Layout from '../components/Layout'
import Login from '../components/Login'
import App from '../components/App'


import Songlist from '../components/Songlist'
import PlaylistPage from '../components/PlayList'


export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route index element={<LandingPage />} />
      <Route path="/newuser" element={<AddUserName />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/:playlistId" element={<CurrentPlaylist />} />

      {/* <Route path="/login" element={<Login />} />
      <Route path="/auth/spotify" element={<Login />} />
      <Route path="login/callback" element={<App />} />
      <Route path="/playlist" element={<CurrentPlaylist />} /> */}
      {/* <Route path="/playlist" element={<PlaylistPage />} />
      <Route path="playlist/:playlistId" element={<Songlist />} /> */}
      {/* <Route path="*" element={<Placeholder />} /> */}
    </Route>
  </>,
)
