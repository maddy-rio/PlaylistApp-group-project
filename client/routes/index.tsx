import { Route, createRoutesFromElements } from 'react-router-dom'
   
import LandingPage from '../pages/LandingPage'
import Dashboard from '../pages/Dashboard'
import CurrentPlaylist from '../pages/CurrentPlaylist'
import NewUser from '../pages/NewUser'
import Login from '../components/Login'
import PlaylistPageTemp from '../pages/tobedeleted/PlaylistPageTemp'
import Layout from '../components/Layout'
import Songlist from '../components/Songlist'


export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route index element={<LandingPage />} />
      <Route path="/newuser" element={<NewUser />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:playlistId" element={<CurrentPlaylist />} />
      <Route path="/playlist" element={<PlaylistPageTemp />} />

      <Route path="/login" element={<Login />} />
      <Route path="/auth/spotify" element={<Login />} />
      
      {/* <Route path="login/callback" element={<App />} />
      <Route path="/playlist" element={<CurrentPlaylist />} /> */}
      {/* <Route path="/playlist" element={<PlaylistPage />} />
      <Route path="playlist/:playlistId" element={<Songlist />} /> */}
      {/* <Route path="*" element={<Placeholder />} /> */}
    </Route>
  </>,
)
