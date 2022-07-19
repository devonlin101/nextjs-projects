import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const FoodSchema = new mongoose.Schema({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, "Please provide a name for this food."],
    maxlength: [20, "Name cannot be more than 60 characters"],
  },
  country_origin: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide the country origin of the food"],
    maxlength: [20, "country origin can not be more than 20 characters"],
  },
  recipe: {
    /* The species of your pet */

    type: String,
    required: [true, "Please list of all the ingredients for this food"],
    maxlength: [120, "recipe specified cannot be more than 40 characters"],
  },
  cooking_method: {
    /* List of dietary needs, if applicable */

    type: String,
    required: [true, "Please provide step by step guide to create this food"],
    maxlength: [120, "cooking method can not be more than 120 characters"],
  },
  image_url: {
    /* Url to pet image */

    required: [true, "Please provide an image url for this pet."],
    type: String,
  },
});

export default mongoose.models.Food || mongoose.model("Food", FoodSchema);
