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
      <h4 className="">Playlist</h4>
      <h2>{playlistDetails?.name}</h2>
      <div className="">
        <h2 className="inline">Added today</h2>
        <h2 className="inline">All songs</h2>
      </div>

      {playlistTracks?.map((item) => <Track key={item.track.id} item={item} />)}
    </div>
  )
}

export default SinglePlaylistPage
