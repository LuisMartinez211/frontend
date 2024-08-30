import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaStopwatch, FaTrophy, FaUsers, FaChartBar } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-10">
      {/* Hero Section */}
      <section 
        className="w-full h-64 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-center text-white mb-8"
      >
        <h1 className="text-4xl font-bold">Panel de Control del Torneo</h1>
      </section>

      {/* Dashboard Links */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/register"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300"
        >
          <FaUserPlus className="mr-2" />
          Inscribir Nuevo Atleta
        </Link>
        <Link
          to="/time-registration"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300"
        >
          <FaStopwatch className="mr-2" />
          Registrar Tiempos
        </Link>
        <Link
          to="/results/overall"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300"
        >
          <FaTrophy className="mr-2" />
          Ver Ganadores Generales
        </Link>
        <Link
          to="/dashboard/athletes"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300"
        >
          <FaUsers className="mr-2" />
          Ver Todos los Atletas
        </Link>
        <Link
          to="/dashboard/statistics"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300"
        >
          <FaChartBar className="mr-2" />
          Ver Estadísticas
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
