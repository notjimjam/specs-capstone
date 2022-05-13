import React, {useState, useEffect} from 'react'
import '../css/Dashboard.css'
import useAuth from '../auth/useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import Input from './Input'
import Player from './Player'
import Playlist from './Playlist'
import WebPlayback from './WebPlayback'


const spotifyApi = new SpotifyWebApi({
    clientId:'6f5b9cf484324457963e8226b61fd6e6',
})

function Dashboard({ code }) {
    const accessToken= useAuth(code)

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
        spotifyApi.getPlaylistTracks('2Dp9QFZu7rFkQ1xjLF9ost').then((res) => {
            console.log(res.body.href)
        })
      }, [accessToken]);


  return (
      <div className='main'>
        <div className='left'>
          <Input />
        </div>
        <div className='vl'></div>
        <div className='right'>
          {/* <WebPlayback token={accessToken}/> */}
          <Playlist accessToken={accessToken}/>
          <Player accessToken={accessToken}/>
        </div>
      </div>
  )
}

export default Dashboard