import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="d-flex w-100">
      <h4 className="mx-2">VibesVault</h4>
      <Link className="mx-2" to={'/home'}>
        Home
      </Link>
      <Link className="mx-2" to={'/login'}>
        login
      </Link>
      <Link className="mx-2" to={'/login/callback'}>
        Faulty route
      </Link>
    </div>
  )
}

export default Navbar
