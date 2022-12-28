import React from "react";
import SongModel from "../models/SongModel";


interface props {
  model : SongModel
}

export const Song: React.FC<props> = (props) => {
  return (
    <div>
      {props.model._id}
      {props.model.title}
    </div>
    )
}