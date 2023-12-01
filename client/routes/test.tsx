import { Route, createRoutesFromElements } from 'react-router-dom'
import Authentication from '../components/Authentication'
import Placeholder from '../components/Placeholder'

export const routes = createRoutesFromElements(
  <>
    <Route path="/">
      <Route path="login" element={<Authentication />} />
      <Route path="login/callback" element={<Placeholder />} />
      <Route path="*" element={<Placeholder />} />
    </Route>
    ,
  </>,
)
