import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import clientPromise from "../lib/mongodb";
import Link from "next/link";

export default function Home({ airbnb }) {
  return (
    <>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
      >
        <Link href="/new">
          <Button variant="contained">Add a New Air Bnb property</Button>
        </Link>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {airbnb &&
          airbnb.map((property) => (
            <Card
              raised="true"
              sx={{
                maxWidth: 345,
                margin: 1,
              }}
              key={property._id}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={property.images.picture_url}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {property.name}
                </Typography>
                <p>{property.summary}</p>
                <strong>property type:</strong> {property.property_type} <br />
                <strong>property space:</strong> {property.space} <br />
                <strong>property description:</strong>
                {property.description}
                <br />
                <Typography variant="body1"></Typography>
              </CardContent>
              <CardActions>
                <Link href="/[id]" as={`/${property._id}`}>
                  <Button variant="outlined" size="small">
                    view detail
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
      </Container>
    </>
  );
}

export async function getServerSideProps() {
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
    .limit(10)
    .toArray();

  const airbnb = JSON.parse(JSON.stringify(data));
  console.log("airbnb:", airbnb);
  return {
    props: { airbnb },
  };
}
