// pages/Cart.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, products, removeFromCart, addtocart, currency } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartProductDetails = Object.entries(cartItems).map(([id, qty]) => {
    const product = products.find(p => p._id === id);
    return product ? { ...product, quantity: qty } : null;
  }).filter(Boolean);

  const subtotal = cartProductDetails.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-green-600 mb-6 text-center flex items-center justify-center gap-2">
        <FaShoppingCart /> Your Cart
      </h2>

      {cartProductDetails.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-xl">Your cart is empty.</p>
          <Link to="/menu" className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cartProductDetails.map(item => (
            <div key={item._id} className="flex items-center gap-4 border p-4 rounded-lg bg-white shadow-sm">
              <img
                src={item.images?.[0]}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{currency}{item.price} × {item.quantity}</p>
              </div>
              <div className="flex gap-2 items-center">
                <button onClick={() => removeFromCart(item._id)} className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                  <FaMinus />
                </button>
                <span className="px-3 font-semibold">{item.quantity}</span>
                <button onClick={() => addtocart(item._id)} className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
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
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
