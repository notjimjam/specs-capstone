import React from 'react'
import '../css/PlaylistTrack.css'

function PlaylistTrack({ track, chooseTrack}) {
console.log(track)
  function handlePlay() {
      chooseTrack(track)
  }


  return (
    <div
      className='tracks'
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        style={{ height: '64px', width: '64px' }}
        alt=''
      />
      <div className='track-names'>
        <div className='track-title'>{track.title}</div>
        <div className='track-artist'>{track.artist}</div>
      </div>
    </div>
  );
}

export default PlaylistTrack