import clientPromise from "../../lib/mongodb";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Link from "next/link";

export default function index({ property }) {
  const router = useRouter();
  const propertyID = router.query.id;
  console.log(propertyID, property._id);
  const handleDelete = async () => {
    const propertyID = router.query.id;

    try {
      await fetch(`/api/properties/${propertyID}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage("Failed to delete the pet.");
    }
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card raised="true" key={property._id}>
        <CardMedia component="img" image={property.images.picture_url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div>{property.name}</div>
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {property.summary}
          </Typography>
          <strong>property id:</strong> {property._id}
          <br />
          <strong>property type:</strong> {property.property_type}
          <br />
          <strong>beds:</strong> {JSON.parse(JSON.stringify(property.beds))}
          <br />
          <strong>property description:</strong> {property.description}
        </CardContent>
        <CardActions>
          <Link href="/[id]/edit" as={`/${property._id}/edit`}>
            <Button variant="outlined" color="success">
              Update
            </Button>
          </Link>
          <Button variant="outlined" color="error" onClick={handleDelete}>
            delete
          </Button>
          <Link href="/">
            <Button variant="outlined">Home Page</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

export async function getServerSideProps({ params }) {
  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:

  const client = await clientPromise;
  const data = await client
    .db()
    .collection("listingsAndReviews")
    .findOne({ _id: params.id });
  const filtered = JSON.parse(JSON.stringify(data));
  return {
    props: { property: filtered },
  };
}
