// src/pages/Register.jsx

//import React from 'react';
import AthleteForm from '../components/AthleteForm';

const Register = () => {
  const handleRegister = async (formData) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    try {
      const response = await fetch(`${backendUrl}/api/athletes/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en la inscripción');
      }

      const data = await response.json();
      alert(`Atleta ${data.name} inscrito exitosamente.`);
    } catch (error) {
      console.error('Error al registrar al atleta:', error);
      alert('Error al inscribir al atleta. Inténtelo de nuevo.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <AthleteForm onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
