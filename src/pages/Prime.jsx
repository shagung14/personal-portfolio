import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Prime() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkPrime = () => {
    const num = Number(number);

    if (number.trim() === "") {
      setResult("Please enter a number!");
      return;
    }

    if (num < 2) {
      setResult("Not a Prime ❌");
      return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        setResult("Not a Prime ❌");
        return;
      }
    }

    setResult("Prime Number ✅");
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="checker-card">
          <h1>Prime Number Checker</h1>

          <h3>Enter a number to check if it's prime</h3>

        
          <input
            type="number"
            placeholder="Enter a number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <button className="btn" onClick={checkPrime}>
            Check
          </button>

          <h2 className="result">{result}</h2>

          <Link to="/" className="back-btn">
            ⬅ Back
          </Link>
        </div>
      </div>
    </div>
  );
}