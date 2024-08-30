import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaTrophy } from 'react-icons/fa';

const Leaderboard = ({ category }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const url = category
          ? `${import.meta.env.VITE_BACKEND_URL}/api/times/category/${category}`
          : `${import.meta.env.VITE_BACKEND_URL}/api/times/winners`;
        const response = await fetch(url);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, [category]);

  const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Oro, Plata, Bronce

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-center text-white">
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">Ganadores del Torneo</h1>
          <p className="text-xl mt-2">Conoce a los mejores atletas del evento</p>
        </motion.div>
      </section>

      {/* Leaderboard */}
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          {category ? `Podio de Ganadores` : 'Clasificación Final'}
        </h2>

        {results.length > 0 ? (
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            {results.slice(0, 3).map((record, index) => (
              record.athlete ? (
                <motion.div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 transform transition-transform hover:scale-105 shadow-lg shadow-blue-500/50"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <FaTrophy size={40} color={medalColors[index]} />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-2">
                    {record.athlete.name}
                  </h3>
                  <p className="text-lg text-center text-gray-700">
                    {record.time} segundos
                  </p>
                  <p className="text-center text-gray-500">
                    Categoría: {record.athlete.category}
                  </p>
                  <div className="flex justify-center mt-4">
                    {index === 0 && <FaMedal size={30} color={medalColors[index]} />}
                    {index === 1 && <FaMedal size={30} color={medalColors[index]} />}
                    {index === 2 && <FaMedal size={30} color={medalColors[index]} />}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={index}
                  className="bg-red-100 shadow-lg rounded-lg p-6 w-full md:w-1/3 transform transition-transform hover:scale-105 shadow-lg shadow-red-500/50"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-center mb-2 text-red-700">
                    Atleta no encontrado
                  </h3>
                  <p className="text-lg text-center text-red-500">
                    Este registro está relacionado con un atleta que ha sido eliminado.
                  </p>
                </motion.div>
              )
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-700">
            Aún no se han definido ganadores.
          </p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
