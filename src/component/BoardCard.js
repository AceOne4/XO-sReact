import ClearIcon from "@mui/icons-material/Clear";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

export default function BoardCard({ user = "none", winner, id, onClick }) {
  const playHanler = (e) => {
    onClick(e.target.id);
  };
  return (
    <div
      id={id}
      className={`card ${
        winner === "X" && user === "X" && "bg-blue shadow-blue"
      } ${winner === "O" && user === "O" && "bg-yellow shadow-yellow"} ${
        !winner && "shadow-gray"
      }`}
      onClick={playHanler}
    >
      {user === "X" && (
        <ClearIcon
          style={{
            color: `${winner === "X" ? "" : "#30c4be"}`,
            fontSize: "4rem",
          }}
        />
      )}
      {user === "O" && (
        <TripOriginIcon
          style={{
            color: `${winner === "O" ? "" : "#f2b238"}`,
            fontSize: "4rem",
          }}
        />
      )}
    </div>
  );
}
