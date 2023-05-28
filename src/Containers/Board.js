import React, { useContext } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import BoardCard from "../component/BoardCard";
import { gamecontext } from "../store/store";
const winnigCasr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 7],
  [2, 4, 6],
  [0, 4, 8],
];
function Board() {
  const {
    showModal,
    scoreCont,
    playerActive,
    XisActive,
    OisActive,
    tiring,
    tires,
    scoreX,
    winner,
    playerWinner,
    scoreO,
    square,
  } = useContext(gamecontext);

  const onClick = (e) => {
    if (square[e] === "") {
      square[e] = playerActive;
      const checking = winnigCasr
        .map((el) => el.every((it) => square[it] === playerActive))
        .find((a) => a === true);
      tiring();
      if (checking) {
        winner(playerActive);
        scoreCont(playerActive);
        showModal();
      }

      if (playerActive === "X") OisActive();
      if (playerActive === "O") XisActive();
    } else return;
  };
  const restartHandler = () => {
    showModal();
  };
  return (
    <div className="board">
      <div className="board_header">
        <div className="board_xo">
          <ClearIcon style={{ color: "#30c4be", fontSize: "3rem" }} />
          <TripOriginIcon style={{ color: "#f2b238", fontSize: "2rem" }} />
        </div>

        <div className="baord_turn">
          <p>{playerActive} Turn</p>
        </div>

        <div>
          <Button
            onClick={restartHandler}
            className="btn btn-sm board_restart"
            style={{
              color: "#1f3640",
              backgroundColor: "#a8bec9 ",
            }}
          >
            <RestartAltIcon />
          </Button>
        </div>
      </div>
      <div className="board_body">
        {square.map((sq, i) => (
          <BoardCard
            key={i}
            user={sq}
            id={i}
            onClick={onClick}
            winner={playerWinner}
          />
        ))}
      </div>
      <div className="board_footer">
        <div className="card bg-blue">
          <p> x (you)</p>
          <strong className="text-2x1">{scoreX}</strong>
        </div>
        <div className="card bg-light">
          <p> tiers</p>
          <strong className="text-2x1"> {tires} </strong>
        </div>
        <div className="card bg-yellow">
          <p> O (CPU)</p>
          <strong className="text-2x1"> {scoreO}</strong>
        </div>
      </div>
    </div>
  );
}

export default Board;
