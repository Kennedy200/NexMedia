import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const testimonials = [
    {
        id: 1,
        image: 'https://i.pinimg.com/564x/7d/0c/79/7d0c79ed51ac4dcc645a616e9762dcc4.jpg', 
        name: 'James Carter',
        company: 'Content Writer',
        text: 'Nex Media gave me the perfect platform to practice my skills and improve my writing confidence.',
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/564x/b2/ab/b0/b2abb02b44f4aca6fb4ac9b66877c115.jpg',
        name: 'Liam Reed',
        company: 'Technical Writer',
        text: 'The simplicity and user-friendly interface helped me create more structured and impactful articles.',
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/9a/34/80/9a34803572876920a0d6254bbc0d0346.jpg',
        name: 'Sophia Martinez',
        company: 'Blogger',
        text: 'I built consistency in my writing habits using Nex Media, and the results have been incredible.',
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/564x/44/51/23/44512325454b68fcdfad62d6dfea7002.jpg',
        name: 'Ethan Collins',
        company: 'Web Developer',
        text: 'As a developer learning to write, Nex Media gave me a seamless experience to refine my writing.',
    },
    {
        id: 5,
        image: 'https://i.pinimg.com/564x/7d/c6/86/7dc686060b8f8097d4428855deeaa988.jpg',
        name: 'Emily Turner',
        company: 'Freelance Copywriter',
        text: 'Thanks to Nex Media, I’ve been able to explore creative ideas and sharpen my copywriting skills.',
    },
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    return (
        <section className="testimonial-section">
            <h2 className="testimonial-header">Testimonial</h2>
            <div className="testimonial-content">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="testimonial-image" />
                <h3>{testimonials[currentIndex].name}</h3>
                <p>{testimonials[currentIndex].company}</p>
                <blockquote className="testimonial-text">
                    {testimonials[currentIndex].text}
                </blockquote>
            </div>
            <div className="testimonial-indicators">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
