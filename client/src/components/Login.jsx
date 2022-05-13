import React from 'react'
import '../css/Login.css'

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=6f5b9cf484324457963e8226b61fd6e6&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-collaborative%20playlist-modify-public%20playlist-read-private%20playlist-modify-private%20user-read-currently-playing';

function Login() {
  return (
    <div className='login'>
      {/* <div>
        <h4>created by Jamie Smith</h4>
        <h4>powered by Spotify</h4>
      </div> */}
        <a href={AUTH_URL} className='login-btn'>
            Login With Spotify
        </a>
    </div>
  )
}

export default Login