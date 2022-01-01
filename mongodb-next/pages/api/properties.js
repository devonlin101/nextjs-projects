import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;

  const data = await client
    .db()
    .collection("listingsAndReviews")
    .find({})
    .limit(20)
    .toArray();
  res.json(data);
}
