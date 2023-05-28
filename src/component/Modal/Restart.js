import React, { useContext } from "react";
import { gamecontext } from "../../store/store";

function Restart() {
  const { restart, hideModal } = useContext(gamecontext);
  const canelHandler = () => {
    hideModal();
  };
  const restartHandler = () => {
    restart();
  };
  return (
    <div className="restart">
      <h3 className="restart_title">Restart Game ?</h3>
      <div className="restart_btn">
        <button onClick={canelHandler} className="btn btn-sm">
          No , Cancel
        </button>
        <button onClick={restartHandler} className="btn btn-sm btn-yellow">
          YEs , Restart
        </button>
      </div>
    </div>
  );
}

export default Restart;
