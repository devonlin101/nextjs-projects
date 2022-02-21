import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const datas = await client.db().collection("listingsAndReviews");

  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const properties = await datas
          .find({})
          .limit(20)
          .toArray(); /* find all the data in our database */
        res.json(properties);
        res.status(200).json({ success: true, data: properties });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const property = await datas.insertOne({
          name: "hello world",
          summary: "hello world hello world",
        }); /* create a new model in the database */
        res.status(201).json({ success: true, data: property });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
