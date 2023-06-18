import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

const Navbar = () => {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">GMC</Link>
      </div>
      <div className="navbar-middle">
        <span>GradeMyCourses</span>
      </div>
      <div className="navbar-right">
        {firebase.auth().currentUser ? (
          <button onClick={handleLogout}>Log out</button>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
