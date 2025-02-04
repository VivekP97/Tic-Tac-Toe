import Square from "./Square";

export default function Board() {
  return (
    <>
      {/* Tic-Tac-Toe Board */}
      <div className="d-flex flex-column align-items-center my-4">
        {/* Row 1 */}
        <div className="d-flex">
          <Square value="1" />
          <Square value="2" />
          <Square value="3" />
        </div>

        {/* Row 2 */}
        <div className="d-flex">
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
        </div>

        {/* Row 3 */}
        <div className="d-flex">
          <Square value="7" />
          <Square value="8" />
          <Square value="9" />
        </div>
      </div>
    </>
  );
}