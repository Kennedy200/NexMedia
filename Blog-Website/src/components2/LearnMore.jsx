import React from 'react';
import './LearnMore.css'; // Link to your CSS file
import privacyIcon from '../assets/privacy-icon.jpg'; // Example path
import securityIcon from '../assets/security-icon.jpg'; // Example path
import censorshipIcon from '../assets/censorship-icon.jpg'; // Example path

const LearnMore = () => {
  return (
    <div className="learn-more-section">
      <div className="header-container">
        <h2>What Can Our Service Do For You?</h2>
      </div>
      <div className="features-container">
        {/* Feature 1 */}
        <div className="feature-box">
          <img src={privacyIcon} alt="Digital Privacy" className="feature-icon" />
          <h3>Content Creation and Publishing</h3>
          <p>Effortlessly create and publish blog posts, articles, and more with our intuitive tools designed for beginners and pros alike. Get your voice heard with ease.</p>
        </div>

        {/* Feature 2 */}
        <div className="feature-box">
          <img src={securityIcon} alt="Advanced Security" className="feature-icon" />
          <h3>Front-End Development</h3>
          <p>Our front-end development service ensures visually appealing, user-friendly websites. We focus on responsive design, seamless navigation, and optimized performance across all devices. Nex Media transforms ideas into interactive, dynamic digital experiences that engage users.</p>
        </div>

        {/* Feature 3 */}
        <div className="feature-box">
          <img src={censorshipIcon} alt="Bypass Censorship" className="feature-icon" />
          <h3>Monetization Services</h3>
          <p>Turn your content into revenue with our easy-to-use monetization options. Whether through ads or subscriptions, we help you make the most of your work.</p>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
