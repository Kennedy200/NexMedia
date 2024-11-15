import React from 'react';
import './LearnMore4.css'; // Updated to reflect the new CSS file

const LearnMore4 = () => {
  const testimonials = [
    {
      id: 1,
      text: "This blog is my go-to source for insightful and well-researched articles. The topics are always fresh, and the writing style keeps me engaged from start to finish. I especially appreciate how easy it is to navigate and find the content I'm looking for. Highly recommend it to anyone looking for quality reading!",
      name: "— Emma R.",
    },
    {
      id: 2,
      text: "I've been following this blog for months now, and it never fails to impress me. The articles are packed with useful tips and personal experiences that I can relate to. I feel like the writers genuinely care about their readers, and that connection keeps me coming back. It's more than just a blog; it's a community!",
      name: "— Daniel M.",
    },
    {
      id: 3,
      text: "Working with Nex Media was a game-changer. They built us a fast, sleek website that has significantly boosted our online presence. Their attention to detail and dedication to our project made all the difference!",
      name: "— Sophia L.",
    },
  ];

  return (
    <div className="unique-testimonials-section">
      <h2 className="unique-testimonials-heading">What users say about us</h2>
      <div className="unique-testimonials-container">
        {testimonials.map((testimonial) => (
          <div className="unique-testimonial-card" key={testimonial.id}>
            <p className="unique-testimonial-text">{testimonial.text}</p>
            <p className="unique-testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="unique-trustpilot-section">
        <p>⭐ <span>Trustpilot</span> <strong>4.6</strong> out of 5</p>
      </div>
    </div>
  );
};

export default LearnMore4;
