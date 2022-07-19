import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../components/Form";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditFood = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("router:", router);
  const { data: food, error } = useSWR(id ? `/api/foods/${id}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!food) return <p>Loading...</p>;

  const foodForm = {
    name: food.name,
    country_origin: food.country_origin,
    recipe: food.recipe,
    cooking_method: food.cooking_method,
    image_url: food.image_url,
  };

  return (
    <Form formId="edit-food-form" foodForm={foodForm} forNewFood={false} />
  );
};

export default EditFood;
