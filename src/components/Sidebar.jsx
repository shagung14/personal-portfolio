import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>💼 Portfolio</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/stopwatch">Stopwatch</Link>
      <Link to="/palindrome">Palindrome</Link>
      <Link to="/armstrong">Armstrong</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/notes">Notes</Link>
      <Link to="/map">Map</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/theme">Theme</Link>
    </div>
  );
}