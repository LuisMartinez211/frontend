
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imagen from '../assets/pexels-olly-3760259.jpg'

const Home = () => {
  return (
    <section
      id="hero"
      className="relative h-[98vh] flex items-center justify-center text-center text-white"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2021/06/17/78059-564490562_large.mp4" 
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{ filter: 'brightness(40%)' }} 
      />


      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 contenedorhero">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Sumérgete en un mundo de fitness acuático
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          Experimente lo mejor del entrenamiento acuático en Aguagym - Su viaje hacia el bienestar comienza aquí.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block bg-white text-primary font-bold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full shadow-lg hover:bg-secondary hover:text-white transition-all duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
        >
          Empezar
        </motion.a>
      </div>

      <div className="container mx-auto mt-10 text-center">
      <h1 className="text-4xl font-bold mb-8">Bienvenido al Torneo de Atletismo</h1>
      <p className="mb-6 text-lg">
        Esta es la plataforma oficial para gestionar el torneo. Aquí puedes inscribirte, registrar tiempos, y ver los resultados de la competencia.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Link
          to="/register"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Inscribirse como Atleta
        </Link>
        <Link
          to="/time-registration"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Registrar Tiempos
        </Link>
        <Link
          to="/results/overall"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Ver Ganadores Generales
        </Link>
        <Link
          to="/dashboard"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Panel de Control (Administradores)
        </Link>
      </div>

      <div className="mt-10">
        <img
          src={imagen}
          alt="Torneo de Aguas Abiertas"
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
    </div>
    </section>
  );
};

export default Home;
