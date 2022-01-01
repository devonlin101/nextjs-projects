import Head from "next/head";
import Script from "next/script";
import clientPromise from "../lib/mongodb";

export default function Home({ properties }) {
  const book = async (property) => {
    const data = await fetch(
      `http://localhost:3000/api/book?property_id=${property._id}&guest=Ado`
    );
    const guest = await data.json();
    console.log(guest);
  };
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="container mx-auto">
        <div className="flex">
          <div className="row w-full text-center my-4">
            <h1 className="text-4xl font-bold mb-5">NextBnB</h1>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          {properties &&
            properties.map((property) => (
              <div
                className="flex-auto w-1/4 rounded overflow-hidden shadow-lg m-2"
                key={property._id}
              >
                <img className="w-full" src={property.img} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {property.name} (Up to {property.guest} guests){" "}
                  </div>
                  <p>{property.address.street}</p>
                  <p className="text-gray-700 text-base">{property.summary}</p>
                </div>
                <div className="text-center py-2 my-2 font-bold">
                  <span className="text-green-500">${property.price}</span>
                  /night
                </div>
                <div className="text-center py-2 my-2">
                  <button
                    href={"listing/" + property._id}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded"
                    onClick={() => book(property)}
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands
  const client = await clientPromise;
  const data = await client
    .db()
    .collection("listingsAndReviews")
    .find({})
    .limit(20)
    .toArray();
  const properties = JSON.parse(JSON.stringify(data));
  const filtered = properties.map((property) => {
    const price = JSON.parse(JSON.stringify(property.price));
    const { _id, name, address, summary, accommodates, cleaning_fee } =
      property;

    return {
      _id,
      name,
      image: property.images.picture_url,
      address,
      summary,
      guests: accommodates,
      price: price.$numberDecimal,
    };
  });
  return {
    props: { properties: filtered },
  };
}
