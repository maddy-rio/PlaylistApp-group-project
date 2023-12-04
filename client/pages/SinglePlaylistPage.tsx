import { Link, useParams } from 'react-router-dom'
import { getPlaylistInfo } from '../apis/playlist'

import Track from '../components/Track'
import Songs from '../components/Songs'
import Player from '../components/Player'
import { useQuery } from '@tanstack/react-query'

function SinglePlaylistPage() {
  const { playlistId } = useParams()

  const { data: playlistTracks } = useQuery({
    queryKey: ['single-playlist'],
    queryFn: () => getPlaylistInfo(playlistId),
  })

  return (
    <div>
      <h4 className="">Playlist</h4>
      <h2>{playlistTracks?.name}</h2>
      <div className="">
        <h2 className="inline">Added today</h2>
        <Songs playlistId={playlistId} />
        <h2 className="inline">All songs</h2>
      </div>

      {playlistTracks && <Track playlists={playlistTracks.tracks.items} />}

      <Player />
    </div>
  )
}

export default SinglePlaylistPage
