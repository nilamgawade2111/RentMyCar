import React from 'react';

const AverageInfo = ({ averageInfo }) => {
  return (
    <div className="text-gray-600">
      <p>Mileage: {averageInfo.mileage}</p>
      <p>Rating: {averageInfo.rating}</p>
    </div>
  );
};

export default AverageInfo;