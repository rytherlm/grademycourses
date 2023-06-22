import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Simulate searching for class names
    const classFiles = require.context('./pages', true, /\.js$/);
    const classes = classFiles.keys().map((key) => key.slice(2, -3)); // Extract class names

    const matchingClasses = classes.filter((className) =>
      className.includes(query)
    );

    setSearchResults(matchingClasses);
  };

  return (
    <div>
      <Navbar />
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      {searchResults.length > 0 && (
        <div className="search-results">
          <p>Search Results for: {searchQuery}</p>
          <ul>
            {searchResults.map((className) => (
              <li key={className}>{className}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
