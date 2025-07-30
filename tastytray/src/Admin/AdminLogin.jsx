// Admin/AdminLogin.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';

const AdminLogin = () => {
  const { setIsAdmin } = useContext(ShopContext);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'Harsh123') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      alert('Invalid password!');
    }
  };

  return (
    <div className="py-20 text-center max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-green-700">Admin Login</h2>
      <input
        type="password"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <button onClick={handleLogin} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
