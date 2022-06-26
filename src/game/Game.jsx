import "../App";
import "./game.css";
import { useState } from "react";
//import SignIn from "../components/signin/Signinpage";

const Square = (props) => {
  return (
    <button className='square' onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};

const Board = () => {
  const intialSquare = Array(9).fill(null);
  const [squares, setSquares] = useState(intialSquare);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    const winnerDeclared = Boolean(calculateWinner(newSquares));
    const squareFilled = Boolean(newSquares[i]);
    if (winnerDeclared || squareFilled) {
      //return when 3 in a row are matched.. prevent outlier errors
      alert(`GAME OVER WINNER ${winner}`);
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O"; //taking turns
    setSquares(newSquares);
    setXIsNext(!xIsNext); //alternating player
  };
  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
    );
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `winner: ${winner}` && alert(`WINNER WINNER PLAYER ${winner}`)
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function calculateWinner(squares) {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i of line) {
      const [a, b, c] = i;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        //check variations of 3 in a row
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div id='board' class=''>
      <div className='status' id='status_div'>
        {status}
      </div>
      <div className='board-row'>
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}{" "}
      </div>
    </div>
  );
};

export default function Game() {
  return (
    <div id='gamefunction ' class='text-center '>
      <div class='display-2 mt-1 shadow-lg'>TIC TACKY TOES</div>
      <Board />
    </div>
  );
}
