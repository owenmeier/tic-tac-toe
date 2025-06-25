export default function Slider({ history, currentMove, jumpTo }) {
  return (
    <input
      type="range"
      min="0"
      max={history.length - 1}
      value={currentMove}
      onChange={(e) => jumpTo(Number(e.target.value))}
      style={{ width: "100px", display: "block" }}
    ></input>
  );
}
