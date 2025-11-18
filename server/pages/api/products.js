import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("shopDB");
  const collection = db.collection("products");

  try {
    if (req.method === "GET") {
      const products = await collection.find({}).toArray();
      res.status(200).json(products);
    } else if (req.method === "POST") {
      const newProduct = req.body;
      const result = await collection.insertOne(newProduct);
      res.status(201).json(result.ops[0]);
    } else if (req.method === "DELETE") {
      const { id } = req.query;
      await collection.deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({ message: "Product deleted" });
    } else {
      res.status(405).end();
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
