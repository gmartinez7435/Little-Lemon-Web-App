import React from "react";
import footerLogo from "../assets/footer_Logo.png";

export default function Footer() {
  return (
    <footer className="nav-footer">
      <img src={footerLogo} alt="Logo" className="ftnav-logo" />
        <nav className="footer-nav">
          <ul>
            <label id="doormat">
              Doormat<br></br> Navigation
            </label>
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

        <nav className="contact-nav">
          <ul>
            <label id="contact">Contact</label>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </nav>

        <nav className="social-media-nav">
          <ul>
            <label id="social">Social Media Links</label>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </nav>
    </footer>
  );
}

