// Admin/DishList.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { Link } from 'react-router-dom';

const DishList = () => {
  const { products, removeProduct } = useContext(ShopContext);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-700">📋 Manage Dishes</h2>
        <Link
          to="/admin/add-dish"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm shadow"
        >
          ➕ Add New Dish
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">No dishes available.</p>
      ) : (
        <div className="space-y-4">
          {products.map((dish) => (
            <div
              key={dish._id}
              className="flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={dish.images?.[0] || dish.image}
                  alt={dish.name}
                  className="w-16 h-16 rounded-lg object-cover border"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
                  <p className="text-sm text-gray-500">₹{dish.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeProduct(dish._id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-md shadow"
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DishList;
