import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'participant', // Valor por defecto
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    // Validación en el frontend
    if (formData.username.trim().length === 0) {
      setError('El nombre de usuario es obligatorio.');
      return;
    }

    if (formData.email.trim().length === 0 || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('El correo electrónico es obligatorio y debe ser válido.');
      return;
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el registro');
      }

      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      navigate('/login'); // Redirige a la página de inicio de sesión después de un registro exitoso
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Registrarse</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleRegister} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">Nombre de Usuario</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
            maxLength="50"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="role">Rol</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="participant">Participante</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
