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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleAdd = () => {
    if (!form.name.trim() || !form.price || !form.image) {
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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">🍲 Add New Dish</h2>

      <div className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-green-400 outline-none"
          placeholder="Dish Name *"
        />

        {/* Description */}
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows="3"
          className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-green-400 outline-none"
          placeholder="Short description (optional)"
        />

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1 text-gray-700">Upload Dish Image *</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full file:mr-4 file:py-2 file:px-4 file:border file:rounded file:border-gray-300 file:bg-gray-100 file:text-sm file:font-medium file:text-gray-800 hover:file:bg-gray-200"
          />
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="mt-3 rounded border h-40 w-full object-contain"
            />
          )}
        </div>

        {/* Price */}
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-green-400 outline-none"
          placeholder="Price in ₹ *"
        />

        {/* Category */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-green-400 outline-none"
        >
          <option>Main Course</option>
          <option>Snacks</option>
          <option>Desserts</option>
          <option>Beverages</option>
        </select>

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

        {/* Submit */}
        <button
          onClick={handleAdd}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition duration-200 shadow-md"
        >
          ➕ Add Dish
        </button>
      </div>
    </div>
  );
};

export default AddDish;
