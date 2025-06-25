import { useState } from "react";
import Board from "./components/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
      </div>
      <input
        type="range"
        min="0"
        max={history.length - 1}
        value={currentMove}
        onChange={(e) => jumpTo(Number(e.target.value))}
        style={{ width: "100px", display: "block" }}
      ></input>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100px",
          fontSize: "0.8em",
          marginTop: "4px",
        }}
      >
        {Array.from({ length: history.length }, (_, i) => (
          <span key={i} style={{ textAlign: "center", width: "1.5em" }}>
            {i}
          </span>
        ))}
      </div>
      <button
        style={{ backgroundColor: "lime", marginTop: "4px", width: "100px" }}
        onClick={() => {
          setHistory([Array(9).fill(null)]);
          setCurrentMove(0);
        }}
      >
        Reset Game
      </button>
    </>
  );
}
