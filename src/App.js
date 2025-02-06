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


  return (
    <>
      {/* Container for all the page content */}
      <div className="col-6 mx-auto card p-4 mt-3">
        {/* Title */}
        <h3 className="text-center">My Tic-Tac-Toe Game</h3>

        {/* Tic-Tac-Toe Board */}
        <Board xIsNext={xIsNext} currGameState={currGameState} handleMove={handleMove} />
      </div>
    </>
  );
}