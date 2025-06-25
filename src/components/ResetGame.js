export default function ResetGame({ setHistory, setCurrentMove }) {
  return (
    <button
      style={{ backgroundColor: "lime", marginTop: "4px", width: "100px" }}
      onClick={() => {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
      }}
    >
      Reset Game
    </button>
  );
}
