import { Route, createRoutesFromElements } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import Layout from '../components/Layout'
import Login from '../components/Login'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<Login />} />
      <Route path="login/callback" element={<Placeholder />} />
      <Route path="*" element={<Placeholder />} />
    </Route>
    ,
  </>,
)
