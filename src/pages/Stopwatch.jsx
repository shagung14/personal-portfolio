import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="checker-card">

          <h1 align="center">Stopwatch</h1>

          <p align="center">
            Start, stop and reset the timer using
            the controls below.
          </p>

          <div align="center"
            style={{
              fontSize: "70px",
              fontWeight: "700",
              color: "#14b8a6",
              margin: "30px 0"
            }}
          >
            {time}s
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <button
              className="btn"
              onClick={start}
            >
              ▶ Start
            </button>

            <button
              className="btn"
              onClick={stop}
            >
              ⏸ Stop
            </button>

            <button
              className="btn"
              onClick={reset}
            >
              🔄 Reset
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