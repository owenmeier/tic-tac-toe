export default function Slider({ history, currentMove, jumpTo }) {
  return (
    <>
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
    </>
  );
}
