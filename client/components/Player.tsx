import { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

interface Props{
  token: string
  trackUri: string[] | undefined
}

export default function Player({ token, trackUri }: Props) {
  const [play, setPlay] = useState(false)
console.log(trackUri)
  useEffect(() => setPlay(true), [trackUri])

  if (!token) return null
  return (
    <div>
      <SpotifyPlayer
        token={token}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? trackUri : []}
      />
    </div>
  )
}
