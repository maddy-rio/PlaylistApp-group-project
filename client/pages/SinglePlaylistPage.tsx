import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPlaylistItems } from '../apis/playlist'
import request from 'superagent'
import { getSession } from '../functions/startSession'
import { Item, PlaylistDetails, Tracks } from '../../models/PlaylistDetails'
import Track from '../components/Track'

function SinglePlaylistPage() {
  const { playlistId } = useParams()
  const [playlistDetails, setPlaylistDetails] = useState<PlaylistDetails>()
  const [playlistTracks, setPlaylistTracks] = useState<Item[]>()

  const getPlaylistInfo = async () => {
    const token = getSession()
    const playlistDetails = await request
      .get(`https://api.spotify.com/v1/playlists/${playlistId}`)
      .set({
        Authorization: `Bearer ${token}`,
      })
    setPlaylistDetails(playlistDetails.body)
    setPlaylistTracks(playlistDetails.body.tracks.items)
  }

  useEffect(() => {
    getPlaylistInfo()
  }, [])
  console.log(playlistTracks)

  if (!playlistDetails) <h1>Loading..</h1>

  // INCLUDES INLINE CSS !! CHANGE LATER
  return (
    <div>
      <h4 className="m-5">
        Playlist: <strong>{playlistDetails?.name}</strong>
      </h4>

      {playlistTracks?.map((item) => (
        <Track key={item.track.id} item={item} />
        // <Link
        //   key={item.track.id}
        //   to={`/track/${item.track.id}`}
        //   style={{ textDecoration: 'none', color: 'black' }}
        //   className="d-flex border border-dark w-50 m-1"
        // >
        //   <div
        //     key={item.track.id}
        //     className="p-1 d-flex justify-content-between w-100"
        //   >
        //     <div className="">
        //       <p className="m-0">added on: {item.added_at}</p>
        //       {item.added_by.display_name && (
        //         <p className="m-0">added by: {item.added_by.display_name}</p>
        //       )}
        //       <p className="m-0">artist: {item.track.artists[0].name}</p>
        //       <p className="m-0">name: {item.track.name}</p>
        //     </div>
        //     <img
        //       src={item.track.album.images[0].url}
        //       alt={item.track.name}
        //       className="height-50"
        //       style={{ height: '5rem', width: '5rem' }}
        //     />
        //   </div>
        // </Link>
      ))}
    </div>
  )
}

export default SinglePlaylistPage
