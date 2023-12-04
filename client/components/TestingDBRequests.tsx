import { getTracks } from '../apis/getInfo'
import { useQuery } from '@tanstack/react-query'
import { PlaylistTracks } from '../../models/getInfo'
import { Link } from 'react-router-dom'

const TestingDB = () => {
  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: getTracks,
  })

  console.log(tracks)

  return <div></div>
}

export default TestingDB
