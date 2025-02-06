import { useState } from "react";
import Board from "./components/Board";

export default function App() {
  /* Initialize state for keeping track of user turns */
  const [xIsNext, setXIsNext] = useState(true);

  /* Initialize the history state (to keep track of moves) */
  const [history, setHistory] = useState([
    [null, null, null, null, null, null, null, null, null]
  ]);

  // Set the current state of the game from the history
  const currGameState = history[history.length-1];

  // Function to handle a move made by a player
  function handleMove(newGameState) {
    // Append the move to the history
    setHistory([...history, newGameState]);

    setXIsNext(!xIsNext);
  }

  // Function to undo the last move
  function undoMove() {
    // Remove the last element of 'history' and set that as the new value
    setHistory(history.slice(0, history.length-1));
    setXIsNext(!xIsNext);
  }

  // Function to reset the game board
  function resetBoard() {
    setHistory([
      [null, null, null, null, null, null, null, null, null]
    ]);
    setXIsNext(true);
  }


  return (
    <>
      {/* Container for all the page content */}
      <div className="col-6 mx-auto card p-4 mt-3">
        {/* Title */}
        <h3 className="text-center">My Tic-Tac-Toe Game</h3>

        {/* Tic-Tac-Toe Board */}
        <Board xIsNext={xIsNext} currGameState={currGameState} handleMove={handleMove} />

        {/* Game control buttons */}
        <div class="d-flex justify-content-center">
          <button class="btn btn-primary btn-sm me-2" disabled={history.length===1} onClick={undoMove}>Undo</button>
          <button class="btn btn-danger btn-sm" onClick={resetBoard}>Reset</button>
        </div>
      </div>
    </>
  );
}