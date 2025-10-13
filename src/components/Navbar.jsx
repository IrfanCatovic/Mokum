import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">MOKUM</h1>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a href="#breakfast">Breakfast</a>
        </li>
        <li>
          <a href="#sandwiches">Sandwiches</a>
        </li>
        <li>
          <a href="#main">Main Dishes</a>
        </li>
        <li>
          <a href="#desserts">Desserts</a>
        </li>
        <li>
          <a href="#drinks">Drinks</a>
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
