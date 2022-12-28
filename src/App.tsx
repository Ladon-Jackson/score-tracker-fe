import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SongModel  from './models/SongModel';
import { Song } from './components/Song';
import { addSong, getSongs } from './Connector';

function App() {
  
  const [songs, setSongs] = useState<SongModel[]>([]);

  useEffect(()=>{
    getSongs(setSongs)
  }, [] )

  const songModel : SongModel = {
    title : "tes"
  }

  function testButton(){
    addSong(songModel, setSongs)
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


function showSongs(songModel : SongModel){
  return <Song
    model = { songModel }
  />
}

export default App;
