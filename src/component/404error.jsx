import Navbar from "./navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./404error.css";

function Error404() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Error404;
