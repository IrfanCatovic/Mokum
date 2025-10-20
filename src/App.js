import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <main className="main-content">
        <MenuSection title="Breakfast & Snacks" id="breakfast" />
        <MenuSection title="Sandwiches" id="sandwiches" />
        <MenuSection title="Eintöpfe" id="eintöpfe" />

        <MenuSection title="Hauptgerichte" id="main" />
        <MenuSection title="Desserts" id="desserts" />
        <MenuSection title="Heissgetränke" id="heissgetränke" />
        <MenuSection title="Getränke" id="getränke" />
        <MenuSection title="Frischgepresst" id="frischgepresst" />
        <MenuSection title="Bier" id="bier" />
        <MenuSection title="Spirituosen" id="spirituosen" />
        <MenuSection
          title="Alkoholfreie-cocktails"
          id="alkoholfreie-cocktails"
        />
        <MenuSection title="Weine" id="weine" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
