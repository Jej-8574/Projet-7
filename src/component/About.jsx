import Navbar from "./navbar";
import Footer from "./Footer";
import "./about.css";
import { useState } from "react";

const dropdowns = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.",
  },
];

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <img
        src="/banner-about.png.jpg"
        alt="Montagnes"
        className="about-banner"
      />

      <div className="about-container">
        <div className="about-dropdowns">
          {dropdowns.map((item, idx) => (
            <div key={item.title} className="about-dropdown">
              <button
                className="about-dropdown-btn"
                onClick={() => handleToggle(idx)}
              >
                <span>{item.title}</span>
                <span
                  className={`about-arrow ${openIndex === idx ? "open" : ""}`}
                >
                  &#8964;
                </span>
              </button>
              {openIndex === idx && (
                <div className="about-dropdown-content">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
