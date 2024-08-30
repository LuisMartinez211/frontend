import React, { useState } from 'react';
import logo from '../assets/logosls.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="custom-bg-color text-white shadow-lg static w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img src={logo} alt="Aguagym Logo" className="sizelogo" />
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="relative hover:text-secondary menu-link menuboton">
            Inicio
          </a>
          <a href="/dashboard" className="relative hover:text-secondary menu-link menuboton">
            Dashboard
          </a>
          <a href="/register" className="relative hover:text-secondary menu-link menuboton">
            Registrarse
          </a>
        </nav>
        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-primary text-white`}
      >
        <a
          href="/"
          className="block py-2 px-4 menuboton hover:bg-secondary hover:text-white"
          onClick={toggleMenu}
        >
          Inicio
        </a>
        <a
          href="/dashboard"
          className="block py-2 px-4 menuboton hover:bg-secondary hover:text-black"
          onClick={toggleMenu}
        >
          Dashboard
        </a>
        <a
          href="/register"
          className="block py-2 px-4 menuboton hover:bg-secondary hover:text-white"
          onClick={toggleMenu}
        >
          Registrarse
        </a>
      </div>
    </header>
  );
};

export default Header;
