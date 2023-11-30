import { Route, createRoutesFromElements } from 'react-router-dom'
import GetPlaylists from '../components/GetPlaylists'
import App from '../components/App'
import Authentication from '../components/Authentication'
import Dashboard from '../components/Dashboard'
import Placeholder from '../components/Placeholder'
import Navbar from '../components/Navbar'

export const routes = createRoutesFromElements(
  <>
    <Route path="/">
      <Route path="login" element={<Authentication />} />
      <Route path="login/callback" element={<Placeholder />} />
      <Route path="app" element={<App />} />
      <Route path="playlists" element={<GetPlaylists />} />
      <Route path="*" element={<Placeholder />} />
    </Route>
    ,
  </>,
)
