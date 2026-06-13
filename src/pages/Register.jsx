import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("All fields are required!");
      return;
    }

    alert("Registration Successful 🎉");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={page}>

      <div style={glassBox}>
        <h1>Register</h1>
        <h2>Create your account</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

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

        <button style={button} onClick={handleRegister}>
          Register
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

        <Link to="/" style={backBtn}>
          ⬅ Back
        </Link>
      </div>

    </div>
  );
}

/* ✅ FULL PAGE CENTER */
const page = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

/* ✅ GLASS BOX */
const glassBox = {
  width: "100%",
  maxWidth: "500px",
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
  background: "#0f5c5c", // matches sidebar
  color: "white",
  fontWeight: "bold",
};

/* BACK BUTTON */
const backBtn = {
  display: "inline-block",
  marginTop: "15px",
  color: "#0f5c5c",
  textDecoration: "none",
  fontWeight: "bold",
};