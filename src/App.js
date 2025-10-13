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
        <MenuSection title="Main Dishes" id="main" />
        <MenuSection title="Desserts & Coffee" id="desserts" />
        <MenuSection title="Drinks & Beverages" id="drinks" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
