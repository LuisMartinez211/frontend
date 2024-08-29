// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import imagen from '../assets/pexels-olly-3760259.jpg'

const Home = () => {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-4xl font-bold mb-8">Bienvenido al Torneo de Atletismo</h1>
      <p className="mb-6 text-lg">
        Esta es la plataforma oficial para gestionar el torneo. Aquí puedes inscribirte, registrar tiempos, y ver los resultados de la competencia.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Link
          to="/register"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Inscribirse como Atleta
        </Link>
        <Link
          to="/time-registration"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Registrar Tiempos
        </Link>
        <Link
          to="/results/overall"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Ver Ganadores Generales
        </Link>
        <Link
          to="/dashboard"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Panel de Control (Administradores)
        </Link>
      </div>

      <div className="mt-10">
        <img
          src={imagen}
          alt="Torneo de Aguas Abiertas"
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Home;
