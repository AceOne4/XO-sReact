import React, { useContext, useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { gamecontext } from "../store/store";

function Start(props) {
  const { startGame } = useContext(gamecontext);
  const Xref = useRef();
  const Oref = useRef();

  const [player, setplayer] = useState("X");

  const chooseHandler = (e) => {
    if (Xref.current === e.target) setplayer(Xref.current.dataset.player);
    if (Oref.current === e.target) setplayer(Oref.current.dataset.player);
    console.log(player);
  };
  const newGameHanler = () => {
    startGame();
  };
  const XisActive = `${player === "X" && "start_playes--active"}`;
  const OisActive = `${player === "O" && "start_playes--active"}`;
  console.log(XisActive);
  return (
    <div className="start">
      <div className="start_header">
        <ClearIcon style={{ color: "#30c4be", fontSize: "4rem" }} />

        <TripOriginIcon style={{ color: "#f2b238", fontSize: "3rem" }} />
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">Pick Player 1st Mark</h1>
        <div className="start_players">
          <span
            ref={Xref}
            onClick={chooseHandler}
            data-player="X"
            className={XisActive}
          >
            <ClearIcon
              style={{
                color: `${XisActive ? "#1f3640" : "#a8bec9"}`,
                fontSize: "4rem",
              }}
            />
          </span>
          <span
            className={OisActive}
            onClick={chooseHandler}
            data-player="O"
            ref={Oref}
          >
            <TripOriginIcon
              style={{
                color: `${OisActive ? "#1f3640" : "#a8bec9"}`,
                fontSize: "3rem",
              }}
            />
          </span>
        </div>
        <p className="text-light">Remeber : X goes first</p>
      </div>
      <div className="start_btns">
        <button className="btn btn-yellow">New Game (vs CPU)</button>
        <button className="btn btn-blue" onClick={newGameHanler}>
          New Game (vs Player)
        </button>
      </div>
    </div>
  );
}

export default Start;
