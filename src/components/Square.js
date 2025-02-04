export default function Square({ value }) {
  /* Function to handle when this square is clicked */
  function handleClick() {
    console.log("Clicked!");
  }
  
  return (
    <>
      <button className="square" onClick={handleClick}>{value}</button>
    </>
  );
}