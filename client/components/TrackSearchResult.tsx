import { Link, useOutletContext } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addTrackToPlaylist } from '../apis/playlist'
import { Album } from '../../models/song'
import { ContextType } from '../../models/contextType'

interface Props {
  tracks: Album[]

  playlistId: string
  setTracks: () => void
}

export default function TrackSearchResult({
  tracks,
  playlistId,
  setTracks,
}: Props) {
  const { userDetails } = useOutletContext<ContextType>()
  const userId = userDetails?.id as string

  const queryClient = useQueryClient()
  const addPlayListMutation = useMutation({
    mutationFn: async (trackId: string) =>
      addTrackToPlaylist(playlistId, trackId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
    },
  })

  function handleClick(id: string) {
    addPlayListMutation.mutate(id)
    setTracks()
  }

  return (
    <>
      {tracks ? (
        tracks.map((track) => (
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
        ))
      ) : (
        <Link
          to={`/playlist/${playlistId}`}
          className="text-decoration-none"
        ></Link>
      )}
    </>
  )
}
