import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Your Firebase configuration file
import { FcGoogle } from 'react-icons/fc';
import './SignIn.css'; // Your CSS file

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      // Handle errors for non-existent accounts
      if (error.code === 'auth/user-not-found') {
        setError('No account found with this email, please sign up.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else {
        setError('Failed to login. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
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
    <div className="signin-container">
      <h1>Welcome Back, Log In!</h1>
      <form onSubmit={handleSignIn}>
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
          Forgot password?
        </p>
        <button type="submit" className="signin-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>
        <div className="divider">or</div>
        <button
          type="button"
          className="google-signin-btn"
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <FcGoogle /> {loading ? 'Signing in with Google...' : 'Sign in with Google'}
        </button>
      </form>
      <p className="signup-link">
        Don’t have an account? <span onClick={() => navigate('/signup')}>Sign up</span>
      </p>
    </div>
  );
};

export default SignIn;
