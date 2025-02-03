export default function GameBoard() {
  return (
    <>
      <div className="col-6 mx-auto card p-4 mt-3">
        <h3 className="text-center">My Tic-Tac-Toe Game</h3>
        <div className="d-flex flex-column align-items-center my-4">
          <div className="d-flex">
            <button className="square">X</button>
            <button className="square">O</button>
            <button className="square">X</button>
          </div>
          <div className="d-flex">
            <button className="square">O</button>
            <button className="square">X</button>
            <button className="square">O</button>
          </div>
          <div className="d-flex">
            <button className="square">X</button>
            <button className="square">O</button>
            <button className="square">X</button>
          </div>
        </div>
      </div>
    </>
  );
}