import "./footer.css";
import logoBlack from "../assets/logo-black.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logoBlack} alt="logo" width={122} />
      </div>
      <div className="footer__texte">© 2020 KASA. All rights reserved</div>
    </div>
  );
}

export default Footer;
