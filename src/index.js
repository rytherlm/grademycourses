import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the App with AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
