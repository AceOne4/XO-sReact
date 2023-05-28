import { useContext } from "react";
import Modal from "./component/Modal/Modal";
import Board from "./Containers/Board";
import Start from "./Containers/Start";
import "./index.css";
import { gamecontext } from "./store/store";

function App() {
  const { isGameActive, Modals } = useContext(gamecontext);
  console.log(Modal);
  return (
    <div className="App">
      <div className="container">
        {!isGameActive && <Start />}
        {isGameActive && <Board />}
      </div>
      {Modals && <Modal />}
    </div>
  );
}

export default App;
