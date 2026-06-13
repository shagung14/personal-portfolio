import { useNavigate } from "react-router-dom";

const Card = ({ title, path, icon, description }) => {
  const navigate = useNavigate();

  return (
    <div className="pro-card" onClick={() => navigate(path)}>
      
      {/* ICON */}
      <div className="card-icon">{icon}</div>

      {/* TITLE */}
      <h3>{title}</h3>

      {/* DESCRIPTION */}
      <p>{description}</p>

      {/* HOVER EFFECT LINE */}
      <div className="card-glow"></div>

    </div>
  );
};

export default Card;