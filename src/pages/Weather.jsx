import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "ae4499c7179084117bdc0087413e9416";

  const getWeather = async () => {
    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const result = await res.json();

      if (result.cod === "404") {
        alert("City not found ❌");
        setData(null);
        setLoading(false);
        return;
      }

      setData(result);
    } catch (error) {
      alert("Error fetching weather data ❌");
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="checker-card">

          <h1>🌦 Weather App</h1>

          <h3>
            Check the current weather of any city.
          </h3>

          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getWeather();
              }
            }}
          />

          <button
            className="btn"
            onClick={getWeather}
          >
            {loading ? "Loading..." : "Check Weather"}
          </button>

          {data && (
            <div className="weather-info">

              <h2 style={{ textAlign: "center" }}>
                📍 {data.name}
              </h2>

              <p style={{ textAlign: "center" }}>
                🌡 Temperature: {data.main.temp}°C
              </p>

              <p style={{ textAlign: "center" }}>
                ☁ Condition: {data.weather[0].main}
              </p>

              <p style={{ textAlign: "center" }}>
                💧 Humidity: {data.main.humidity}%
              </p>

              <p style={{ textAlign: "center" }}>
                🌬 Wind Speed: {data.wind.speed} m/s
              </p>

            </div>
          )}

          {/* BACK BUTTON INSIDE CARD */}

          <Link
            to="/"
            className="back-btn"
          >
            ⬅ Back to Dashboard
          </Link>

        </div>
      </div>
    </div>
  );
}