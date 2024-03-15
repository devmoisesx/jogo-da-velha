import React from "react";
import "./styles.css";
import Player from "../../objects/Player";
import Tabuleiro from "../../objects/Tabuleiro";

function Hashtag() {
  return (
    <Tabuleiro>
      <Player escolha="X" />
      <Player escolha="X" />
      <Player escolha="X" />

      <Player escolha="X" />
      <Player escolha="X" />
      <Player escolha="X" />

      <Player escolha="X" />
      <Player escolha="X" />
    </Tabuleiro>
  );
}

export default Hashtag;
