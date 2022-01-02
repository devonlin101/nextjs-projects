import mongoose from "mongoose";

const connection = {};
const uri =
  "mongodb+srv://devonlin:qpeioiK21@cluster0.rnaho.mongodb.net/notes_app?retryWrites=true&w=majority";

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
