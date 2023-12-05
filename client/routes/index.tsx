import { Route, createRoutesFromElements } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Dashboard from '../pages/Dashboard'
import CurrentPlaylist from '../pages/CurrentPlaylist'

import AddUserName from '../pages/AddUserName'
import '@radix-ui/themes/styles.css'


export const routes = createRoutesFromElements(
  <>
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="/newuser" element={<AddUserName />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/:playlistId" element={<CurrentPlaylist />} />

      {/* <Route path="/login" element={<Login />} />
      <Route path="/auth/spotify" element={<Login />} />
      <Route path="login/callback" element={<App />} />
      <Route path="/playlist" element={<CurrentPlaylist />} /> */}
      {/* <Route path="*" element={<Placeholder />} /> */}
    </Route>
  </>,
)
