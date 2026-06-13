import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const themes = [
  {
    name: "dark",
    label: "Dark 🌙",
    background: "#050505",
    color: "#ffffff",
  },
  {
    name: "ocean",
    label: "Ocean 💙",
    background: "linear-gradient(135deg,#0f172a,#1e3a8a)",
    color: "#ffffff",
  },
  {
    name: "purple",
    label: "Purple 💜",
    background: "linear-gradient(135deg,#581c87,#7c3aed)",
    color: "#ffffff",
  },
  {
    name: "pink",
    label: "Pink 🌸",
    background: "linear-gradient(135deg,#ec4899,#f472b6)",
    color: "#ffffff",
  },
  {
    name: "sunset",
    label: "Sunset 🌅",
    background: "linear-gradient(135deg,#ea580c,#f59e0b)",
    color: "#ffffff",
  },
  {
    name: "mint",
    label: "Mint 🍃",
    background: "linear-gradient(135deg,#14b8a6,#22c55e)",
    color: "#ffffff",
  },
];

export default function Theme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("portfolioTheme") || "dark"
  );

  const [auto, setAuto] = useState(false);

  useEffect(() => {
    const selected = themes.find((t) => t.name === theme);

    if (selected) {
      document.body.style.background = selected.background;
      document.body.style.color = selected.color;
    }

    localStorage.setItem("portfolioTheme", theme);
  }, [theme]);

  useEffect(() => {
    if (!auto) return;

    const interval = setInterval(() => {
      setTheme((prev) => {
        const currentIndex = themes.findIndex(
          (t) => t.name === prev
        );

        const nextIndex =
          (currentIndex + 1) % themes.length;

        return themes[nextIndex].name;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [auto]);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="checker-card">

          <h1 align="center"> Theme Studio</h1>

          <p align="center">
            Personalize your portfolio experience
            with beautiful themes.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(140px,1fr))",
              gap: "15px",
              marginTop: "25px",
            }}
          >
            {themes.map((t) => (
              <div
                key={t.name}
                onClick={() => {
                  setAuto(false);
                  setTheme(t.name);
                }}
                style={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  padding: "25px",
                  textAlign: "center",
                  fontWeight: "600",
                  color: "white",
                  background: t.background,
                  border:
                    theme === t.name
                      ? "3px solid #14b8a6"
                      : "1px solid rgba(255,255,255,.1)",
                  transition: ".3s",
                }}
              >
                {t.label}
              </div>
            ))}
          </div>

          <button
            className="btn"
            style={{
              marginTop: "25px",
            }}
            onClick={() => setAuto(!auto)}
          >
            {auto
              ? "⏹ Stop Auto Mode"
              : "🔄 Auto Theme Switch"}
          </button>

          <br />

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