import React, { Dispatch, SetStateAction } from "react";
import SongModel from "./models/SongModel";


export const getSongs = async (setSongs: Dispatch<SetStateAction<SongModel[]>>) =>{

  const data: SongModel[] = await
    fetch("http://localhost:6942/getDatabase")
      .then(response => response.json())

  setSongs(data);
}

export const addSong = async (model: SongModel, setSongs: Dispatch<SetStateAction<SongModel[]>>) => {

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(model)
  };

  const data: SongModel[] = await
    fetch("http://localhost:6942/putDatabase/", requestOptions)
      .then(res => res.json());
      
  setSongs(data);
}