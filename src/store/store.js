import { createContext, useState } from "react";

export const gamecontext = createContext({
  square: new Array(9).fill(""),
  isGameActive: false,
  playerWinner: "",
  playerActive: "X",
  scoreX: 0,
  scoreO: 0,
  tires: 0,
  Modals: false,
  scoring: () => {},
  XisActive: () => {},
  OisActive: () => {},
  startGame: () => {},
  tiring: () => {},
  winner: (player) => {},
  scoreCont: (player) => {},
  showModal: () => {},
  hideModal: () => {},
  restart: () => {},
  nextRound: () => {},
});

function GameProvider(props) {
  const [start, setstart] = useState(false);
  const [pActive, setpActive] = useState("X");
  const [tires, settires] = useState(0);
  const [Winner, setWinner] = useState("");
  const [scoreX, setscoreX] = useState(0);
  const [scoreO, setscoreO] = useState(0);
  const [Modals, setmodal] = useState(false);
  const [squares, setsquares] = useState(new Array(9).fill(""));
  const startGame = () => {
    setstart(true);
  };
  const XisActive = () => {
    setpActive("X");
  };
  const OisActive = () => {
    setpActive("O");
  };
  const tiring = () => {
    settires((prev) => prev + 1);
  };
  const winner = (player) => {
    setWinner(player);
  };
  const scoreCont = (player) => {
    if (player === "X") setscoreX((prev) => prev + 1);
    if (player === "O") setscoreO((prev) => prev + 1);
  };
  const showModal = () => {
    setmodal(true);
  };
  const hideModal = () => {
    setmodal(false);
  };
  const restart = () => {
    document.location.reload();
  };
  const nextRound = () => {
    setmodal(false);
    setsquares(new Array(9).fill(""));
    setWinner("");
  };
  const ctxValue = {
    square: squares,
    restart,
    nextRound,
    isGameActive: start,
    playerActive: pActive,
    playerWinner: Winner,
    Modals,
    scoreCont,
    tires,
    startGame,
    XisActive,
    OisActive,
    tiring,
    scoreX,
    winner,
    scoreO,
    showModal,
    hideModal,
  };

  return (
    <gamecontext.Provider value={ctxValue}>
      {props.children}
    </gamecontext.Provider>
  );
}

export default GameProvider;
