// src/pages/CategoryResults.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';

const CategoryResults = () => {
  const { category } = useParams();

  return (
    <div className="container mx-auto mt-10">
      <Leaderboard category={category} />
    </div>
  );
};

export default CategoryResults;
