import React from 'react';

const SubmitButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300 hover:scale-105"
    >
      {text}
    </button>
  );
};

export default SubmitButton;