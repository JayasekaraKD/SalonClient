// src/App.js
import React from 'react';
import HomePage from './pages/HomePage';
import './styles/tailwind.css'; // Make sure to create this file and import Tailwind CSS

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <HomePage />
    </div>
  );
}

export default App;