// src/pages/TimeRegistration.jsx

import React from 'react';
import TimeRecordForm from '../components/TimeRecordForm';

const TimeRegistration = () => {
  const handleTimeRegister = async (formData) => {
    try {
      const response = await fetch('/api/times/register', {
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
    <div className="container mx-auto mt-10">
      <TimeRecordForm onSubmit={handleTimeRegister} />
    </div>
  );
};

export default TimeRegistration;
