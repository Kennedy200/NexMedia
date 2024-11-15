import React, { useState } from 'react';
import './Header.css'; // Link to your new CSS file
import { FaBars } from 'react-icons/fa'; // Hamburger icon
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (event, target) => {
    event.preventDefault();
    const section = document.getElementById(target);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className="navbar-header">
      {/* This is where you can set your background image */}
      <div className="navbar-overlay"></div>
      <div className="navbar-container">
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul className={`navbar-links ${isMenuOpen ? 'nav-open' : ''}`}>
            <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
            <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact Us</a></li>
          </ul>
          <FaBars className="navbar-hamburger" onClick={toggleMenu} />
        </nav>

        <h1 className="navbar-title">Nex Media</h1>
        <p className="navbar-subtitle">Humanizing Digital Spaces. Building Sites with Soul.</p>
        <Link to="/getstarted">
          <button className="navbar-cta">Get Started</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
