// Admin/AddDish.jsx
import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';

const AddDish = () => {
  const { addProduct } = useContext(ShopContext);
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: 'Main Course',
    price: '',
    image: '',
    bestseller: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAdd = () => {
    if (!form.name || !form.price || !form.image) {
      alert('⚠️ Please fill all required fields');
      return;
    }

    addProduct({
      ...form,
      price: parseFloat(form.price),
      images: [form.image],
    });

    alert('✅ Dish added successfully!');
    setForm({
      name: '',
      description: '',
      category: 'Main Course',
      price: '',
      image: '',
      bestseller: false,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6">🍲 Add New Dish</h2>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Dish Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-400 outline-none"
            placeholder="e.g. Paneer Butter Masala"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-400 outline-none"
            placeholder="Short description of the dish"
          ></textarea>
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Image URL *</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-400 outline-none"
            placeholder="https://..."
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Price (₹) *</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-400 outline-none"
            placeholder="e.g. 199"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-400 outline-none"
          >
            <option>Main Course</option>
            <option>Snacks</option>
            <option>Desserts</option>
            <option>Beverages</option>
          </select>
        </div>

        {/* Bestseller */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="bestseller"
            checked={form.bestseller}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label className="text-sm text-gray-700">Mark as Bestseller</label>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleAdd}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md mt-4 transition duration-200 shadow-md"
        >
          ➕ Add Dish
        </button>
      </div>
    </div>
  );
};

export default AddDish;
