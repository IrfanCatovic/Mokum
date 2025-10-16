import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="Mokum Logo"
        style={{ height: "40px", width: "auto" }}
      />

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a href="#breakfast">Breakfast</a>
        </li>

        <li>
          <a href="#sandwiches">Sandwiches</a>
        </li>
        <li>
          <a href="#eintöpfe">Eintöpfe</a>
        </li>
        <li>
          <a href="#main">Hauptgerichte</a>
        </li>
        <li>
          <a href="#desserts">Desserts</a>
        </li>
        <li>
          <a href="#heissgetränke">Getränke</a>
        </li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
