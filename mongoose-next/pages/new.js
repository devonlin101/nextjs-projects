import Form from "../components/Form";
const NewFood = () => {
  const foodForm = {
    name: "",
    country_origin: "",
    recipe: "",
    cooking_method: "",
    image_url: "",
    likes: [],
    dislikes: [],
  };

  return <Form formId="add-food-form" foodForm={foodForm} />;
};
export default NewFood;
