import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <>
      <Navbar />

      <div style={container}>
        <div style={glassBox}>
          <h1> Calculator   </h1>
          <h2> Simple React Calculator </h2>

          <input
            type="text"
            value={input}
            placeholder="Enter calculation"
            readOnly
            style={display}
          />

          <div style={grid}>
            <button style={btn} onClick={() => handleClick("7")}>7</button>
            <button style={btn} onClick={() => handleClick("8")}>8</button>
            <button style={btn} onClick={() => handleClick("9")}>9</button>
            <button style={btn} onClick={() => handleClick("/")}>/</button>

            <button style={btn} onClick={() => handleClick("4")}>4</button>
            <button style={btn} onClick={() => handleClick("5")}>5</button>
            <button style={btn} onClick={() => handleClick("6")}>6</button>
            <button style={btn} onClick={() => handleClick("*")}>*</button>

            <button style={btn} onClick={() => handleClick("1")}>1</button>
            <button style={btn} onClick={() => handleClick("2")}>2</button>
            <button style={btn} onClick={() => handleClick("3")}>3</button>
            <button style={btn} onClick={() => handleClick("-")}>-</button>

            <button style={btn} onClick={() => handleClick("0")}>0</button>
            <button style={btn} onClick={() => handleClick(".")}>.</button>
            <button style={btn} onClick={() => handleClick("+")}>+</button>
          </div>

          <div style={bottomBtns}>
            <button style={equalBtn} onClick={calculate}>
              =
            </button>

            <button style={clearBtn} onClick={clear}>
              C
            </button>
          </div>

          <br />

          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: "#0891b2",
              fontWeight: "bold",
            }}
          >
            ← Back
          </Link>
        </div>
      </div>
    </>
  );
}

/* STYLES */

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  minHeight: "100vh",

  paddingTop: "120px",
  paddingBottom: "40px",
};

const glassBox = {
  width: "420px",
  maxWidth: "95vw",

  padding: "25px",

  borderRadius: "24px",

  backdropFilter: "blur(25px)",

  background: "rgba(255,255,255,0.05)",

  border: "1px solid rgba(255,255,255,0.08)",

  boxShadow: "0 20px 60px rgba(0,0,0,.35)",

  textAlign: "center",
};

const display = {
  width: "100%",
  padding: "15px",
  marginTop: "20px",
  border: "none",
  borderRadius: "10px",
  fontSize: "22px",
  textAlign: "right",
  outline: "none",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "12px",
  marginTop: "25px",
};

const btn = {
  padding: "15px",

  border: "1px solid rgba(0,255,180,.15)",

  borderRadius: "12px",

  background: "rgba(0,255,180,.12)",

  color: "#00ffb4",

  fontWeight: "700",

  cursor: "pointer",

  boxShadow: "0 0 15px rgba(0,255,180,.15)",

  transition: ".3s",
};

const bottomBtns = {
  display: "flex",
  gap: "12px",
  marginTop: "12px",
};

const equalBtn = {
  flex: 1,

  padding: "15px",

  border: "none",

  borderRadius: "12px",

  background: "#00ffb4",

  color: "black",

  fontWeight: "800",

  fontSize: "18px",

  cursor: "pointer",

  boxShadow: "0 0 25px rgba(0,255,180,.35)",
};

const clearBtn = {
  flex: 1,

  padding: "15px",

  border: "1px solid rgba(255,255,255,.08)",

  borderRadius: "12px",

  background: "rgba(255,255,255,.04)",

  color: "white",

  fontSize: "18px",

  cursor: "pointer",
};