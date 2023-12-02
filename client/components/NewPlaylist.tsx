import React, { useState } from 'react'
import { createNewPlaylist, getUserDetails } from '../apis/playlist'

function NewPlaylist() {
  const [playlistName, setPlaylistName] = useState('')
  const [description, setDescription] = useState('a test description')
  const [isPublic, setIsPublic] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()
      // get the current users id later through query
      const user = await getUserDetails()
      const userId = user?.body.id

      await createNewPlaylist({
        name: playlistName,
        description,
        isPublic,
        user_id: userId,
      })

      alert('playlist created')
    } catch (error) {
      console.error(error)
    }
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
