import React from "react";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <BrowserRouter>
      <div className="footer-container">
        <p>
          © {date} tous droits réservés <br /> à lo ink tattoo
        </p>
        <Link to="#top" smooth className="footer-links">
          Retour en haut
        </Link>
        <div className="links-container">
          <Link className="footer-links" to="https://gmail.com">
            email
          </Link>
          <Link className="footer-links" to="https://instagram.com/lo.ink.tattoo">
            instagram
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Footer;
