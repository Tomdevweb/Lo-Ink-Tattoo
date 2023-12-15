import React from "react";
import Logo from "../assets/logo.png";
import Menu from "./Menu";
const Nav = () => {
  return (
    <nav className="nav">
      <img src={Logo} alt="Logo" />
      <Menu />
    </nav>
  );
};

export default Nav;
