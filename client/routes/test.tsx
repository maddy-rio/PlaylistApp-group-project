import { Route, createRoutesFromElements } from 'react-router-dom'
import Authentication from '../components/Authentication'
import Placeholder from '../components/Placeholder'
import Layout from '../components/Layout'
import Home from '../components/Home'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Authentication />} />
      <Route path="login/callback" element={<Placeholder />} />
      <Route path="*" element={<Placeholder />} />
    </Route>
    ,
  </>,
)
