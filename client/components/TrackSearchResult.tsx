import React, { useState } from 'react'
import Player from './Player'
import { Link } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addTrackToPlaylist } from '../apis/playlist'
import {Album} from '../../models/song'

interface Props{
  track: Album
  token: string
  playingTrack: string
  chooseTrack: (track: Album) => void
}

export default function TrackSearchResult({
  track,
  chooseTrack,
  token,
  playingTrack,
}: Props) {
  
  
  // const addPlayListMutation = useMutation({
  //   mutationFn: async (id) => addTrackToPlaylist(id),
  //   onSuccess: () => {
  //   },
  // })
  
  // function handleClick(){
  //   addTrackToPlaylist(id)
  // }

  async function handleClick(track_id:string) {
    const trackId = track_id
    console.log(trackId)
    const playlistId = '1Gyu0Nea6xlTNfA33qlxhO'
    const data = await addTrackToPlaylist({ trackId, playlistId })
    console.log(data.body)
  }

  
  return (
    <>
      <Player track={track} token={token} playingTrack={playingTrack} chooseTrack={chooseTrack} />
        <div className="d-flex m-2 align-items-center">
          <img
            src={track.album.images[2].url}
            alt={track.album.name}
            style={{ height: '64px', width: '64px' }}
          />

          <div className="ml-3">
            <button style={{ cursor: 'pointer', border: 'none' }} onClick={()=>handleClick(track.id)}>
              {track.name}
            </button>
            <p>{track.artists[0].name}</p>
          </div>
        </div>
      
    </>
  )
}
