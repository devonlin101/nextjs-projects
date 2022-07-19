import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

const Form = ({ formId, foodForm, forNewFood = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: foodForm.name,
    country_origin: foodForm.country_origin,
    recipe: foodForm.recipe,
    cooking_method: foodForm.cooking_method,
    image_url: foodForm.image_url,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/foods/${id}`, {
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

      mutate(`/api/foods/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      setMessage("Failed to update pet");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/foods", {
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
      setMessage("Failed to add food");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
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
      forNewFood ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.country_origin) err.country_origin = "Owner is required";
    if (!form.recipe) err.recipe = "Species is required";
    if (!form.cooking_method) err.cooking_method = "Species is required";
    if (!form.image_url) err.image_url = "Image URL is required";
    return err;
  };

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          maxLength="20"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="country_origin">country Origin</label>
        <input
          type="text"
          maxLength="20"
          name="country_origin"
          value={form.country_origin}
          onChange={handleChange}
          required
        />

        <label htmlFor="recipe">Recipe</label>
        <input
          type="text"
          maxLength="60"
          name="recipe"
          value={form.recipe}
          onChange={handleChange}
          required
        />

        <label htmlFor="cooking_method">Cooking Method</label>
        <textarea
          name="cooking_method"
          maxLength="120"
          value={form.cooking_method}
          onChange={handleChange}
        />

        <label htmlFor="image_url">Image URL</label>
        <input
          type="url"
          name="image_url"
          value={form.image_url}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Submit
        </button>
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
