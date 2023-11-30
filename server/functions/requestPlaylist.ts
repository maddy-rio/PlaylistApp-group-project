import { accessToken } from './getAccessToken'

export async function requestPlaylist(searchInput: string) {
  const access_token = await accessToken()
  const artistParameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  }

  const data = await fetch(
    `https://api.spotify.com/v1/search?q=${searchInput}&type=playlist`,
    artistParameters,
  ).then((response) => response.json())

  return data
}
