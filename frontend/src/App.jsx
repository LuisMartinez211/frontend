import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserRegister from './pages/UserRegister'; // Importa la nueva página de registro de usuarios
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OverallResults from './pages/OverallResults';
import CategoryResults from './pages/CategoryResults';
import TimeRegistration from './pages/TimeRegistration';
import Athletes from './pages/dashboard/Athletes';
import Statistics from './pages/dashboard/Statistics';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [auth, setAuth] = useState({ token: null, role: null });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      setAuth({ token, role });
    }
  }, []);

  return (
    <Router>
      <Header auth={auth} setAuth={setAuth} />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserRegister setAuth={setAuth} />} /> {/* Ruta para registro de usuarios */}
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/dashboard" element={auth.role === 'admin' ? <Dashboard /> : <Login setAuth={setAuth} />} />
          <Route path="/results/overall" element={<OverallResults />} />
          <Route path="/results/category/:category" element={<CategoryResults />} />
          <Route path="/time-registration" element={auth.role === 'admin' ? <TimeRegistration /> : <Login setAuth={setAuth} />} />
          <Route path="/dashboard/athletes" element={auth.role === 'admin' ? <Athletes /> : <Login setAuth={setAuth} />} />
          <Route path="/dashboard/statistics" element={auth.role === 'admin' ? <Statistics /> : <Login setAuth={setAuth} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
