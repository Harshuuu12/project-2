// pages/Cart.jsx
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';
import { ShopContext } from '../context/Shopcontext';

const Cart = () => {
  const {
    cartItems,
    products,
    addToCart,        // Matches Shopcontext function name
    removeFromCart,
    currency = '₹',   // Default to ₹ if not provided
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const cartDetails = Object.entries(cartItems)
    .map(([id, quantity]) => {
      const product = products.find(item => item._id === id);
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

  const subtotal = cartDetails.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-600 flex items-center justify-center gap-2 mb-8">
        <FaShoppingCart /> Your Cart
      </h1>

      {cartDetails.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="text-lg">Your cart is currently empty.</p>
          <Link
            to="/menu"
            className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cartDetails.map(item => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg bg-white shadow"
            >
              <img
                src={item.images?.[0]}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  {currency}{item.price} × {item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                  aria-label="Decrease quantity"
                >
                  <FaMinus />
                </button>
                <span className="font-semibold px-3">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item._id)}
                  className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
                  aria-label="Increase quantity"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}

          <div className="text-right text-xl font-semibold text-green-700">
            Total: {currency}{subtotal.toFixed(2)}
          </div>

          <div className="text-right">
            <button
              onClick={() => navigate('/placeorder')}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
