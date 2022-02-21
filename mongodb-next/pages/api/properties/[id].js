import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  const client = await clientPromise;

  const data = await client.db().collection("listingsAndReviews");

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const property = await data.findOne(
          { _id: id },
          {
            projection: {
              name: 1,
              summary: 1,
              property_type: 1,
              beds: 1,
              bathrooms: 1,
              amenities: 1,
              price: 1,
              images: 1,
              address: 1,
            },
          }
        );
        if (!property) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: property });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const property = await data.updateOne(
          { _id: id },
          { $set: { name: req.body.name } }
        );
        if (!property) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: property });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedProperty = await data.deleteOne({ _id: id });
        if (!deletedProperty) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
