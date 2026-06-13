import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div className="counterPage">

        <div className="modernCounterCard">

          <h1>Counter App</h1>

          <p>
            Practice React state management with
            increment, decrement and reset.
          </p>

          <div className="modernCounterNumber">
            {count}
          </div>

          <div className="modernCounterButtons">

            <button
              className="modernBtn plus"
              onClick={() => setCount(count + 1)}
            >
              + Increment
            </button>

            <button
              className="modernBtn minus"
              onClick={() => setCount(count - 1)}
            >
              - Decrement
            </button>

            <button
              className="modernBtn resetBtn"
              onClick={() => setCount(0)}
            >
              Reset
            </button>

          </div>

          <Link
            to="/"
            className="back-btn"
          >
            ⬅ Back to Dashboard
          </Link>

        </div>

      </div>
    </>
  );
}