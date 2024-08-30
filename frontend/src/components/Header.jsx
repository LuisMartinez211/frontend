import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logosls.png';

const Header = ({ auth, setAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setAuth({ token: null, role: null });
    navigate('/');
  };

  return (
    <header className="custom-bg-color text-white shadow-lg static w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo} alt="Aguagym Logo" className="sizelogo" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="relative hover:text-secondary menu-link menuboton">Inicio</Link>
          {!auth.token ? (
            <>
              <Link to="/login" className="relative hover:text-secondary menu-link menuboton">Iniciar Sesión</Link>
              <Link to="/register" className="relative hover:text-secondary menu-link menuboton">Registrarse</Link>
            </>
          ) : (
            <>
              {auth.role === 'admin' && (
                <>
                  <Link to="/dashboard" className="relative hover:text-secondary menu-link menuboton">Dashboard</Link>
                </>
              )}
              <button onClick={handleLogout} className="relative hover:text-secondary menu-link menuboton">Cerrar Sesión</button>
            </>
          )}
        </nav>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-black border-black hover:text-secondary hover:border-secondary"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-primary text-white`}>
        <Link to="/" className="block py-2 px-4 menuboton hover:bg-secondary hover:text-white" onClick={toggleMenu}>Inicio</Link>
        {!auth.token ? (
          <>
            <Link to="/login" className="block py-2 px-4 menuboton hover:bg-secondary hover:text-white" onClick={toggleMenu}>Iniciar Sesión</Link>
            <Link to="/register" className="block py-2 px-4 menuboton hover:bg-secondary hover:text-white" onClick={toggleMenu}>Registrarse</Link>
          </>
        ) : (
          <>
            {auth.role === 'admin' && (
              <Link to="/dashboard" className="block py-2 px-4 menuboton hover:bg-secondary hover:text-white" onClick={toggleMenu}>Dashboard</Link>
            )}
            <button onClick={handleLogout} className="block py-2 px-4 menuboton hover:bg-secondary hover:text-white">Cerrar Sesión</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
