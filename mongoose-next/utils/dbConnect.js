import mongoose from "mongoose";

const uri =
  "mongodb+srv://devonlin:qpeioiK21@cluster0.rnaho.mongodb.net/notes_app?retryWrites=true&w=majority";
const localhost_uri = "mongodb://localhost:27017/test";

async function dbConnect() {
  await mongoose.connect(localhost_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
dbConnect().then((err) => console.log(err));

export default dbConnect;
