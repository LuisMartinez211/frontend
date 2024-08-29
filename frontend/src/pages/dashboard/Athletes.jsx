// src/pages/Dashboard/Athletes.jsx

import React, { useEffect, useState } from 'react';

const Athletes = () => {
  const [athletes, setAthletes] = useState([]);

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

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Lista de Atletas Inscritos</h2>
      <ul className="list-disc pl-5">
        {athletes.map((athlete) => (
          <li key={athlete._id} className="mb-2">
            {athlete.name} - {athlete.email} - {athlete.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Athletes;
