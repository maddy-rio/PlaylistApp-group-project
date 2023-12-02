import e from 'express'
import React, { useState } from 'react'

function NewPlaylist() {
  const [playlistName, setPlaylistName] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(playlistName)
  }

  return (
    <div className="new-playlist w-50">
      <form className="p-3" onSubmit={handleSubmit}>
        <h4>
          <strong>Create a new Playlist</strong>
        </h4>
        <p>
          This will create a new collaborative playlist to your Spotify account
        </p>
        <label className="w-100" htmlFor="newPlaylist">
          <strong>PLAYLIST NAME</strong>
        </label>
        <input
          className="w-100 p-2"
          type="text"
          id="newPlaylist"
          placeholder="Type name.."
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <button className="btn btn-dark my-4">Create Playlist</button>
      </form>
    </div>
  )
}

export default NewPlaylist
