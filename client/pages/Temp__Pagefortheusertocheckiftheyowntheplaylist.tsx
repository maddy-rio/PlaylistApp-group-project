import { useEffect, useState } from 'react'
import { userOwnsPlaylist } from '../functions/userOwnsPlaylist'

function Temp__Pagefortheusertocheckiftheyowntheplaylist() {
  const [owner, setOwner] = useState(false)

  const handleOwner = async () => {
    const isOwner = await userOwnsPlaylist('6PUXSD7kbZTluLt786stkr')
    setOwner(isOwner)
  }

  useEffect(() => {
    handleOwner()
  }, [])

  if (owner)
    return (
      <div>
        {/* children */}
        <h1>Owner</h1>
      </div>
    )

  if (!owner)
    return (
      <div>
        {/* children */}
        <h1>Not Owner</h1>
      </div>
    )
}

export default Temp__Pagefortheusertocheckiftheyowntheplaylist

// https://open.spotify.com/playlist/5Isk729NYligpzLobYvhR7?si=5c135cec5a8840a1
// https://open.spotify.com/album/6PUXSD7kbZTluLt786stkr?si=a50a6cc5a8a64a3d
