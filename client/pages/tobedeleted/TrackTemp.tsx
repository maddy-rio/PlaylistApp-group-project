import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Player from './Player'
import { getSession } from '../functions/startSession'
import { Item } from '../../models/Playlist'

function Track({ playlists }) {
  console.log(playlists)
  const accessToken = getSession()
  const [playingTracks, setPlayingTracks] = useState({})

  function handleClick(item) {
    setPlayingTracks(item.track.uri)
  }

  return (
    <div>
      {playlists.map((item, index) => (
        <div
          key={index}
          className="track-single d-flex justify-content-between p-2 m-1 rounded container-sm"
          onClick={() => handleClick(item)}
        >
          <div className="track-single-details d-flex">
            <img
              src={item.track?.album?.images[0]?.url}
              alt={item.track?.name}
              className="track-image rounded"
            />
            <div className="track-artist ml-3">
              <p>
                <b>{item.track?.name}</b>
              </p>
              <div className="">
                <p className="inline">
                  {item.track?.explicit && '🅴 '}
                  {item.track?.artists[0].name}
                </p>
              </div>
            </div>
          </div>
          <div className="track-single-user d-flex align-items-center">
            <div>
              <p className="font-weight-light">ADDED BY</p>
              <p>
                <b className="text-capitalize">
                  {item.added_by?.id ? item.added_by?.id : 'Backson'}
                </b>
              </p>
            </div>
            <img
              className="track-image track-image-profile rounded-circle mx-2"
              src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
              alt=""
            />
            <img
              className="track-play-pause"
              src={'/images/play-button.png'}
              alt=""
            />
          </div>
        </div>
      ))}
      {playingTracks && 
      <div>
      <Player trackUri={playingTracks} token={accessToken} />
      </div>}
    </div>
  )
}

export default Track
