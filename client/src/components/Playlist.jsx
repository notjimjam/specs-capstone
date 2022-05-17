import React from 'react'
import '../css/Playlist.css'



function Playlist({ track, chooseTrack}) {
    function handlePlay() {
        chooseTrack(track)
    }
    return (
      <div
      className='playlist-header'
      onClick={handlePlay}
      >
      <img
        src={track.imageUrl}
        className='header-img'
        alt=''
        />
      {track.name}
    </div>
  )
}
export default Playlist


