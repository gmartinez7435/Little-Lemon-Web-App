import React, { useState } from "react";
import Top_Nav_Logo from "../assets/Top_Nav_Logo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
    <header className="nav-header">
      <img src={Top_Nav_Logo} alt="Logo" className="nav-logo" />
      <div className="hamburger" onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
      </div>
      <nav className={`main-nav ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Log In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

