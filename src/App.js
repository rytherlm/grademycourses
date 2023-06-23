import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Simulate searching for class names
    const classFiles = require.context('./pages/classes', true, /\.js$/);
    const classes = classFiles.keys().map((key) => key.slice(2, -3)); // Extract class names

    const formattedQuery = query.replace(/[-\s]/g, '').toLowerCase();

    const matchingClasses = classes.filter((className) => {
      const formattedClassName = transformClassName(className);
      return formattedClassName.includes(formattedQuery);
    });

    setSearchResults(matchingClasses);
    setSelectedClass(null); // Reset selected class when performing a new search
  };

  const handleResultClick = (className) => {
    setSelectedClass(className); // Set the selected class
  };

  const transformClassName = (className) => {
    // Transform the class name to a compatible format (camel case, for example)
    return className.replace(/[-\s]/g, '').toLowerCase();
  };

  const formatClassName = (className) => {
    const parts = className.match(/([A-Za-z]+)(\d+)/);
    if (parts) {
      const name = parts[1].toUpperCase();
      const number = parts[2];
      return `${name} ${number}`;
    }
    return className;
  };

  const LazyClassComponent = lazy(() => {
    if (selectedClass) {
      const transformedClassName = transformClassName(selectedClass);
      return import(`./pages/classes/${transformedClassName}.js`);
    }
    return Promise.resolve({ default: null });
  });

  return (
    <div>
      <Navbar />
      <div className="content-container">
        {selectedClass ? (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyClassComponent />
          </Suspense>
        ) : (
          <div className="search-container">
            <SearchBar onSearch={handleSearch} />
            {searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((className) => (
                  <div
                    key={className}
                    className="search-result"
                    onClick={() => handleResultClick(className)}
                  >
                    <div className="search-result-text">{formatClassName(className)}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>        
    </div>
  );
}

export default App;