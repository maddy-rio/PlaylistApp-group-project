import React, { useState } from 'react'
import Player from './Player'
import { Link } from 'react-router-dom'

export default function TrackSearchResult({
  track,
  chooseTrack,
  token,
  playingTrack,
}: any) {
  const [play, setPlay] = useState(false)
  function handlePlay() {
    chooseTrack(track)
    setPlay(!play)
  }

  return (
    <>
      {play ? (
        <div>
          <Player token={token} trackUri={playingTrack?.uri} />
        </div>
      ) : (
        <div className="d-flex m-2 align-items-center">
          <img
            src={track.album.images[2].url}
            alt={track.album.name}
            style={{ height: '64px', width: '64px' }}
          />

          <div className="ml-3">
            <button style={{ cursor: 'pointer', border: 'none' }} onClick={handlePlay}>
              {track.name}
            </button>
            <p>{track.artists[0].name}</p>
          </div>
        </div>
      )}
    </>
  )
}
