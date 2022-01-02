import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;

  const data = await client
    .db()
    .collection("listingsAndReviews")
    .aggregate([
      {
        $search: {
          search: {
            query: req.query.term,
            path: ["description", "amenities"],
          },
        },
      },
      {
        $project: {
          description: 1,
          amenities: 1,
        },
      },
      {
        $limit: 20,
      },
    ])
    .toArray();
  res.json(data);
}
