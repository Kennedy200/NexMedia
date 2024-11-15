import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { FcGoogle } from 'react-icons/fc'; // Google Icon
import './SignUp.css'; // Import your styles

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/dashboard'); // Redirect if already logged in
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Basic validation
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to sign in with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h1>Create an account</h1>
      <form onSubmit={handleSignUp}>
        {error && <p className="error-text">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="forgot-password" onClick={() => navigate('/resetPassword')}>
          Forgot Password?
        </p>
        <button type="submit" className="signup-btn" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <div className="divider">or</div>
        <button
          type="button"
          className="google-signup-btn"
          onClick={handleGoogleSignUp}
          disabled={loading}
        >
          <FcGoogle /> {loading ? 'Signing up with Google...' : 'Sign Up with Google'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
