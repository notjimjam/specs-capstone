import React from 'react'
import spot from '../icons/spotify.png'

function Footer() {
  return (
    <div>
      <a href="https://www.spotify.com/us/">
        <img src={spot} alt="" className="spot-logo" />
      </a>
      <p className='foot-p'>Created by Jamie Smith</p>
    </div>
  )
}

export default Footer