import React, { useState } from 'react';
import './ContactUs.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState({
    location: false,
    phone: false,
    email: false
  });

  const toggleDropdown = (type) => {
    setIsOpen({
      ...isOpen,
      [type]: !isOpen[type]
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <hr />
      <div className="contact-icons">
        <div className="icon-container">
          <FaMapMarkerAlt
            className="contact-icon"
            onClick={() => toggleDropdown('location')}
          />
          {isOpen.location && (
            <div className="dropdown">
              <p>551 Victoria Island, Lagos, Nigeria</p>
            </div>
          )}
        </div>
        <div className="icon-container">
          <FaPhoneAlt
            className="contact-icon"
            onClick={() => toggleDropdown('phone')}
          />
          {isOpen.phone && (
            <div className="dropdown">
              <p>+(234)-705-723-3318</p>
            </div>
          )}
        </div>
        <div className="icon-container">
          <FaEnvelope
            className="contact-icon"
            onClick={() => toggleDropdown('email')}
          />
          {isOpen.email && (
            <div className="dropdown">
              <p>kennedychigozie883@gmail.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
