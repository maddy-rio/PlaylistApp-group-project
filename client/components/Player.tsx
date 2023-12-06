import { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { Card } from '@radix-ui/themes'

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
      <Card>
      <SpotifyPlayer
        token={token}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? trackUri : []}
        styles={{
          activeColor: '#fff',
          bgColor: '#333',
          color: '#fff',
          loaderColor: '#fff',
          sliderColor: '#fff',
          sliderHandleColor: '#fff',
          trackArtistColor: '#ccc',
          trackNameColor: '#fff',
          height: 72,
        }}
      />
      </Card>
    </div>
  )
}
