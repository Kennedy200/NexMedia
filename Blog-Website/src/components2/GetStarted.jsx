import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GetStarted.css'; // Updated path to new CSS
import bookImage from '../assets/book.jpg'; // Ensure this is the correct path
import LearnMore from './LearnMore';
import LearnMore2 from './LearnMore2';
import LearnMore3 from './LearnMore3';
import LearnMore4 from './LearnMore4';

const GetStarted = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // Manage menu open/close state

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle menu state on click
  };

  return (
    <div className="new-gs-page">
      {/* Navigation */}
      <nav className="new-gs-navbar">
        <div className="new-gs-logo">NEX MEDIA</div>
        <div className={`new-gs-menu ${isMenuOpen ? 'new-gs-active' : ''}`}>
          <ul className="new-gs-nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div className="new-gs-nav-right">
          <a href="#learn-more" className="new-gs-learn-more-btn">Learn More</a>
          <div className="new-gs-hamburger-menu" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="new-gs-hamburger-icon"
              width="30"
              height="30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="new-gs-main-content">
        <div className="new-gs-left-content">
          <h1>A Book can <br/> <span className="new-gs-highlight">change </span>your Life.</h1>
          <h2>Let’s make the best investments</h2>
          <p>Read • Listen • Learn • Grow</p>
          <div className="new-gs-buttons">
            <Link to="/signup" className="new-gs-btn new-gs-signup-btn">Sign Up</Link>
            <Link to="/signin" className="new-gs-btn new-gs-signin-btn">Sign In</Link>
          </div>
        </div>
        <div className="new-gs-right-content">
          <img src={bookImage} alt="Person Reading" className="new-gs-book-image" />
        </div>
      </div>

      {/* Learn More Section */}
      <div id="learn-more">
        <LearnMore />
      </div>
      <section id="learn-more-2">
        <LearnMore2 />
      </section>
      <section id="learn-more-3">
        <LearnMore3 />
      </section>
      <section id="learn-more-4">
        <LearnMore4 />
      </section>
    </div>
  );
};

export default GetStarted;
