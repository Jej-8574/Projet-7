import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="public/logo-black.png" alt="logo" width={122} />
      </div>
      <div className="footer__texte">© 2020 KASA. All rights reserved</div>
    </div>
  );
}

export default Footer;
