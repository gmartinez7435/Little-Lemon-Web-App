import React from 'react'
import lllogo from "../assets/lllogo.jpg";

export default function Footer() {

  return (
    <>
      <img src={lllogo} alt="Logo" className="nav-logo" />
      <nav className="main-nav">
        <label>Doormat Navigation</label>
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

    <nav className='contact-nav'>
      <label>Contact</label>
      <ul>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
    </nav>

    <nav className='social-media-nav'>
      <label>Social Media Links</label>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </nav>
    </>
  )
}
