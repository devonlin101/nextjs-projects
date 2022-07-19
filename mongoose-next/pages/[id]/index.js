import { useRouter } from "next/router";
import Link from "next/link";
import dbConnect from "../../lib/dbConnect";
import Food from "../../models/Food";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
/* Allows you to view food card info and delete food card*/

const FoodPage = ({ food }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const foodID = router.query.id;

    try {
      await fetch(`/api/foods/${foodID}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      setMessage("Failed to delete the food.");
    }
  };

  const styles = {
    display: "flex",
  };
  const style0 = {
    marginRight: "1rem",
  };
  return (
    <Card key={food._id} sx={{ maxWidth: 445 }} raised="true">
      <CardMedia
        component="img"
        height="250"
        image={food.image_url}
        alt={food.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {food.name}
        </Typography>
        <div style={styles}>
          <strong style={style0}>Country Origin:</strong>
          <p>{food.country_origin}</p> <br />
        </div>
        <div style={styles}>
          <h4 style={style0}>Recipe:</h4>
          <p>{food.recipe}</p> <br />
        </div>
        <div style={styles}>
          <h4 style={style0}>Cooking Method:</h4>
          <p>{food.cooking_method}</p> <br />
        </div>
        <div style={styles}>
          <h4 style={style0}>Likes:</h4>
          <p>{food.likes}</p> <br />
        </div>
        <div style={styles}>
          <h4 style={style0}>Dislikes:</h4>
          <p>{food.dislikes}</p> <br />
        </div>
        <Typography variant="body2" color="text.secondary">
          {food.name},{food.country_origin},{food.recipe},{food.cooking_method},
          {food.likes},{food.dislikes}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="/[id]/edit" as={`/${food._id}/edit`}>
          <Button size="small" color="success">
            Edit
          </Button>
        </Link>

        <Button onClick={handleDelete} size="small" color="error">
          Delete
        </Button>
        <Link href="/">
          <Button variant="">back</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const food = await Food.findById(params.id).lean();
  food._id = food._id.toString();
  console.log("food", food);
  return { props: { food } };
}

export default FoodPage;
