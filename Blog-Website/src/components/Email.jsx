import React, { useState } from 'react';
import './Email.css';

const Email = () => {
    const [nameInput, setNameInput] = useState(''); // Renamed to nameInput to avoid clashes
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!nameInput.match(/^[A-Za-z ]+$/)) {
            alert('Please enter a valid name.');
            return;
        }
        
        if (!emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        const mailtoLink = `mailto:Kennedychigozie883@gmail.com?subject=Message from ${nameInput}&body=${messageInput}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className="email-section">
            <h2>Let's Get In Touch!</h2>
            <div className="email-content">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            value={nameInput} 
                            onChange={(e) => setNameInput(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={emailInput} 
                            onChange={(e) => setEmailInput(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="input-group">
                        <textarea 
                            placeholder="Message" 
                            value={messageInput} 
                            onChange={(e) => setMessageInput(e.target.value)} 
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="send-button">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Email;
