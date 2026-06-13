import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Armstrong() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    if (!num.trim()) {
      setResult("❌ Please enter a number");
      return;
    }

    const n = Number(num);
    let temp = n;
    let sum = 0;
    const digits = num.length;

    while (temp > 0) {
      const digit = temp % 10;
      sum += digit ** digits;
      temp = Math.floor(temp / 10);
    }

    if (sum === n) {
      setResult("✅ Armstrong Number");
    } else {
      setResult("❌ Not an Armstrong Number");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="checker-card">

          <h1 align="center">Armstrong Checker</h1>

          <p
            style={{
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            Enter a number and instantly verify
            whether it is an Armstrong Number.
          </p>

          <input
            type="number"
            placeholder="Enter a number..."
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />

          <button
            className="btn"
            style={{
              width: "100%",
              marginTop: "18px",
            }}
            onClick={checkArmstrong}
          >
            Check Number
          </button>

          {result && (
            <div
              style={{
                marginTop: "25px",
                padding: "18px",
                borderRadius: "16px",
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {result}
            </div>
          )}

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