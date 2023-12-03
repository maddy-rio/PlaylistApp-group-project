import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPlaylistItems } from '../apis/playlist'

function SinglePlaylistPage() {
  const { playlistId } = useParams()
  const [playlistDetails, setPlaylistDetails] = useState<any>()

  const gatherPlaylistDetails = async () => {
    const playlistDetails = await getPlaylistItems(playlistId as string)
    setPlaylistDetails(playlistDetails.body.data.items)
  }

  useEffect(() => {
    gatherPlaylistDetails()
  }, [])

  return (
    <div>
      <h1>
        {playlistDetails?.map((item: any) => (
          <p key={item}>{item.track.name}</p>
        ))}
      </h1>
    </div>
  )
}

export default SinglePlaylistPage
