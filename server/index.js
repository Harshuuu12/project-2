const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON bodies

// 1️⃣ MongoDB connection
mongoose.connect("mongodb+srv://Tasty-Tray:tasty789@cluster0.xczbenw.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// 2️⃣ Schemas
const productSchema = new mongoose.Schema({
  _id: String,
  name: String,
  price: Number,
  images: [String],
});

const orderSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  quantity: Number,
  date: String,
  status: String,
});

const Product = mongoose.model("Product", productSchema);
const Order = mongoose.model("Order", orderSchema);

// 3️⃣ Routes
app.post("/api/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    const orders = await Order.insertMany(req.body);
    res.status(201).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Optional: get products/orders
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get("/api/orders", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// 4️⃣ Start server
app.listen(5000, () => console.log("Server running on port 5000"));
