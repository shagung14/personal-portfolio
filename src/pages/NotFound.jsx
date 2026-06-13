import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="notfound-card">
          <h1 className="error-code">404</h1>
        <h2>Page Not Found 😕</h2>
        <p>The page you are looking for does not exist.</p>

          <Link to="/" className="back-btn">
            ⬅ Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}