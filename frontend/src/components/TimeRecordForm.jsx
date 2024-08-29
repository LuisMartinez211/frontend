// src/components/TimeRecordForm.jsx

import React, { useState, useEffect } from 'react';

const TimeRecordForm = ({ onSubmit }) => {
  const [athletes, setAthletes] = useState([]);
  const [formData, setFormData] = useState({
    athleteId: '',
    time: '',
  });

  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/athletes`);
        const data = await response.json();
        setAthletes(data);
      } catch (error) {
        console.error('Error fetching athletes:', error);
      }
    };

    fetchAthletes();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      athleteId: '',
      time: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Registro de Tiempos</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="athleteId">
          Atleta
        </label>
        <select
          id="athleteId"
          name="athleteId"
          value={formData.athleteId}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Seleccione un atleta</option>
          {athletes.map((athlete) => (
            <option key={athlete._id} value={athlete._id}>
              {athlete.name} - {athlete.category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
          Tiempo (en segundos)
        </label>
        <input
          id="time"
          name="time"
          type="number"
          value={formData.time}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Registrar Tiempo
        </button>
      </div>
    </form>
  );
};

export default TimeRecordForm;
