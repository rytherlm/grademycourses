import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Other from './Other';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    } else if (currentPage === 'other') {
      return <Other />;
    } else {
      return null;
    }
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar />
      <button onClick={() => navigateToPage('home')}>Go to Home</button>
      <button onClick={() => navigateToPage('other')}>Go to Other Page</button>
      {renderPage()}
    </div>
  );
}

export default App;
