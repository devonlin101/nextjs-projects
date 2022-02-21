import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const datas = await client.db().collection("listingsAndReviews");

  const { method } = req;
  console.log(req.method);
  switch (method) {
    case "GET":
      try {
        const properties = await datas.find({}).limit(20).toArray();
        res.status(200).json({ success: true, data: properties });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const property = await datas.insertOne({
          name: req.body.name,
          summary: req.body.summary,
          property_type: req.body.property_type,
          beds: req.body.beds,
          bathrooms: req.body.bathrooms,
          images: req.body.images,
          price: req.body.price,
        }); /* create a new model in the database */
        console.log(
          `A document was inserted with the _id: ${property.insertedId}`
        );
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
