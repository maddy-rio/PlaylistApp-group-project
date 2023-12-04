import e from 'express'
import React, { useState } from 'react'

const defaultFormData = {
  playlistName: '',
  description: '',
  theme: '',
}

function SpotifyCreatePlaylistButton() {
  const [playlistDetails, setPlaylistDetails] = useState(defaultFormData)
  const [active, isActive] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setPlaylistDetails({ ...playlistDetails, [name]: value })
  }

  const handleNewPlaylist = async (e: any) => {
    e.preventDefault(0)
    // handle the add to spotify using the api and the user Id to generate the playlist for that particular user, also need to add to the database
  }

  return (
    <div className="spotify-create-playlist">
      <button className="btn btn-primary" onClick={() => isActive(!active)}>
        Create new Playlist
      </button>
      {active && (
        <form onChange={(e) => handleChange(e)}>
          <h4>New playlist</h4>
          <div className="form-field">
            <label htmlFor="playlist-name">Playlist Name</label>
            <input type="text" id="playlist-name" name="playlistName" />
          </div>
          <div className="form-field">
            <label htmlFor="playlist-description">Playlist description</label>
            <input type="text" id="playlist-description" name="description" />
          </div>
          <div className="form-field">
            <label htmlFor="playlist-theme">Playlist theme</label>
            <input type="text" id="playlist-theme" name="theme" />
          </div>
          <button onClick={(e) => handleNewPlaylist(e)}>Create Playlist</button>
        </form>
      )}
    </div>
  )
}

export default SpotifyCreatePlaylistButton
