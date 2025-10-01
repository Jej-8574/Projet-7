import "./Apartment.css";
import { useNavigate } from "react-router-dom";

export default function Apartment({ title, cover, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/apartment/${id}`);
  };

  return (
    <div className="apartment-card" onClick={handleClick}>
      <img src={cover} alt={title} className="apartment-image" />
      <p className="apartment-title">{title}</p>
    </div>
  );
}
