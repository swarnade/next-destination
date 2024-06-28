import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition duration-300 hover:-translate-y-2">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
