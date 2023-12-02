// import { useFruits } from '../hooks/useFruits.ts'

import Login from './LoginWithSpotify'
import Songs from './Songs'

import { useEffect, useState } from 'react'

import useAuthcation from './useAuth'

const code = new URLSearchParams(window.location.search).get('code')
const clientId = 'edcdc478bd3b486dbd641b390065c0cf'

console.log(code)
function App() {
  return (
    <>
      <div className="app">{code ? <Songs code={code} /> : <Login />}</div>
    </>
  )
}

export default App
