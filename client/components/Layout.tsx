import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
