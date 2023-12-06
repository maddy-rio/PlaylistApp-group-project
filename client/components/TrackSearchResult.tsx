import { Link, useOutletContext } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  addTrackToPlaylist,
  getUserDetails,
  getUserInfoFromDb,
} from '../apis/playlist'
import { Album } from '../../models/song'
import { Flex } from '@radix-ui/themes'
import { ContextType } from '../../models/contextType'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { Text } from '@radix-ui/themes'
import { getSession } from '../functions/startSession'
import { useEffect } from 'react'

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

  // GET THE USER DATABASE ID HERE !!

  async function getUserDatabaseId() {
    // const userData = await getSession()
    const data = await getUserDetails()
    return await getUserInfoFromDb(data?.id).then(
      (data) => data.body.data[0].id,
    )
  }
  const userId = getUserDatabaseId()
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
      <Flex direction="column" className='search-result-box'>
      {tracks ? (
        tracks.map((track) => (
          <button
              key={track.id}
              className='search-result-button'
              style={{ cursor: 'pointer', border: 'none' }}
              onClick={() => handleClick(track.id)}
            >
            <Flex key={track.id} className="search-result">
              <img
                src={track.album.images[2].url}
                alt={track.album.name}
                style={{ height: '64px', width: '64px' }}
              />
              <Flex width="100%" className='search-text'>
              <div className="ml-3 search-details">
                 <Text> {track.name} </Text>
                 <Text className='track-detail'>{track.artists[0].name}</Text>
              </div>
              <PlusCircledIcon width="28px" height="48px" />
              </Flex>
            </Flex>
          </button>
        ))
      ) : (
        <Link
          to={`/dashboard/${playlistId}`}
          className="text-decoration-none"
        ></Link>
      )}
      </Flex>
    </>
  )
}
