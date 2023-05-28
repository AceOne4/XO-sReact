import React, { useContext } from "react";
import { gamecontext } from "../../store/store";

function Win() {
  const { playerWinner, restart, nextRound } = useContext(gamecontext);
  const quitHandler = () => {
    restart();
  };
  const nexRHandler = () => {
    nextRound();
  };
  return (
    <div className="score">
      <p>You Won</p>
      <h3 className="score_title">
        <span className="X_color">{playerWinner}</span> Takes the Round
      </h3>
      <div className="score_btn">
        <button onClick={quitHandler} className="btn btn-sm">
          Quit
        </button>
        <button onClick={nexRHandler} className="btn btn-sm btn-yellow">
          Next Round
        </button>
      </div>
    </div>
  );
}

export default Win;
