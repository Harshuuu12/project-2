// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600 mt-10 border-t">
      <div className="mb-2">
        <Link to="/about" className="mx-2 hover:text-green-600">About</Link>
        <Link to="/contact" className="mx-2 hover:text-green-600">Contact</Link>
        <Link to="/menu" className="mx-2 hover:text-green-600">Menu</Link>
      </div>
      <p>&copy; {new Date().getFullYear()} TastyTray. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
