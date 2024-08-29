import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imagen from '../assets/pexels-olly-3760259.jpg';

const faqData = [
  {
    question: "¿Cómo me inscribo en el torneo?",
    answer: "Puedes inscribirte en línea a través de nuestro formulario de inscripción disponible en esta plataforma."
  },
  {
    question: "¿Qué requisitos necesito para participar?",
    answer: "Necesitas ser mayor de 18 años y tener un certificado médico que acredite tu aptitud física para participar."
  },
  {
    question: "¿Dónde se llevará a cabo el torneo?",
    answer: "El torneo se realizará en las playas de SLS, un lugar conocido por su belleza natural y aguas cristalinas."
  },
  {
    question: "¿Qué debo llevar el día del evento?",
    answer: "Debes llevar tu equipo de natación, protector solar y una botella de agua para mantenerte hidratado."
  },
  {
    question: "¿Puedo traer acompañantes al evento?",
    answer: "Sí, puedes traer acompañantes, pero deberán seguir las normas de seguridad establecidas por los organizadores."
  }
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="mb-6 border-b border-gray-300 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.3 }}
    >
      <h3
        className="text-xl font-semibold mb-2 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </h3>
      {isOpen && (
        <motion.p
          className="text-lg text-gray-700 mt-2"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-[98vh] flex items-center justify-center text-center text-white"
      >
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2019/06/05/24216-340670744_large.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          style={{ filter: 'brightness(40%)' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Torneo de aguas abiertas SLS
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            Bienvenido a la plataforma oficial de SLS, donde podrás registrarte para el torneo de aguas abiertas 2024.
          </motion.p>
          <motion.a
            href="#"
            className="inline-block bg-white text-black font-bold py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
          >
            Empezar
          </motion.a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-lg fonttext mb-4 pr-20">
              Somos una organización dedicada a promover el deporte acuático en todas sus formas. Con años de experiencia, hemos organizado torneos y eventos que han reunido a los mejores atletas del mundo.
            </p>
            <p className="text-lg fonttext mb-4 pr-20">
              Únete a nosotros en esta nueva edición del Torneo de Aguas Abiertas y forma parte de una experiencia inolvidable.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
          <video
          className="rounded-lg shadow-lg"
          src="https://cdn.pixabay.com/video/2022/04/12/113675-698820547_large.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
        />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Preguntas Frecuentes
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
              <FAQItem key={index} {...faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Panel de Información Section */}
      <section id="info-panel" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Panel de información
          </motion.h2>
          <motion.p
            className="mb-6 text-base sm:text-lg md:text-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            Inscríbete como atleta y ve los ganadores generales aquí.
          </motion.p>

          {/* Centrado de botones */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
          >
            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Inscribirse como Atleta
            </Link>
            <Link
              to="/results/overall"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Ver Ganadores Generales
            </Link>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
          >
            <img
              src={imagen}
              alt="Torneo de Aguas Abiertas"
              className="mx-auto rounded-lg shadow-md max-w-full h-auto"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
