import "./ApartmentGrid.css";
import Apartment from "./Apartment.jsx";
import { useState, useEffect } from "react";

export default function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        console.log('Données récupérées:', data); // Pour voir les données dans la console
        setApartments(data);
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
  }, []);

  // Vérification que apartments est bien un tableau
  if (!Array.isArray(apartments)) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="grid">
      {apartments.map(apartment => (
        <Apartment 
          key={apartment.id}
          id={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
        />
      ))}
    </div>
  );
}
