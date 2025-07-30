// pages/Orders.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';

const Orders = () => {
  const { userOrders } = useContext(ShopContext);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-6 text-green-700">My Orders</h2>

      {userOrders.length === 0 ? (
        <p className="text-gray-500">No orders yet. Place something delicious!</p>
      ) : (
        <div className="space-y-4">
          {userOrders.map((order, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded bg-white shadow-sm">
              <div className="flex items-center gap-4">
                <img src={order.image} alt={order.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h4 className="font-bold">{order.name}</h4>
                  <p className="text-sm text-gray-500">Qty: {order.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green-700 font-semibold">₹{order.price * order.quantity}</p>
                <p className="text-xs text-gray-400">📦 {order.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
