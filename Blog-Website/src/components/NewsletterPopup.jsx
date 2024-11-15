import React, { useState, useEffect } from 'react';
import './NewsletterPopup.css';
import { FaTimes } from 'react-icons/fa';

const NewsletterPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [subscribed, setSubscribed] = useState(false);
    const [emailError, setEmailError] = useState("");

    // Check if the newsletter was shown before
    useEffect(() => {
        const lastVisitTime = localStorage.getItem('lastVisitTime');
        const now = new Date().getTime();

        if (!lastVisitTime || now - lastVisitTime > 5 * 60 * 1000) {
            setIsVisible(true);
        }
        
        localStorage.setItem('lastVisitTime', now);
    }, []);

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubscribe = () => {
        const email = document.getElementById('email-input').value;
        
        // Check if the email is valid
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        // Clear error if email is valid
        setEmailError("");

        // Display thank you message
        setSubscribed(true);

        // Send email to the site admin (replace with your backend logic)
        sendEmailToAdmin(email);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    const sendEmailToAdmin = (email) => {
        // Use a service like EmailJS or an API to send the email
        console.log(`User email: ${email} has subscribed.`);
        // No need for alert
    };

    if (!isVisible) return null;

    return (
        <div className="newsletter-popup">
            <div className="popup-content">
                <div className="popup-header">
                    <h2><span role="img" aria-label="email">📧</span> Nex Media</h2>
                    <FaTimes className="close-icon" onClick={handleClose} />
                </div>
                <div className="popup-body">
                    {subscribed ? (
                        <div className="thank-you-message">
                            <h2>Thank you for subscribing!</h2>
                        </div>
                    ) : (
                        <>
                            <h2>The latest weekly news in tech.</h2>
                            <p>Keep up to date with new products, all the goss, and anything else you might have missed on Twitter.</p>
                            <div className="input-group">
                                <input type="email" id="email-input" placeholder="Enter your email" />
                                <button onClick={handleSubscribe}>Subscribe</button>
                            </div>
                            {emailError && <p className="error-message">{emailError}</p>}
                            <p>Join the 12,500+ designers and developers in the loop</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsletterPopup;
