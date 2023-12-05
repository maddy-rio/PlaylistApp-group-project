import { Route, createRoutesFromElements } from 'react-router-dom'

import Layout from '../components/Layout'
import Login from '../components/Login'
import App from '../components/App'


import Songlist from '../components/Songlist'
import PlaylistPage from '../components/PlayList'


export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/auth/spotify" element={<Login />} />
      <Route path="login/callback" element={<App />} />
      <Route path="/playlist" element={<PlaylistPage />} />
      
      
      <Route path="playlist/:playlistId" element={<Songlist />} />
      {/* <Route path="*" element={<Placeholder />} /> */}
    </Route>
    
  </>
)
