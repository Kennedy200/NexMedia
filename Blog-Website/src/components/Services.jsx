import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);

  const toggleText1 = () => setIsExpanded1(!isExpanded1);
  const toggleText2 = () => setIsExpanded2(!isExpanded2);
  const toggleText3 = () => setIsExpanded3(!isExpanded3);
  const toggleText4 = () => setIsExpanded4(!isExpanded4);

  return (
    <section className="services">
      <h2>At Your Service</h2>
      <div className="underline"></div>
      <div className="service-cards">
        <div className="service-card">
          <div className="icon">
            <img src="https://i.pinimg.com/564x/17/45/23/1745235227ba955bef3df3b403fecfbf.jpg" alt="Heart Icon" />
          </div>
          <h3>Written with Love</h3>
          <p>
          At Nex Media, we pour passion into every post.
          Our goal is to inspire writers and engage readers.
            {isExpanded1 && (
              <> Each blog is a reflection of creativity and care.
              We make sure your content resonates with heart.</>
            )}
          </p>
          <button className="read-more" onClick={toggleText1}>
            {isExpanded1 ? 'READ LESS' : 'READ MORE'}
          </button>
        </div>
        <div className="service-card">
          <div className="icon">
            <img src="https://i.pinimg.com/564x/6c/ce/d4/6cced427b472a58e259d537fe9dd816b.jpg" alt="Fast Icon" />
          </div>
          <h3>Fast Turnaround</h3>
          <p>
          Create and publish content quickly with ease.
          Nex Media ensures a smooth,
            {isExpanded2 && (
              <> fast process.
Spend more time writing, less time waiting.
Your ideas will be live in no time.</>
            )}
          </p>
          <button className="read-more" onClick={toggleText2}>
            {isExpanded2 ? 'READ LESS' : 'READ MORE'}
          </button>
        </div>
        <div className="service-card">
          <div className="icon">
            <img src="https://i.pinimg.com/736x/02/64/26/0264266368fa3c7a066a175e71c3a4bc.jpg" alt="Up to Date Icon" />
          </div>
          <h3>Up to Date</h3>
          <p>
          Stay ahead with the latest in content creation.
          We keep you updated on trends and tips.
            {isExpanded3 && (
              <> Ensure your blog is always current and fresh.
              Stay relevant with Nex Media by your side.</>
            )}
          </p>
          <button className="read-more" onClick={toggleText3}>
            {isExpanded3 ? 'READ LESS' : 'READ MORE'}
          </button>
        </div>
        <div className="service-card">
          <div className="icon">
            <img src="https://i.pinimg.com/564x/f5/ec/43/f5ec432be66c88fa6a27d7da0bf6236d.jpg" alt="Premium Content Icon" />
          </div>
          <h3>Premium Content</h3>
          <p>
          Nex Media delivers top-tier website development with a focus on speed, functionality, and user experience. 
            {isExpanded4 && (
              <>Our solutions are tailored to meet your business needs while ensuring a sleek and professional design. We guarantee high-performance websites that captivate and convert.</>
            )}
          </p>
          <button className="read-more" onClick={toggleText4}>
            {isExpanded4 ? 'READ LESS' : 'READ MORE'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
