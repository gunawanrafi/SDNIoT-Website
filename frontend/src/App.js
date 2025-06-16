import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landingpage from './pages/Landingpage';
import Dashboard from './pages/Dashboard';
import Teamprofile from './pages/Teamprofile';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Teamprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
