import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import Content from "../component/Content";
import Footer from "../component/Footer";
import "./ApartmentDetails.css";

function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="collapse">
      <button className="collapse-btn" onClick={() => setOpen(o => !o)}>
        <span>{title}</span>
        <span className="collapse-arrow" style={{transform: open ? "rotate(180deg)" : "none"}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 15 12 9 18 15"></polyline></svg>
        </span>
      </button>
      {open && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default function ApartmentDetails() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => {
        // Trouve l'appartement avec l'ID correspondant
        const foundApartment = data.find(apt => apt.id === id);
        setApartment(foundApartment);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur:', error);
        setLoading(false);
      });
  }, [id]);

  // Pendant le chargement
  if (loading) {
    return <div>Chargement...</div>;
  }

  // Si l'appartement n'existe pas, redirection vers 404
  if (!apartment) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Navbar />
      <Content>
        <div className="apartment-details">
          <div className="apartment-gallery">
            <img src={apartment.pictures[0]} alt={apartment.title} />
          </div>
          <div className="apartment-header">
            <div className="apartment-main-info">
              <h1 className="apartment-title">{apartment.title}</h1>
              <p className="apartment-location">{apartment.location}</p>
              <div className="apartment-tags">
                {apartment.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="apartment-host-rating">
              <div className="apartment-host">
                <span className="host-name">{apartment.host.name}</span>
                <img src={apartment.host.picture} alt={apartment.host.name} className="host-picture" />
              </div>
              <div className="apartment-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < parseInt(apartment.rating) ? "star filled" : "star"}>★</span>
                ))}
              </div>
            </div>
          </div>
          <div className="apartment-details-content">
            <Collapse title="Description">
              <p>{apartment.description}</p>
            </Collapse>
            <Collapse title="Équipements">
              <ul>
                {apartment.equipments.map((eq, i) => (
                  <li key={i}>{eq}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </Content>
      <Footer />
    </>
  );
}