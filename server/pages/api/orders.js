import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("shopDB");
  const collection = db.collection("orders");

  try {
    if (req.method === "GET") {
      const orders = await collection.find({}).sort({ date: -1 }).toArray();
      res.status(200).json(orders);
    } else if (req.method === "POST") {
      const order = req.body;
      const result = await collection.insertOne({
        ...order,
        date: new Date(),
        status: "Confirmed",
      });
      res.status(201).json(result.ops[0]);
    } else {
      res.status(405).end();
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
