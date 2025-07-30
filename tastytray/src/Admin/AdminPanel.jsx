// Admin/AdminPanel.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-green-700 mb-6">TastyTray Admin Panel</h1>
      <nav className="flex gap-4 mb-8">
        <Link to="add-dish" className="text-green-600 underline">Add Dish</Link>
        <Link to="dishes" className="text-green-600 underline">All Dishes</Link>
        <Link to="orders" className="text-green-600 underline">All Orders</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminPanel;
