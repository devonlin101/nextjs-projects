import Link from "next/link";
import dbConnect from "../lib/dbConnect";
import Food from "../models/Food";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const Index = ({ foods }) => {
  const router = useRouter();

  return (
    <>
      {/* Create a card for each pet */}
      {foods.map((food) => (
        <div key={food._id}>
          <div
            className="card"
            onClick={(e) => {
              e.preventDefault();
              router.push("/[id]", `${food._id}`);
            }}
          >
            <img src={food.image_url} />
            <h5 className="food-name">{food.name}</h5>
            <div className="main-content">
              <p className="food-name">{food.name}</p>

              <div className="btn-container">
                <Link href="/[id]" as={`/${food._id}`}>
                  <Button variant="outlined">View</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Food.find({});
  const foods = result.map((doc) => {
    const food = doc.toObject();
    food._id = food._id.toString();
    return food;
  });

  return { props: { foods } };
}

export default Index;
