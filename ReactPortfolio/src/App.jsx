// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import ContentContainer from './components/ContentContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Create a new CSS file for your main application styles

function App() {
  const [currentPage, setCurrentPage] = useState('about'); // Default to 'About Me'

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app dark-theme"> {/* Add a class for your dark theme */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="main-content">
        <ContentContainer currentPage={currentPage} />
      </main>
    </div>
  );
}

export default App;