import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (searchQuery.trim() !== '') {
        onSearch(searchQuery);
      }
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a class..."
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
