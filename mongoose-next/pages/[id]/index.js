import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "../../lib/dbConnect";
import Pet from "../../models/Pet";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
/* Allows you to view pet card info and delete pet card*/
const PetPage = ({ pet }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const petID = router.query.id;

    try {
      await fetch(`/api/pets/${petID}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage("Failed to delete the pet.");
    }
  };

  const styles = {
    display: "flex",
  };
  const style0 = {
    marginRight: "1rem",
  };
  return (
    <Card key={pet._id} sx={{ maxWidth: 445 }} raised="true">
      <CardMedia
        component="img"
        height="250"
        image={pet.image_url}
        alt={pet.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {pet.name}
        </Typography>
        <div style={styles}>
          <strong style={style0}>Owner:</strong>
          <p>{pet.owner_name}</p> <br />
        </div>
        <div style={styles}>
          <h4 style={style0}>Species:</h4>
          <p>{pet.species}</p> <br />
        </div>
        <div style={styles}>
          <h4 style={style0}>Age:</h4>
          <p>{pet.age}</p> <br />
        </div>
        <div style={styles}>
          <h4 style={style0}>Diet:</h4>
          <p>{pet.diet}</p> <br />
        </div>
        <div style={styles}>
          <h4 style={style0}>Likes:</h4>
          <p>{pet.likes}</p> <br />
        </div>
        <div style={styles}>
          <h4 style={style0}>Dislikes:</h4>
          <p>{pet.dislikes}</p> <br />
        </div>
        <div style={styles}>
          <h4 style={style0}>Poddy Trained:</h4>
          <p>{pet.poddy_trained ? "Yes" : "No"}</p> <br />
        </div>
        <Typography variant="body2" color="text.secondary">
          {pet.species},{pet.age},{pet.poddy_trained ? "yes" : "no"},{pet.diet},
          {pet.likes},{pet.dislikes}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
          <Button size="small" color="success">
            Edit
          </Button>
        </Link>

        <Button onClick={handleDelete} size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const pet = await Pet.findById(params.id).lean();
  pet._id = pet._id.toString();

  return { props: { pet } };
}

export default PetPage;
