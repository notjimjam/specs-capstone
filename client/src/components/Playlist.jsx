import React from 'react'
import '../css/Playlist.css'

import 'bootstrap/dist/css/bootstrap.min.css';


function Playlist({ list, chooseTrack}) {
   
    function handlePlay() {
        chooseTrack(list)
    }
    return (
      <div
      className='playlist-header'
      onClick={handlePlay}
      >
      <img
        src={list[0].imageUrl}
        style={{ height: '100px', width: '100px' }}
        alt=''
        />
      {list[0].name}
    </div>
  )
}


    // useEffect(() => {
    //     if(!accessToken) return

    //     spotifyApi.getPlaylistTracks(list.id).then((res) => {
    //       // console.log(res.body)
    //       setPlaylistTracks(
    //         res.body.items.map((item) => {
    //           const smallestAlbumImage = item.track.album.images.reduce(
    //             (smallest, image) => {
    //               if (image.height < smallest.height) return image;
    //               return smallest;
    //             },
    //             item.track.album.images[0]
    //           );
    //           return {
    //             artist: item.track.artists[0].name,
    //             title: item.track.name,
    //             uri: item.track.uri,
    //             albumUrl: smallestAlbumImage
    //           }
    //         })
    //       )
    //     })
    //   }, [accessToken, list.id, spotifyApi])
    //   // console.log(playlistTracks)
export default Playlist
