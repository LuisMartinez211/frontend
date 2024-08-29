// src/App.jsx

//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import OverallResults from './pages/OverallResults';
import CategoryResults from './pages/CategoryResults';
import TimeRegistration from './pages/TimeRegistration';
import Athletes from './pages/dashboard/Athletes';
import Statistics from './pages/dashboard/Statistics';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/results/overall" element={<OverallResults />} />
          <Route path="/results/category/:category" element={<CategoryResults />} />
          <Route path="/time-registration" element={<TimeRegistration />} />
          <Route path="/dashboard/athletes" element={<Athletes />} />
          <Route path="/dashboard/statistics" element={<Statistics />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
