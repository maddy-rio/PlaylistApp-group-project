import React from 'react'
import { Item } from '../../models/temp'
import { Link } from 'react-router-dom'

function Track({ item }: Item) {
  return (
    <Link to={`/track/${item.track.id}`} className="text-decoration-none">
      <div className="track-single d-flex justify-content-between p-2 m-1 rounded container-sm">
        <div className="track-single-details d-flex">
          <img
            src={item.track?.album?.images[0]?.url}
            alt={item.track?.name}
            className="track-image rounded"
          />
          <div className="track-artist ml-3">
            <p>
              <strong>{item.track?.name}</strong>
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
              <strong className="text-capitalize">
                {item.added_by?.id ? item.added_by?.id : 'Backson'}
              </strong>
            </p>
          </div>
          <img
            className="track-image track-image-profile rounded-circle mx-2"
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt=""
          />
          <img
            className="track-play-pause"
            src={'../../public/images/play-button.png'}
            alt=""
          />
        </div>
      </div>
    </Link>
  )
}

export default Track
