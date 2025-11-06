import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';

const OrderList = () => {
  const { userOrders } = useContext(ShopContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">📦 User Orders</h2>
      {userOrders.length === 0 ? (
        <p className="text-gray-500">No orders placed yet.</p>
      ) : (
        <div className="space-y-4">
          {userOrders.map((order, index) => (
            <div key={index} className="flex justify-between items-center bg-white shadow p-4 rounded">
              <div className="flex items-center gap-4">
                <img src={order.image} alt={order.name} className="w-14 h-14 rounded object-cover" />
                <div>
                  <h4 className="font-semibold">{order.name}</h4>
                  <p className="text-sm text-gray-500">Qty: {order.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-green-700 font-semibold">₹{order.price * order.quantity}</p>
                <p className="text-xs text-gray-400">{order.status}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderList;
