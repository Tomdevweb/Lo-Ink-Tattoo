import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="menu-container">
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          MENU
        </button>
        {isOpen && (
          <div className="menu-items">
            <Link to="#apropos" smooth>
              à propos
            </Link>
            <Link to="#galerie" smooth>
              galerie
            </Link>
            <Link to="#faq" smooth>
              faq
            </Link>
            <Link to="#contact" smooth>
              contact
            </Link>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default Menu;
