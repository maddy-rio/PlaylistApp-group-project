import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { searchSongs } from '../apis/searchSongs'
import TrackSearchResult from './TrackSearchResult'
import { getSession } from '../functions/startSession'
import debounce from 'lodash.debounce'

interface Props {
  playlistId: string
}

const Songs = ({ playlistId }: Props) => {
  const accessToken = getSession() as string
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const searchMutation = useMutation({
    mutationFn: async () => searchSongs(accessToken, searchInput),
    onSuccess: (data) => {
      setSearchResults(data.tracks.items)
    },
  })

  useEffect(() => {
    if (searchInput) {
      searchMutation.mutate()
    }
  }, [searchInput]) // Dependency array

  // Debounced change handler (optional)
  const debouncedChangeHandler = debounce((newValue: string) => {
    setSearchInput(newValue)
  }, 300) // 300ms debounce time

  return (
    <div>
      <input
        type="text"
        className="dialog-input"
        value={searchInput}
        placeholder="Start typing song name..."
        onChange={(e) => debouncedChangeHandler(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: 'auto' }}>
        <TrackSearchResult
          tracks={searchResults}
          playlistId={playlistId}
          setTracks={() => setSearchResults([])}
        />
      </div>
    </div>
  )
}

export default Songs
