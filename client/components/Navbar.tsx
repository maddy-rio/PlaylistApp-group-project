import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h1>nav</h1>
      <li>
        <a href="http://localhost:5173/login">login</a>
      </li>
      <li>
        <a href="http://localhost:5173/login/callback">callback</a>
      </li>
      <li>
        <a href="http://localhost:5173/app">app</a>
      </li>
      <li>
        <a href="http://localhost:5173/playlists">playlists</a>
      </li>
    </div>
  )
}

export default Navbar
