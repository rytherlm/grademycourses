import React, { useContext } from 'react';
import '../styles/csci99.css';
import { AuthContext } from '../../AuthContext'; // Update the import path

const Csci99 = () => {
  const { isLoggedIn } = useContext(AuthContext); // Access the isLoggedIn state

  return (
    <div>
      <h1>My Page</h1>
      <p>{isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      {/* Render different content based on the login status */}
    </div>
  );
};

export default Csci99;
