import React from "react";
import { menuData } from "../Data/MenuData"; // <-- uvoz podataka
import "../styles/menu.css";

const MenuSection = ({ title, id }) => {
  // filtrira jela po kategoriji
  const filteredItems = menuData.filter((item) => item.category === id);

  return (
    <section className="menu-section" id={id}>
      <h3>{title}</h3>
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
