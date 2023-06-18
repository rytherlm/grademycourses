import React from 'react';
import './Navbar.css';

const Navbar = () => {
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
        <button className="login-btn">Log In</button>
      </div>
      <div className="nav-separator"></div>
    </nav>
  );
};

export default Navbar;
