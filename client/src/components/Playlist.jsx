import React from 'react'
import '../css/Playlist.css'



function Playlist({ playlist, chooseTrack}) {
    function handlePlay() {
        chooseTrack(playlist)
    }
    return (
      <div
      className='playlist-header'
      onLoad={handlePlay}
      onClick={handlePlay}
      >
      <img
        src={playlist.imageUrl}
        className='header-img'
        alt=''
        />
      {playlist.name}
    </div>
  )
}
export default Playlist


