import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill all fields!");
      return;
    }

    alert("Login Successful ✅");
    localStorage.setItem("auth", "true");
    navigate("/");
  };

  return (
    <div style={page}>
      
      <div style={glassBox}>
        <h2>Welcome back!</h2>
        <h3>Please enter your credentials</h3>
        <p>Login to access your portfolio</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        <button style={button} onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>

    </div>
  );
}

/* ✅ FULL SCREEN CENTER */
const page = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

/* ✅ FULL GLASS BOX (FIXED) */
const glassBox = {
  width: "100%",
  maxWidth: "500px",   // keeps it nice, not too wide
  padding: "40px",
  borderRadius: "20px",
  textAlign: "center",

  background: "rgba(255,255,255,0.2)",
  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)",

  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
};

/* INPUT */
const input = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "none",
  outline: "none",
};

/* BUTTON */
const button = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  background: "#0f5c5c", // matches your sidebar theme
  color: "white",
  fontWeight: "bold",
};