import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Athletes = () => {
  const [athletes, setAthletes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [athletesPerPage] = useState(20);

  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/athletes`);
        const data = await response.json();
        setAthletes(data);
      } catch (error) {
        console.error('Error al obtener los atletas:', error);
      }
    };

    fetchAthletes();
  }, []);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Obtener los atletas actuales
  const indexOfLastAthlete = currentPage * athletesPerPage;
  const indexOfFirstAthlete = indexOfLastAthlete - athletesPerPage;
  const currentAthletes = athletes.slice(indexOfFirstAthlete, indexOfLastAthlete);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(athletes.length / athletesPerPage);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="w-full h-64 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-center text-white"
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">Lista de Atletas Inscritos</h1>
          <p className="text-xl mt-2">Revisa la lista de todos los atletas que se han registrado para el evento</p>
        </motion.div>
      </section>

      {/* Tabla de Atletas */}
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-6 text-left">Nombre</th>
                <th className="py-3 px-6 text-left">Correo</th>
                <th className="py-3 px-6 text-left">Categoría</th>
              </tr>
            </thead>
            <tbody>
              {currentAthletes.map((athlete) => (
                <tr key={athlete._id} className="border-b">
                  <td className="py-3 px-6">{athlete.name}</td>
                  <td className="py-3 px-6">{athlete.email}</td>
                  <td className="py-3 px-6">{athlete.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex justify-center mt-6">
          <ul className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`py-2 px-4 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Athletes;
