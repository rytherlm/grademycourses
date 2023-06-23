import React, { useContext } from 'react';
import './Navbar.css';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from './firebase'; // Import the auth variable

const Navbar = () => {
  const { isLoggedIn, handleLogin, handleLogout } = useContext(AuthContext);

  const handleGoogle = async (e) => {
    try {
      const provider = new GoogleAuthProvider();
      if (!isLoggedIn) {
        await signInWithPopup(auth, provider);
        handleLogin();
      } else {
        await signOut(auth);
        handleLogout();
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
            <span className="logo-text">Home</span>
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
