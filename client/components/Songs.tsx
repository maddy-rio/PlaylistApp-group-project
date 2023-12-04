import React, { FormEvent, useEffect, useState } from 'react'

import SpotifyWebApi from 'spotify-web-api-node'
import SpotifyPlayer from 'react-spotify-web-playback'

import { useMutation, useQuery } from '@tanstack/react-query'
import { searchSongs } from '../apis/searchSongs'
import TrackSearchResult from './TrackSearchResult'
import Player from './Player'
import { getSession } from '../functions/startSession'

const Songs = (playlistId: string) => {
  const accessToken = getSession()

  const [searchInput, setSearchInput] = useState('')

  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState('')

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

  // function chooseTrack(track) {
  //   setPlayingTrack(track)
  //   setSearchInput('')
  // }

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
        {/* {searchResults.map((track) => ( */}
          <TrackSearchResult
            // 
            tracks={searchResults}
           
            playlistId={playlistId}
          />
        {/* ))} */}
      </div>
    </div>
  )
}

export default Songs
