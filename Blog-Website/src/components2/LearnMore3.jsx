import React from 'react';
import './LearnMore3.css'; // CSS file with unique class names
import devicesImage from '../assets/devices.png'; // Replace with the correct image path

// Import icons from react-icons
import { FaWindows, FaAndroid, FaApple, FaChrome, FaFirefox, FaLinux } from 'react-icons/fa';

const LearnMore3 = () => {
  return (
    <div className="enhanced-learn-more-section">
      <div className="enhanced-content-container">
        <div className="enhanced-text-content">
          <h2>Feel the simplicity</h2>
          <p>
            Unlike other blog platforms, Nex Media’s interface allows you to create and publish content effortlessly. No technical expertise is required—just focus on writing while we handle the rest. Experience a seamless workflow that keeps you productive and focused on your creativity.
          </p>
          <p>Available on:</p>
          <div className="enhanced-icons">
            <FaWindows className="enhanced-icon" />
            <FaAndroid className="enhanced-icon" />
            <FaApple className="enhanced-icon" />
            <FaChrome className="enhanced-icon" />
            <FaFirefox className="enhanced-icon" />
            <FaLinux className="enhanced-icon" />
          </div>
        </div>
        <div className="enhanced-image-content">
          <img src={devicesImage} alt="Devices" className="enhanced-devices-image" />
        </div>
      </div>
    </div>
  );
};

export default LearnMore3;
