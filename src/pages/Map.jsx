import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/* Fix Leaflet Marker */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapPage() {
  const [city, setCity] = useState("");

  const [position, setPosition] = useState([
    28.6139,
    77.2090,
  ]);

  const searchLocation = async () => {
    if (!city.trim()) return;

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
      );

      const data = await res.json();

      if (!data.length) {
        alert("Location not found");
        return;
      }

      setPosition([
        parseFloat(data[0].lat),
        parseFloat(data[0].lon),
      ]);
    } catch {
      alert("Search failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <div className="checker-card">

          <h1 style={{ textAlign: "center" }}>
            Interactive Map
          </h1>

          <p
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Search any city in the world.
          </p>

          {/* SEARCH BAR */}

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Search city..."
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
            />

            <button
              className="btn"
              onClick={searchLocation}
            >
              Search
            </button>
          </div>

          {/* MAP */}

          <div
            style={{
              height: "450px",
              width: "100%",
              borderRadius: "20px",
              overflow: "hidden",
              border:
                "1px solid rgba(255,255,255,.1)",
            }}
          >
            <MapContainer
              key={`${position[0]}-${position[1]}`}
              center={position}
              zoom={13}
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <TileLayer
                attribution="© OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={position}>
                <Popup>
                  📍 Selected Location
                </Popup>
              </Marker>

            </MapContainer>
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