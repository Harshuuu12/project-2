// AdminPanel.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";

const AdminPanel = () => {
  const { products, removeProduct, resetProducts } = useContext(ShopContext);

  const handleImage = (product) => {
    if (product.images && product.images.length > 0) {
      return product.images[0];
    }
    return "https://via.placeholder.com/300x200?text=No+Image"; // fallback
  };

  return (
    <div className="p-6 max-w-7xl mx-auto mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-4xl font-bold text-red-600">🍽️ Admin Dashboard</h2>
        <div className="flex gap-3">
          <Link to="/admin/add-dish" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow">
            ➕ Add Dish
          </Link>
          <Link to="/admin/orders" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
            📦 View Orders
          </Link>
          <button onClick={resetProducts} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded shadow">
            🔄 Reset Products
          </button>
        </div>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-10">No products added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={handleImage(product)}
                alt={product.name}
                className="h-40 w-full object-cover rounded mb-3 border"
              />
              <h3 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h3>
              <p className="text-gray-500 text-sm">₹{product.price}</p>
              <button
                onClick={() => removeProduct(product._id)}
                className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded shadow"
              >
                ❌ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
