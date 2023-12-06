import { Outlet } from 'react-router-dom'

import { useState } from 'react'
import '@radix-ui/themes/styles.css'
import { Theme, Button } from '@radix-ui/themes'

import { ContextType } from '../../models/contextType'

function Layout() {
  const [userDetails, setUserDetails] =
    useState<ContextType['userDetails']>(null)
  function changeUserDetails(user: ContextType['userDetails']) {
    setUserDetails(user)
  }
  console.log('layout', userDetails)
  return (
    <div>
      <>
        <Outlet
          context={{ userDetails, changeUserDetails } satisfies ContextType}
        />
      </>
    </div>
  )
}

export default Layout
