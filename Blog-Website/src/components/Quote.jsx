import React from 'react';
import './Quote.css';

const Quote = () => {
  const handleQuoteClick = () => {
    window.location.href = 'https://twt-quote-generator.vercel.app/'; // Replace this with your actual URL
  };

  return (
    <section className="quote-section">
      <div className="quote-content">
        <h2>Get Your Quote Today!</h2>
        <p>
        Get personalized quotes instantly to kickstart your writing journey. Nex Media helps you craft impactful messages with ease, fueling your creativity.
        </p>
      </div>
      <button className="quote-button" onClick={handleQuoteClick}>
        Get A Quote
      </button>
    </section>
  );
};

export default Quote;
