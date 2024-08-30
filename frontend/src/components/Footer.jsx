// src/components/Footer.jsx

//import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link to="/" className="text-white hover:text-gray-400 mx-2">
            Inicio
          </Link>
          <Link to="/dashboard" className="text-white hover:text-gray-400 mx-2">
            Panel de Control
          </Link>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Torneo de Aguas Abiertas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
