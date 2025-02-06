import Square from "./Square";
import { useState } from "react";

export default function Board() {
  /* Initialize the board data to keep track of the game state */
  const [gameState, setGameState] = useState([null, null, null, null, null, null, null, null, null]);

  /* This function is triggered when a square is clicked */
  function handleSquareClick(i) {
    const newGameState = gameState.slice();
    newGameState[i] = "X";
    setGameState(newGameState);
  }

  return (
    <>
      {/* Tic-Tac-Toe Board */}
      <div className="d-flex flex-column align-items-center my-4">
        {/* Row 1 */}
        <div className="d-flex">
          <Square value={gameState[0]} onSquareClick={() => handleSquareClick(0)} />
          <Square value={gameState[1]} onSquareClick={() => handleSquareClick(1)} />
          <Square value={gameState[2]} onSquareClick={() => handleSquareClick(2)} />
        </div>

        {/* Row 2 */}
        <div className="d-flex">
          <Square value={gameState[3]} onSquareClick={() => handleSquareClick(3)} />
          <Square value={gameState[4]} onSquareClick={() => handleSquareClick(4)} />
          <Square value={gameState[5]} onSquareClick={() => handleSquareClick(5)} />
        </div>

        {/* Row 3 */}
        <div className="d-flex">
          <Square value={gameState[6]} onSquareClick={() => handleSquareClick(6)} />
          <Square value={gameState[7]} onSquareClick={() => handleSquareClick(7)} />
          <Square value={gameState[8]} onSquareClick={() => handleSquareClick(8)} />
        </div>
      </div>
    </>
  );
}