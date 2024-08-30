import React from 'react';
import TimeRecordForm from '../components/TimeRecordForm';
import { motion } from 'framer-motion';

const TimeRegistration = () => {
  const handleTimeRegister = async (formData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/times/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en el registro de tiempo');
      }

      const data = await response.json();
      alert(`Tiempo de ${data.time} segundos registrado para el atleta.`);
    } catch (error) {
      console.error('Error al registrar el tiempo:', error);
      alert('Error al registrar el tiempo. Inténtelo de nuevo.');
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section 
        className="w-full h-64 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-center text-white mb-8"
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">Registro de Tiempos</h1>
          <p className="text-xl mt-2">Ingresa los tiempos para los atletas participantes</p>
        </motion.div>
      </section>

      {/* Formulario de Registro de Tiempos */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <TimeRecordForm onSubmit={handleTimeRegister} />
      </div>
    </div>
  );
};

export default TimeRegistration;
