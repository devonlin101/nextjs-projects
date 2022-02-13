import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const Form = ({ formId, petForm, forNewPet = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: petForm.name,
    owner_name: petForm.owner_name,
    species: petForm.species,
    age: petForm.age,
    poddy_trained: petForm.poddy_trained,
    diet: petForm.diet,
    image_url: petForm.image_url,
    likes: petForm.likes,
    dislikes: petForm.dislikes,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/pets/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/pets/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      setMessage("Failed to update pet");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/pets", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      setMessage("Failed to add pet");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.name === "poddy_trained" ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewPet ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.owner_name) err.owner_name = "Owner is required";
    if (!form.species) err.species = "Species is required";
    if (!form.image_url) err.image_url = "Image URL is required";
    return err;
  };

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          onChange={handleChange}
          value={form.name}
          name="name"
        />
        <TextField
          fullWidth
          label="Owner"
          variant="outlined"
          onChange={handleChange}
          value={form.owner_name}
          name="owner_name"
        />
        <TextField
          fullWidth
          label="Species"
          variant="outlined"
          onChange={handleChange}
          value={form.species}
          name="species"
        />
        <TextField
          fullWidth
          type="number"
          label="Age"
          variant="outlined"
          onChange={handleChange}
          value={form.age}
          name="age"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              name="poddy_trained"
              checked={form.poddy_trained}
            />
          }
          label="Potty Trained"
        />
        <TextField
          fullWidth
          label="Diet"
          variant="outlined"
          onChange={handleChange}
          value={form.diet}
          name="diet"
        />

        <TextField
          fullWidth
          type="url"
          label="Image URL"
          variant="outlined"
          onChange={handleChange}
          value={form.image_url}
          name="image_url"
        />
        <TextField
          fullWidth
          label="Likes"
          variant="outlined"
          onChange={handleChange}
          value={form.likes}
          name="likes"
        />
        <TextField
          fullWidth
          label="Dislikes"
          variant="outlined"
          onChange={handleChange}
          value={form.dislikes}
          name="dislikes"
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default Form;
