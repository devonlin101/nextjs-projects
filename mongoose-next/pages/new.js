import Form from "../components/Form";
const NewPet = () => {
  const petForm = {
    name: "",
    owner_name: "",
    species: "",
    age: "",
    poddy_trained: false,
    diet: [],
    image_url: "",
    likes: [],
    dislikes: [],
  };

  return <Form formId="add-pet-form" petForm={petForm} />;
};
export default NewPet;
