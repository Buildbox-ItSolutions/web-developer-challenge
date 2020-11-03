import React from "react";

import BxLogo from "../images/Header/bx-logo.png";

import "../styles/components/header.css";

const Header = () => {
  return (
    <div className="header-content">
      <img src={BxLogo} className="bx-logo" alt="Logo" />
    </div>
  );
};

export default Header;
