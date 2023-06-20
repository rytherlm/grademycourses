import React, { useState } from 'react';
import './Navbar.css';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './firebase';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const handleGoogle = async (e) => {
    try {
      const provider = new GoogleAuthProvider();
      if (!isLoggedIn) {
        // User is not logged in, initiate sign-in
        await signInWithPopup(auth, provider);
        setIsLoggedIn(true);
      } else {
        // User is logged in, initiate sign-out
        await signOut(auth);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Google authentication error:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="/" className="logo-btn">
          <div className="logo-box">
            <span className="logo-text">GMC</span>
          </div>
        </a>
      </div>
      <div className="middle-section">
        <span className="logo-text">GradeMyCourses</span>
      </div>
      <div className="right-section">
        <button onClick={handleGoogle} className="login-btn">
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </div>
      <div className="nav-separator"></div>
    </nav>
  );
};

export default Navbar;
