// import { useFruits } from '../hooks/useFruits.ts'

import Songs from "./Songs"
import PlaylistPage from "./PlayList"

function App() {

  return (
    <>
      <div className="app">
        <h1>VIBESVAULT</h1>
        <Songs  />
        <PlaylistPage />
      </div>
    </>
  )
}

export default App
