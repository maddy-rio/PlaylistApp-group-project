import React, { useEffect, useState } from 'react'

import SpotifyWebApi from 'spotify-web-api-node'

interface Props {
  token: string
}

const CLIENT_ID = 'edcdc478bd3b486dbd641b390065c0cf'
const CLIENT_SECRET = '8a5c13bc700040758a29b4175847c84a'
// const redirect_uri = 'http://localhost:3000/callback';

const spotifyApi = new SpotifyWebApi({
  clientId: 'edcdc478bd3b486dbd641b390065c0cf',
})

const Songs = ({ token }: Props) => {
  // const [token, setToken] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [albums, setAlbums] = useState([])
  const [searchResults, setSearchResults] = useState([])

  // useEffect(() => {
  //   // API Access Token

  //   const authParameters = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  //   }
  //   fetch('https://accounts.spotify.com/api/token', authParameters)
  //     .then((response) => response.json())
  //     .then((data) => setToken(data.access_token))
  //     .catch((error) => console.error('Error:', error))
  // }, [])

  // useEffect(() => {
  //   if (!searchInput) return setSearchResults([])
  //   if (!token) return
  //   spotifyApi
  //     .searchTracks(searchInput)
  //     .then((res) => {
  //       setSearchResults(res.body.tracks.items)
  //     })
  //     .catch((err) => console.error(err))
  // }, [searchInput])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(token)

    const artistParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const artistId = await fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=track`,
      artistParameters,
    ).then((response) => response.json())
    // .then((data) => data.artists.items[0].id)

    console.log(artistId)

    const returnedAlbums = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=NZ&limit=50`,
      artistParameters,
    )
      .then((response) => response.json())
      .then((data) => setAlbums(data.items))
  }
  console.log(albums)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <img src={album.images[2].url} alt={album.name} />
            <p>{album.name}</p>

            {album.is_playable && (
              <a
                href={album.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Play</button>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Songs
