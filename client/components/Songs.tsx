import React, { FormEvent, useEffect, useState } from 'react'

import { useMutation, useQuery } from '@tanstack/react-query'
import { searchSongs } from '../apis/searchSongs'
import TrackSearchResult from './TrackSearchResult'

import { getSession } from '../functions/startSession'
interface Props {
  playlistId: string
}

const Songs = ({playlistId}:Props) => {
  const accessToken = getSession() as string
 
  console.log(playlistId)

  const [searchInput, setSearchInput] = useState('')

  const [searchResults, setSearchResults] = useState([])

  const searchMutation = useMutation({
    mutationFn: async () => searchSongs(accessToken, searchInput),
    onSuccess: (data) => {
      setSearchResults(data.tracks.items)
    },
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    searchMutation.mutate()
  }

  console.log(searchResults)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Add your song</p>
        <input
          type="text"
          value={searchInput}
          placeholder="Start typing a song name..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="flex-grow-1 my-2" style={{ overflowY: 'auto' }}>
        <TrackSearchResult tracks={searchResults} playlistId={playlistId} />
      </div>
    </div>
  )
}

export default Songs
