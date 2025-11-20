const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: String,
  quantity: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema({
  userId: { type: String, default: "default_user" },
  items: [cartItemSchema],
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Cart", cartSchema);
