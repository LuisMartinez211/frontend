// src/components/Leaderboard.jsx

import React, { useState, useEffect } from 'react';

const Leaderboard = ({ category }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const url = category ? `/api/times/category/${category}` : '/api/times/winners';
        const response = await fetch(url);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, [category]);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">{category ? `Ganadores de la categoría ${category}` : 'Ganadores generales'}</h2>
      <ul className="list-disc pl-5">
        {results.map((record, index) => (
          <li key={index} className="mb-2">
            {record.athlete.name} - {record.time} segundos ({record.athlete.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
