import { Route, createRoutesFromElements } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import Layout from '../components/Layout'
import Login from '../components/Login'
import App from '../components/App'
import SinglePlaylistPage from '../pages/SinglePlaylistPage'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<Login />} />
      <Route path="login/callback" element={<App />} />
      <Route path="playlist/:playlistId" element={<SinglePlaylistPage />} />
      <Route path="*" element={<Placeholder />} />
    </Route>
    ,
  </>,
)
