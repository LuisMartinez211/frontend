// src/pages/Dashboard/Statistics.jsx

import React, { useEffect, useState } from 'react';

const Statistics = () => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch('/api/dashboard/statistics'); // Supongamos que tienes esta ruta en el backend
        const data = await response.json();
        setStatistics(data);
      } catch (error) {
        console.error('Error al obtener las estadísticas:', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Estadísticas del Torneo</h2>
      <p className="mb-4">Número total de atletas inscritos: {statistics.totalAthletes}</p>
      <p className="mb-4">Número total de categorías: {statistics.totalCategories}</p>
      <p className="mb-4">Promedio de tiempo registrado: {statistics.averageTime} segundos</p>
      {/* Añade más estadísticas según sea necesario */}
    </div>
  );
};

export default Statistics;
