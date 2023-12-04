import { useState } from 'react'

import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addTrackToPlaylist, getPlaylistItems } from '../apis/playlist'
import { Album } from '../../models/song'
import Track from './Track'

interface Props {
  tracks: Album[]

  playlistId: string
}

export default function TrackSearchResult({ tracks, playlistId }: Props) {
  const [showSearchResult, setShowSearchResult] = useState(true)
  const queryClient = useQueryClient()
  const addPlayListMutation = useMutation({
    mutationFn: async (trackId) => addTrackToPlaylist(playlistId, trackId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['single-playlist'] })
    },
  })

  // const { data: trackList } = useQuery({
  //   queryKey: ['trackList'],

  //   queryFn: ()=>getPlaylistItems(playlistId),
  // })

  function handleClick(id) {
    addPlayListMutation.mutate(id)
    setShowSearchResult(!showSearchResult)
  }
// console.log(trackList)
  return (
    <>
      {/* <Player track={track} token={token} playingTrack={playingTrack} chooseTrack={chooseTrack} /> */}
      
      {showSearchResult ? (tracks.map((track) => (
        <div key={track.id} className="d-flex m-2 align-items-center">
          <img
            src={track.album.images[2].url}
            alt={track.album.name}
            style={{ height: '64px', width: '64px' }}
          />

          <div className="ml-3">
            <button
              style={{ cursor: 'pointer', border: 'none' }}
              onClick={() => handleClick(track.id)}
            >
              {track.name}
            </button>
            <p>{track.artists[0].name}</p>
          </div>
        </div>
      ))): (
        <Link
          to={`/playlist/${playlistId}`}
          className="text-decoration-none"
        ></Link>
        // <Track playlists={trackList} />
      )}

      
    </>
  )
}
