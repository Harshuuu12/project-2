import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { cartItems, products, addOrder, delivery_fee, currency } = useContext(ShopContext);
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    upiId: '',
    bankHolder: '',
    bankName: '',
    transactionId: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const totalAmount = Object.entries(cartItems).reduce((total, [id, qty]) => {
    const product = products.find(p => p._id === id);
    return product ? total + product.price * qty : total;
  }, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handlePlaceOrder = () => {
    const { name, address, phone, upiId, bankHolder, bankName, transactionId } = form;

    if (!name || !address || !phone) {
      setError('🚫 Please fill all delivery fields');
      return;
    }

    if (paymentMethod === 'upi' && !upiId) {
      setError('🚫 Please enter your UPI ID');
      return;
    }

    if (
      paymentMethod === 'bank' &&
      (!bankHolder || !bankName || !transactionId)
    ) {
      setError('🚫 Please fill all bank details');
      return;
    }

    const orderData = {
      name,
      address,
      phone,
      paymentMethod,
      upiId: paymentMethod === 'upi' ? upiId : '',
      bankHolder: paymentMethod === 'bank' ? bankHolder : '',
      bankName: paymentMethod === 'bank' ? bankName : '',
      transactionId: paymentMethod === 'bank' ? transactionId : '',
      total: totalAmount + parseInt(delivery_fee),
    };

    addOrder(cartItems, orderData, orderData.total);
    navigate('/orders');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex items-start justify-center">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left: Delivery Details */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-6">Delivery Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full mb-4 px-5 py-3 border border-gray-300 rounded-xl"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            className="w-full mb-4 px-5 py-3 border border-gray-300 rounded-xl"
            value={form.address}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full mb-4 px-5 py-3 border border-gray-300 rounded-xl"
            value={form.phone}
            onChange={handleChange}
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

        {/* Right: Payment + Summary */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-6">Payment & Summary</h2>

          <div className="mb-6">
            <p className="text-gray-600 font-medium mb-2">Select Payment Method:</p>
            <div className="flex flex-wrap gap-3">
              {['cod', 'upi', 'bank'].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`px-4 py-2 rounded-xl border font-medium ${
                    paymentMethod === method
                      ? 'bg-green-600 text-white'
                      : 'bg-white border-gray-300'
                  }`}
                >
                  {method === 'cod'
                    ? 'Cash on Delivery'
                    : method === 'upi'
                    ? 'UPI'
                    : 'Bank Transfer'}
                </button>
              ))}
            </div>

            {/* UPI Input */}
            {paymentMethod === 'upi' && (
              <input
                type="text"
                name="upiId"
                placeholder="Enter UPI ID (e.g., name@upi)"
                className="mt-4 w-full px-5 py-3 border border-gray-300 rounded-xl"
                value={form.upiId}
                onChange={handleChange}
              />
            )}

            {/* Bank Transfer Inputs */}
            {paymentMethod === 'bank' && (
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  name="bankHolder"
                  placeholder="Account Holder Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl"
                  value={form.bankHolder}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="bankName"
                  placeholder="Bank Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl"
                  value={form.bankName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="transactionId"
                  placeholder="Transaction ID"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl"
                  value={form.transactionId}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-md mb-6">
            <div className="flex justify-between text-gray-700 font-medium mb-2">
              <span>Subtotal:</span>
              <span>{currency}{totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 font-medium mb-2">
              <span>Delivery Fee:</span>
              <span>{currency}{parseInt(delivery_fee).toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2 text-lg text-green-700 font-bold">
              <span>Total:</span>
              <span>{currency}{(totalAmount + parseInt(delivery_fee)).toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-green-600 hover:bg-green-700 transition-all text-white font-semibold py-3 rounded-xl shadow-lg"
          >
            Confirm & Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
