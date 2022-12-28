import React, { Dispatch, SetStateAction } from "react";
import SongModel from "./models/SongModel";


export const getSongs = async (setSongs: Dispatch<SetStateAction<SongModel[]>>) =>{

  const data: SongModel[] = await
    fetch("http://localhost:6942/getDatabase")
      .then(response => response.json())

  setSongs(data);
}