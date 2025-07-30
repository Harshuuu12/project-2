// components/DishCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DishCard = ({ _id, name, price, image, images }) => {
  return (
    <Link to={`/dish/${_id}`} className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={images?.[0] || image}
        alt={name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-green-600 font-bold">₹{price}</p>
      </div>
    </Link>
  );
};

export default DishCard;
