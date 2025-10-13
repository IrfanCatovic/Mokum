import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MOKUM Restaurant · Frankfurt</p>
      <p>Prijatno · Guten Appetit · Enjoy your meal</p>
    </footer>
  );
};

export default Footer;
