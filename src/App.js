import React,{useEffect,useState} from 'react'
import Login from './Login'
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

const App=()=> {
  const [{user,token},dispatch] =useDataLayerValue();
  //run the code under given condition
     useEffect(()=>{
    const hash =getTokenFromUrl();
     window.location.hash ="";
     const _token =hash.access_token;
    /*{ here what we have done :
    we had access the token which were present in the url
    we store that in hash and clear the url by widown .location
    after that we access the token and return it to the local storge
     which we had created in useState and check if we are logged in 
    or not if logged in show them loggedIn} */
    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token: _token,
      })
      
      spotify.setAccessToken(_token);
      // here we provide a magic key which told use 
      // to interacct with spotify and react app

      spotify.getMe().then(user =>{
        //In this it fetches the spotify user and and give us the user if user is logged In 

        dispatch({
          type: 'SET_USER',
          user:user,
        });
       });

       spotify.getUserPlaylists().then((playlists) =>{
         dispatch({
           type:"SET_PLAYLISTS",
           playlists:playlists,
         });
       });

       spotify.getPlaylist().then(response =>{
         dispatch({
           type: 'SET_DISCOVER_WEEKLY',
           discover_weekly: response,
         })
       })
     }
   },[]);

  return (
    <div className="app">
      {
        token ?
        <Player spotify={spotify} />
         :        
        <Login />
      }  
           
    </div>
  )
}

export default App;
