import { Outlet } from 'react-router-dom'
import { useLocation, useOutletContext } from 'react-router-dom'
import Login from './Login'
import LandingPage from '../pages/LandingPage'
import { useState } from 'react'
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes'


import { ContextType } from '../../models/contextType'

function Layout() {
  const location = useLocation()
  const [userDetails, setUserDetails] =
    useState<ContextType['userDetails']>(null)
  function changeUserDetails(user: ContextType['userDetails']) {
    setUserDetails(user)
  }

  return (
    <Theme>
      <div>
        {location.pathname === '/' ? (
          <LandingPage />
        ) : (
          <>
          <Button>
            <Outlet
              context={{ userDetails, changeUserDetails } satisfies ContextType}
            />
          </>
        )}
      </div>
    </Theme>
  )
}

export default Layout
