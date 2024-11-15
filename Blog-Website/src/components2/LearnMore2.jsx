import React from 'react';
import './LearnMore2.css'; // Make sure to create this CSS file for styling

const LearnMore2 = () => {
  return (
    <section className="learn-more-2">
      <h2 className="learn-more-2-title">What makes Nex Media stand out</h2>
      <div className="features-container">
        <div className="feature-box">
          <img src="/assets/independent-provider.jpg" alt="Independent Provider" className="feature-icon" />
          <h3>User-Friendly Websites</h3>
          <p>At Nex Media, we prioritize speed, functionality, and client collaboration. Every website is built with cutting-edge technology, ensuring reliability and scalability. We go beyond aesthetics, creating websites that perform efficiently and deliver results. Our commitment to your success sets us apart.</p>
        </div>
        <div className="feature-box">
          <img src="/assets/fastest-vpn.jpg" alt="Fastest VPN" className="feature-icon" />
          <h3>Beginner-Friendly Tools</h3>
          <p>No prior experience needed—Nex Media equips you with all the tools to practice writing and grow your skills from day one.</p>
        </div>
        <div className="feature-box">
          <img src="/assets/ipv6-support.jpg" alt="IPv6 Support" className="feature-icon" />
          <h3>Premium Memberships</h3>
          <p>Unlock advanced features such as ad-free browsing, priority support, and monetization options to grow your audience and income. Elevate your content creation with exclusive tools tailored to enhance your skills.</p>
        </div>
        <div className="feature-box">
          <img src="/assets/streaming-support.jpg" alt="Streaming Support" className="feature-icon" />
          <h3>Get the Best Experience With Us</h3>
          <p>Maximize your potential with Nex Media's premium tools, personalized support, and a community-driven environment. Achieve your goals faster with a platform designed for both beginners and experienced creators.</p>
        </div>
      </div>
    </section>
  );
};

export default LearnMore2;
