import React, { useContext } from "react";
import Restart from "./Restart";
import Win from "./Win";
import { gamecontext } from "../../store/store";

function Modal() {
  const { playerWinner } = useContext(gamecontext);

  return (
    <div className="modal">
      <div className="modal_content">
        <div className="container">{playerWinner ? <Win /> : <Restart />}</div>
      </div>
    </div>
  );
}

export default Modal;
