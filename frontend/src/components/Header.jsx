// src/components/Header.jsx

//import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Torneo de Atletismo</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Inicio</a>
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="/register" className="hover:underline">Registrarse</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
