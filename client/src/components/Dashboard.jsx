import React, {useState, useEffect} from 'react'
import '../css/Dashboard.css'
import useAuth from '../auth/useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import Weather from './Weather'
import Player from './Player'
import Playlist from './Playlist'
import PlaylistTrack from './PlaylistTrack'


const spotifyApi = new SpotifyWebApi({
    clientId:'6f5b9cf484324457963e8226b61fd6e6',
})

function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [playingTrack, setPlayingTrack] = useState()
    const [playlistResults, setPlaylistResults] = useState([])
    const [playlistId, setPlaylistId] = useState()
    const [playlistTracks, setPlaylistTracks] = useState([])
    const [find, setFind] = useState(null)

    function chooseTrack(track) {
      setPlayingTrack(track)
    }
    

    function searchTerm(word) {
      setFind(word)
    }
    

    useEffect(() => {
      if (!accessToken) return;
      // console.log('hi')
        spotifyApi.setAccessToken(accessToken);
      }, [accessToken]);

      useEffect(() => {
        // if (!accessToken) return;
        if (find === null) return
        // console.log('hi')
    
        // let cancel = false;
        spotifyApi.searchPlaylists(find, {limit:1, offset: 0}).then((res) => {
          // if (cancel) return;
          setPlaylistResults(
            res.body.playlists.items.map((list) => {
              return {
                name: list.name,
                desc: list.description,
                uri: list.uri,
                imageUrl: list.images[0].url,
              };
            }),
          );
          setPlaylistId(
            res.body.playlists.items.map((list) => {
              return list.id
            })
          )
        });
        // return () => (cancel = true);
      }, [find]);

      useEffect(() => {
        if(!accessToken) return
        if(!playlistId) return
        // console.log('hi')

        spotifyApi.getPlaylistTracks(playlistId).then((res) => {
          setPlaylistTracks(
            res.body.items.map((item) => {
              const smallestAlbumImage = item.track.album.images.reduce(
                (smallest, image) => {
                  if (image.height < smallest.height) return image;
                  return smallest;
                },
                item.track.album.images[0].url
              );
              return {
                artist: item.track.artists[0].name,
                title: item.track.name,
                uri: item.track.uri,
                albumUrl: smallestAlbumImage
              }
            })
          )
        })
      }, [accessToken, playlistId])
      

  return (
      <div className=''>
        
        <div className='main-weather'>
          <Weather searchTerm={searchTerm} find={find} setFind={setFind}/>
        </div>
        <div className='main'>
          <div className= 'playlist-head'>
            {playlistResults.map((track)=> (
              <Playlist 
              track={track}
              chooseTrack={chooseTrack}
              key={track.uri}
              />
            ))}
             {/* <button onClick={() => searchTerm(find)} className= 'random-btn'></button> */}
          </div>
          <div className='scroll'>
            {playlistTracks.map((track)=> (
              <PlaylistTrack 
                track={track}
                key={track.uri}
                chooseTrack={chooseTrack}
              />
            ))}
          </div>
          <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
        </div>
      </div>
  )
}

export default Dashboard
