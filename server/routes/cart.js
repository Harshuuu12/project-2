const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// Get cart
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.json(cart || { items: [] });
});

// Update cart
router.post("/:userId", async (req, res) => {
  const { items } = req.body;
  const updated = await Cart.findOneAndUpdate(
    { userId: req.params.userId },
    { items, updatedAt: new Date() },
    { upsert: true, new: true }
  );
  res.json(updated);
});

// Clear cart
router.delete("/:userId", async (req, res) => {
  await Cart.findOneAndDelete({ userId: req.params.userId });
  res.json({ success: true });
});

module.exports = router;
