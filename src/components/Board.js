import Square from "./Square";
import { useState } from "react";

export default function Board({xIsNext, currGameState, handleMove}) {

  /* This function is triggered when a square is clicked */
  function handleSquareClick(i) {
    const newGameState = currGameState.slice();

    // Ensure the selected square was not already set
    if (newGameState[i] !== null || calculateWinner(newGameState) !== null) {
      // This square was already selected OR this board has a winner already.
      return;
    }

    // Set the next value on the selected square
    newGameState[i] = xIsNext ? "X" : "O";

    // Execute the callback from the parent to process this move
    handleMove(newGameState);
  }

  // Check for a winner
  let currStatus = "";
  const winner = calculateWinner(currGameState);
  if (!!winner) {
    // There is a winner.
    currStatus = "The winner is '" + winner + "'!";
  } else if (!boardHasMoves(currGameState)) {
    // The board does not have any remaining moves.
    currStatus = "The game is a draw!";
  } else {
    currStatus = "Next move is '" + (xIsNext ? "X" : "O") + "'";
  }

  return (
    <>
      {/* Status message */}
      <p id="status-message" class="text-center mb-0">{currStatus}</p>

      {/* Tic-Tac-Toe Board */}
      <div className="d-flex flex-column align-items-center my-4">
        {/* Row 1 */}
        <div className="d-flex">
          <Square value={currGameState[0]} onSquareClick={() => handleSquareClick(0)} />
          <Square value={currGameState[1]} onSquareClick={() => handleSquareClick(1)} />
          <Square value={currGameState[2]} onSquareClick={() => handleSquareClick(2)} />
        </div>

        {/* Row 2 */}
        <div className="d-flex">
          <Square value={currGameState[3]} onSquareClick={() => handleSquareClick(3)} />
          <Square value={currGameState[4]} onSquareClick={() => handleSquareClick(4)} />
          <Square value={currGameState[5]} onSquareClick={() => handleSquareClick(5)} />
        </div>

        {/* Row 3 */}
        <div className="d-flex">
          <Square value={currGameState[6]} onSquareClick={() => handleSquareClick(6)} />
          <Square value={currGameState[7]} onSquareClick={() => handleSquareClick(7)} />
          <Square value={currGameState[8]} onSquareClick={() => handleSquareClick(8)} />
        </div>
      </div>
    </>
  );
}

/**
 * Function to determine whether the board has a winner. 
 * @returns - Returns 'X', 'O', or null to indicate the winner or lack thereof.
 * */
function calculateWinner(board) {
  // Define all possible winning lines
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // iterate through all winning lines and check the board
  for (let lineIndex = 0; lineIndex < winningLines.length; lineIndex++) {
    const [i, j, k] = winningLines[lineIndex];

    // check the board
    if (!!board[i] && board[i] === board[j] && board[i] === board[k]) {
      // This board has a winner!
      return board[i];
    }
  }

  // This board does not have a winner.
  return null;
}

/**
 * Function to check if there are any more moves to play.
 * @returns - A boolean indicating whether there are any remaining moves.
 */
function boardHasMoves(board) {
  // Iterate through the board and see if there are any empty squares.
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      // There is an empty square.
      return true;
    }
  }

  return false;
}