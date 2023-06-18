import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <Routes>
    <Router>
      <div>
        <Navbar />
        <Link to="/home">
          <button>Go to Home</button>
        </Link>

        <Route path="/home" component={Home} />
      </div>
    </Router>
    </Routes>
  );
}

export default App;
