import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { Link } from 'react-router-dom';

const DishList = () => {
  const { products, removeProduct } = useContext(ShopContext);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-700">📋 Manage Dishes</h2>
        <Link to="/admin/add-dish" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">➕ Add Dish</Link>
      </div>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No dishes found.</p>
      ) : (
        <div className="space-y-4">
          {products.map((dish) => (
            <div key={dish._id} className="flex justify-between items-center bg-white p-4 rounded shadow border">
              <div className="flex gap-4 items-center">
                <img src={dish.images?.[0]} alt={dish.name} className="w-16 h-16 rounded object-cover" />
                <div>
                  <h3 className="font-bold">{dish.name}</h3>
                  <p className="text-sm text-gray-600">₹{dish.price}</p>
                </div>
              </div>
              <button onClick={() => removeProduct(dish._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">🗑️ Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DishList;
