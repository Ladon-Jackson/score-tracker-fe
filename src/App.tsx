import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SongModel  from './models/SongModel';
import { Song } from './components/Song';
import { getSongs } from './Connector';

function App() {
  
  const [songs, setSongs] = useState<SongModel[]>([]);

  useEffect(()=>{
    getSongs(setSongs)
  }, [] )

  const songModel : SongModel = {
    _id : 'thisistheid : ',
    title : "tes"
  }

  return (
    <div className="App">
      <header className="App-header">
        Taiko Score Tracker
        {
          songs.map (showSongs)
          
        }
        <button onClick = {testButton}>test</button>
      </header>
    </div>
  );
}

function testButton(){
  
}

function showSongs(songModel : SongModel){
  return <Song
    model = { songModel }
  />
}

export default App;
