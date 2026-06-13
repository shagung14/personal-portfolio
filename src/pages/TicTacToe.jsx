import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function TicTacToe() {
  const [board, setBoard] = useState(
    Array(9).fill("")
  );

  const [isXTurn, setIsXTurn] =
    useState(true);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner(currentBoard) {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return null;
  }

  const winner = checkWinner(board);

  const isDraw =
    !winner &&
    board.every((cell) => cell !== "");

  const handleClick = (index) => {
    if (
      board[index] ||
      winner ||
      isDraw
    )
      return;

    const newBoard = [...board];

    newBoard[index] =
      isXTurn ? "X" : "O";

    setBoard(newBoard);

    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="checker-card">

          <h1 style={{ textAlign: "center" }}>
           Tic Tac Toe
          </h1>

          <p
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Challenge your friends in this
            interactive React game.
          </p>

          <div className="ticBoard">

            {board.map((cell, index) => (
              <button
                key={index}
                className="ticCell"
                onClick={() =>
                  handleClick(index)
                }
              >
                {cell}
              </button>
            ))}

          </div>

          <h2
            style={{
              textAlign: "center",
              marginTop: "25px",
            }}
          >
            {winner ? (
              `🏆 Winner: ${winner}`
            ) : isDraw ? (
              "🤝 It's a Draw!"
            ) : (
              `Turn: ${
                isXTurn ? "X" : "O"
              }`
            )}
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              className="btn"
              onClick={resetGame}
            >
              Reset Game
            </button>
          </div>

          <div
            style={{
              textAlign: "center",
            }}
          >
            <Link
              to="/"
              className="back-btn"
            >
              ⬅ Back to Dashboard
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}