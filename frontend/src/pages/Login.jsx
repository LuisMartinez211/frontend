import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }

      const result = await response.json();

      // Si los datos están anidados en un campo 'data'
      const { token, role } = result.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      setAuth({ token, role });
      navigate('/');
    } catch (error) {
      setError('Correo o contraseña incorrectos. Inténtelo de nuevo.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Iniciar Sesión</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
