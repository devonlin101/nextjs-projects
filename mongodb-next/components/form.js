import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Form = ({ formId, pForm, newProperty = true }) => {
  const router = useRouter();
  const contentType = "application/json";

  const [form, setForm] = useState({
    name: pForm.name,
    summary: pForm.summary,
    property_type: pForm.property_type,
    beds: pForm.beds,
    bathrooms: pForm.bathrooms,
    images: pForm.images,
    price: pForm.price,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/properties/${id}`, {
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

      mutate(`/api/properties/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/properties", {
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
      console.error(error.message);
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
    newProperty ? postData(form) : putData(form);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        m: 2,
        "& > :not(style)": { m: 1 },
      }}
      id={formId}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Property Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <TextField
        label="Summary"
        name="summary"
        value={form.summary}
        onChange={handleChange}
        multiline
        maxRows={4}
        required
      />

      <TextField
        label="Property Type"
        name="property_type"
        value={form.property_type}
        onChange={handleChange}
        required
      />

      <TextField
        type="number"
        label="beds"
        name="beds"
        value={form.beds}
        onChange={handleChange}
        required
      />

      <TextField
        type="number"
        label="Bathrooms"
        name="bathrooms"
        value={form.bathrooms}
        onChange={handleChange}
        required
      />
      <TextField
        label="Image Url"
        name="images"
        value={form.images}
        onChange={handleChange}
        required
      />

      <TextField
        label="Price"
        name="price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <Link href="/">
        <Button variant="outlined">Back</Button>
      </Link>
    </Box>
  );
};

export default Form;
