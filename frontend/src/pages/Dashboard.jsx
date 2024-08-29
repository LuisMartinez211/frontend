// src/pages/Dashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Panel de Control del Torneo</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Link
          to="/register"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Inscribir Nuevo Atleta
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
          to="/dashboard/athletes"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Ver Todos los Atletas
        </Link>
        <Link
          to="/dashboard/statistics"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Ver Estadísticas
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
