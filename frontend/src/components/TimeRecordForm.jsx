import React, { useState, useEffect } from 'react';

const TimeRecordForm = ({ onSubmit }) => {
  const [athletes, setAthletes] = useState([]);
  const [formData, setFormData] = useState({
    athleteId: '',
    time: '',
  });
  const [athletesWithTimes, setAthletesWithTimes] = useState([]); // Nuevo estado

  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/athletes`);
        const data = await response.json();
        setAthletes(data);

        // Suponiendo que hay una API que te devuelve los atletas con tiempos registrados
        const timesResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/times`);
        const timesData = await timesResponse.json();
        const athletesWithTimesIds = timesData.map(record => record.athleteId);
        setAthletesWithTimes(athletesWithTimesIds);
      } catch (error) {
        console.error('Error fetching athletes or times:', error);
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

    // Verificar si el atleta ya tiene un tiempo registrado
    if (athletesWithTimes.includes(formData.athleteId)) {
      alert('Este atleta ya tiene un tiempo registrado.');
      return; // Evitar el envío del formulario
    }

    onSubmit(formData);
    setFormData({
      athleteId: '',
      time: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Registro de Tiempos</h2>
      
      <div className="mb-6">
        <label className="block text-blue-700 text-sm font-semibold mb-2" htmlFor="athleteId">
          Atleta
        </label>
        <select
          id="athleteId"
          name="athleteId"
          value={formData.athleteId}
          onChange={handleChange}
          required
          className="shadow appearance-none border border-blue-300 rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">Seleccione un atleta</option>
          {athletes.map((athlete) => (
            <option 
              key={athlete._id} 
              value={athlete._id}
            >
              {athlete.name} - {athlete.category} {athletesWithTimes.includes(athlete._id) && "(Tiempo registrado)"}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-6">
        <label className="block text-blue-700 text-sm font-semibold mb-2" htmlFor="time">
          Tiempo (en segundos)
        </label>
        <input
          id="time"
          name="time"
          type="number"
          value={formData.time}
          onChange={handleChange}
          required
          className="shadow appearance-none border border-blue-300 rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Registrar Tiempo
        </button>
      </div>
    </form>
  );
};

export default TimeRecordForm;
