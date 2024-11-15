import React, { useState } from 'react';
import './Pricing.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const pricingData = [
    {
      plan: 'Portfolio Websites',
      priceRange: '$167 - $200 = ₦300,000 - ₦350,000',
      features: [
        'Up to 5 pages',
        'Custom Domain & Hosting',
        'Basic SEO Optimization',
        'Responsive Design',
        'Gallery/Portfolio Section',
      ],
      example: 'Example: Personal blog or artist portfolio.'
    },
    {
      plan: 'Business Websites',
      priceRange: '$250 - $330 = ₦450,000 - ₦580,000',
      features: [
        'Up to 10 pages',
        'Custom Domain & Hosting',
        'Advanced SEO Optimization',
        'Responsive & Mobile Friendly',
        'Blog Section & Contact Forms',
        'Basic Analytics',
      ],
      example: 'Example: Local service provider or consulting website.'
    },
    {
      plan: 'UI/UX Design Services',
      priceRange: '$167 - $300 = ₦300,000 - ₦580,000',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Responsive Design',
        'Interactive Mockups',
        'Design for Mobile & Web Apps',
      ],
      example: 'Example: UI/UX design for startups or small web apps.'
    },
    {
      plan: 'E-Commerce Websites',
      priceRange: '$450 - $580 = ₦780,000 - ₦870,000',
      features: [
        'Up to 20 pages',
        'Integrated Payment Gateway',
        'Product Management',
        'SEO & Marketing Tools',
        'Customer Management System',
        'Mobile Friendly & Secure Checkout',
      ],
      example: 'Example: Online store for small startups or local businesses.'
    }
  ];

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="pricing-container">
      <h1>Pricing & Plans</h1>
      <p className="rate-info">
        Dollar rate: ₦1,500 per $USD
      </p>
      <p className="info-text">
        Prior to embarking on the construction of a website for your business, gaining a comprehensive understanding of the associated costs is crucial. This proactive approach ensures that you allocate your budget effectively for the project. Pricing is negotiable and we would still love to know your bugdet.
      </p>

      <div className="plans-container">
        {pricingData.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h2>{plan.plan}</h2>
            <p className="price-range">{plan.priceRange}</p>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="available">
                  {feature}
                </li>
              ))}
            </ul>
            <p className="example">{plan.example}</p>
            <button onClick={() => handlePlanClick(plan.plan)}>
              Get {plan.plan}
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="confirmation-message">
          <h3>{selectedPlan} Plan Selected</h3>
          <p>
            This plan is highly beneficial for your business as it aligns perfectly with your goals. Reach out to us to discuss further.
          </p>
          <p>Contact us via:</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/life.withkennedyy" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="mailto:kennedychigozie883@gmail.com">
              <FaEnvelope /> Gmail
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
