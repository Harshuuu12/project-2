const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  quantity: Number,
  image: String,
});

const orderSchema = new mongoose.Schema({
  userId: { type: String, default: "default_user" },
  items: [orderItemSchema],
  total: Number,
  status: { type: String, default: "Pending" },
  date: { type: Date, default: Date.now },
  name: String,      // customer info
  address: String,   // optional
  phone: String,
});

module.exports = mongoose.model("Order", orderSchema);
