import React from "react";
import "./styles.css";
import Player from "../../objects/Player";
import Tabuleiro from "../../objects/Tabuleiro";

function Hashtag() {
  return (
    <Tabuleiro>
      <ul className="hashtag">
        <li className="item">
          <Player escolha="X" />
        </li>
        <li className="item">
          <Player escolha="X" />
        </li>
        <li className="item">
          <Player escolha="X" />
        </li>

        <li className="item">
          <Player escolha="X" />
        </li>
        <li className="item">
          <Player escolha="X" />
        </li>
        <li className="item">
          <Player escolha="X" />
        </li>

        <li className="item">
          <Player escolha="X" />
        </li>
        <li className="item">
          <Player escolha="X" />
        </li>
        <li className="item">
          <Player escolha="X" />
        </li>
      </ul>
    </Tabuleiro>
  );
}

export default Hashtag;
