import React, { useEffect, useState } from 'react';
import { FaUsers, FaListAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Esto es necesario para evitar problemas con el registro de gráficos

const Statistics = () => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/dashboard/statistics`);
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error('Error al obtener las estadísticas:', error);
      }
    };

    fetchStatistics();
  }, []);

  const data = {
    labels: ['Adulto', 'Senior', 'Junior'],
    datasets: [
      {
        data: [
          statistics.totalAdultAthletes || 0, 
          statistics.totalSeniorAthletes || 0, 
          statistics.totalJuniorAthletes || 0
        ],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
        hoverBackgroundColor: ['#2563eb', '#059669', '#d97706']
      }
    ]
  };

  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section 
        className="w-full h-64 bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-center text-white mb-8"
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">Estadísticas del Torneo</h1>
          <p className="text-xl mt-2">Datos clave sobre el rendimiento y la participación</p>
        </motion.div>
      </section>

      {/* Estadísticas en Tarjetas */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between transform transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaUsers className="text-4xl text-blue-500" />
          <div className="text-right">
            <p className="text-xl font-bold">{statistics.totalAthletes}</p>
            <p className="text-gray-500">Atletas Inscritos</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between transform transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaListAlt className="text-4xl text-green-500" />
          <div className="text-right">
            <p className="text-xl font-bold">{statistics.totalCategories}</p>
            <p className="text-gray-500">Categorías</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between transform transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaClock className="text-4xl text-red-500" />
          <div className="text-right">
            <p className="text-xl font-bold">{statistics.averageTime} segundos</p>
            <p className="text-gray-500">Tiempo Promedio</p>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Statistics;
