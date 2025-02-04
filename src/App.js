import Board from "./components/Board";

export default function App() {
  return (
    <>
      {/* Container for all the page content */}
      <div className="col-6 mx-auto card p-4 mt-3">
        {/* Title */}
        <h3 className="text-center">My Tic-Tac-Toe Game</h3>

        {/* Tic-Tac-Toe Board */}
        <Board />
      </div>
    </>
  );
}