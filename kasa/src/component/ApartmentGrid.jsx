import "./ApartmentGrid.css";
import Apartment from "./Apartment.jsx";

export default function ApartmentGrid() {
  return (
    <div className="grid">
      <Apartment title="Titre de la location" />
      <Apartment title="Titre de la location" />
      <Apartment title="Titre de la location" />
      <Apartment title="Titre de la location" />
      <Apartment title="Titre de la location" />
      <Apartment title="Titre de la location" />
    </div>
  );
}
