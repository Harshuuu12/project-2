import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';

const Navbar = () => {
  const { getTotalCartItems, products } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();
  const cartCount = getTotalCartItems();

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (searchTerm.trim()) {
      const matches = products.filter((dish) =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(matches);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm, products]);

  const handleSearchClick = (dishId) => {
    navigate(`/dish/${dishId}`);
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleSearchClick(suggestions[0]._id);
    } else {
      alert('❌ Dish not found!');
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-green-600 tracking-wide">
          TastyTray 🍽️
        </Link>

        {/* Search */}
        <form onSubmit={handleSubmit} className="flex-1 flex justify-center relative">
          <div className="w-full max-w-md">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for dishes..."
                className="w-full pl-10 pr-4 py-2 text-sm border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                onFocus={() => searchTerm && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              />
            </div>
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute z-50 bg-white border rounded-md mt-2 w-full shadow-lg max-h-60 overflow-y-auto">
                {suggestions.map((dish) => (
                  <li
                    key={dish._id}
                    onClick={() => handleSearchClick(dish._id)}
                    className="px-4 py-2 hover:bg-green-100 cursor-pointer flex items-center gap-2 text-sm"
                  >
                    🔍 {dish.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>

        {/* Nav Links + Cart + Profile */}
        <div className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base relative">
          {['Home', 'Menu', 'About', 'Contact'].map((name) => (
            <Link
              key={name}
              to={`/${name === 'Home' ? '' : name.toLowerCase()}`}
              className={`hover:text-green-600 ${
                location.pathname === `/${name.toLowerCase()}` ||
                (name === 'Home' && location.pathname === '/')
                  ? 'text-green-700 font-semibold underline underline-offset-4'
                  : 'text-gray-700'
              }`}
            >
              {name}
            </Link>
          ))}

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-xl text-gray-700 hover:text-green-600"
            aria-label="View cart"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-xl text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Profile"
            >
              👤
            </button>
            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute right-0 mt-2 w-36 bg-white border shadow-lg rounded-md z-50"
              >
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                >
                   Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                >
                   Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
