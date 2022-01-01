import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const data = req.query;
  const response = await client
    .db("sample_airbnb")
    .collection("bookings")
    .insertOne(data);
  res.json(response);
}
