import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AthleteForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'male',
    category: 'adult',
  });

  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Verificación de correo
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setEmailError('Por favor, ingresa un correo electrónico válido.');
      } else {
        setEmailError('');
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError) {
      onSubmit(formData);
      setFormData({
        name: '',
        email: '',
        age: '',
        gender: 'male',
        category: 'adult',
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="w-full h-64 bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-center text-white"
      >
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold">Formulario de Inscripción</h1>
          <p className="text-xl mt-2">Inscríbete ahora y participa en nuestro evento</p>
        </motion.div>
      </section>

      {/* Formulario de Inscripción */}
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <form 
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto bg-[#0096c7] text-white shadow-lg rounded-lg px-8 pt-6 pb-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Inscripción de Atleta</h2>
          
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline ${
                emailError ? 'border-red-500' : ''
              }`}
            />
            {emailError && <p className="text-red-300 text-xs italic mt-2">{emailError}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="age">
              Edad
            </label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="gender">
              Género
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="category">
              Categoría
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="adult">Adulto</option>
              <option value="senior">Senior</option>
              <option value="junior">Junior</option>
            </select>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#fff] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Inscribirse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AthleteForm;
