import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="Mokum Logo"
        style={{ height: "40px", width: "auto" }}
      />

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a href="#breakfast" onClick={handleClick}>
            Breakfast
          </a>
        </li>

        <li>
          <a href="#sandwiches" onClick={handleClick}>
            Sandwiches
          </a>
        </li>
        <li>
          <a href="#eintöpfe" onClick={handleClick}>
            Eintöpfe
          </a>
        </li>
        <li>
          <a href="#main" onClick={handleClick}>
            Hauptgerichte
          </a>
        </li>
        <li>
          <a href="#desserts" onClick={handleClick}>
            Desserts
          </a>
        </li>
        <li>
          <a href="#heissgetränke" onClick={handleClick}>
            Getränke
          </a>
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
