import Link from "next/link";
import dbConnect from "../lib/dbConnect";
import Pet from "../models/Pet";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const Index = ({ pets }) => {
  const router = useRouter();

  return (
    <>
      {/* Create a card for each pet */}
      {pets.map((pet) => (
        <div key={pet._id}>
          <div
            className="card"
            onClick={(e) => {
              e.preventDefault();
              router.push("/[id]", `${pet._id}`);
            }}
          >
            <img src={pet.image_url} />
            <h5 className="pet-name">{pet.name}</h5>
            <div className="main-content">
              <p className="pet-name">{pet.name}</p>
              <p className="owner">Owner: {pet.owner_name}</p>

              {/* Extra Pet Info: Likes and Dislikes */}
              <div className="likes info">
                <p className="label">Likes</p>
                <ul>
                  {pet.likes.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
                </ul>
              </div>
              <div className="dislikes info">
                <p className="label">Dislikes</p>
                <ul>
                  {pet.dislikes.map((data, index) => (
                    <li key={index}>{data} </li>
                  ))}
                </ul>
              </div>

              <div className="btn-container">
                <Link href="/[id]" as={`/${pet._id}`}>
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
  const result = await Pet.find({});
  const pets = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { pets } };
}

export default Index;
