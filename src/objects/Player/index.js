import React from "react";
import "./styles.css";

function Player({ escolha }) {
  return <button className="player">{escolha}</button>;
}

export default Player;
