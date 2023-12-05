import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import LandingPage from './LandingPage'
import { useState } from 'react'

import { ContextType } from '../../models/contextType'

function Layout() {
  const location = useLocation()
  const [userDetails, setUserDetails] =
    useState<ContextType['userDetails']>(null)
  function changeUserDetails(user: ContextType['userDetails']) {
    setUserDetails(user)
  }

  return (
    <div>
      {location.pathname === '/' ? (
        <LandingPage />
      ) : (
        <>
          <Navbar />{' '}
          <Outlet
            context={{ userDetails, changeUserDetails } satisfies ContextType}
          />
        </>
      )}
    </div>
  )
}

export default Layout
