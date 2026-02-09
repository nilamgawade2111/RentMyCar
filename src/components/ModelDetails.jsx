import React from 'react';

const ModelDetails = ({ modelDetails }) => {
  return (
    <div className="text-gray-600">
      <h4 className="font-bold">{modelDetails.name}</h4>
      <p>Transmission: {modelDetails.transmission}</p>
      <p>Fuel: {modelDetails.fuel}</p>
    </div>
  );
};

export default ModelDetails;