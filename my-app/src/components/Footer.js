import React from 'react'
import logo2 from '../assets/logo2.png';

const Footer = () => {
  return (
    <footer>
        <section>
            <div className="company-info">
                <img src={logo2} alt="logo"/>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>123 Main St, Chicago, IL 60606</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@littlelemon.com</p>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href='https://www.facebook.com'><i className="fab fa-facebook-square"></i></a>Facebook</li>
                        <li><a href='https://www.twitter.com'><i className="fab fa-twitter-square"></i></a>X</li>
                        <li><a href='https://www.instagram.com'><i className="fab fa-instagram"></i></a>Instagram</li>
                    </ul>
                </div>
                </section>
    </footer>
  )
}

export default Footer