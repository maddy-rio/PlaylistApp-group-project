import e from 'express'
import React, { useState } from 'react'

// imports that need to refactored into another location
import request from 'superagent'
import { getSession } from '../functions/startSession'
import { getUserDetails } from '../apis/playlist'

const defaultFormData = {
  playlistName: '',
  description: '',
  public: true,
  theme: '',
}

const defaultOwner = {
  playlistId: '',
  ownerId: '',
}

function SpotifyCreatePlaylistButton() {
  //  move playlistDetails to the parent component and refactor the functionality of this to be included in the pipeline of the creating a user playlist __ add this id to the playlist id field,

  // Do the same thing with the ownerDetails,

  // add conditional to the if they are the owner of this playlist,

  const [playlistDetails, setPlaylistDetails] = useState(defaultFormData)
  const [ownerDetails, setOwnerDetails] = useState(defaultOwner)
  const [active, isActive] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPlaylistDetails({ ...playlistDetails, [name]: value })
  }

  const handleNewPlaylist = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // get the current user id
    const user_id = await getUserDetails().then((data) => data.id)

    // add a playlist to the current users spotify account
    const new_playlist = await request
      .post(
        `https://api.spotify.com/v1/users/${user_id}/playlists
    `,
      )
      .set({
        Authorization: `Bearer ${getSession()}`,
      })
      .send({
        name: playlistDetails.playlistName,
        description: playlistDetails.description,
        public: playlistDetails.public,
      })
      .then((data) => data.body)

    // send this playlist id to the database on creation of a users new playlist
    setOwnerDetails({
      playlistId: new_playlist.id,
      ownerId: user_id,
    })
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
