import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<ContactUsPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
