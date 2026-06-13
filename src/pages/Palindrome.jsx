import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Palindrome() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const checkPalindrome = () => {
    if (input.trim() === "") {
      setResult("Please enter something!");
      return;
    }

    const cleaned = input.toLowerCase();
    const reversed = cleaned.split("").reverse().join("");

    if (cleaned === reversed) {
      setResult("Palindrome ✅");
    } else {
      setResult("Not a Palindrome ❌");
    }
  };

  return (
    <><>
      <Navbar />
        </><div className="container">
        <div className="checker-card">
          <h1 style={{ textAlign: "center" }}>Palindrome Checker</h1>
          <h3>Enter text or number to check if it's  palindrome or not</h3>
          <input
            type="text"
            placeholder="Enter text or number"
            value={input}
            onChange={(e) => setInput(e.target.value)} />

          <button className="btn" onClick={checkPalindrome}>
            Check
          </button>

          <h2 className="result">{result}</h2>
         <Link to="/" className="back-btn">⬅ Back</Link>
          </div>
      </div></>
  );
}