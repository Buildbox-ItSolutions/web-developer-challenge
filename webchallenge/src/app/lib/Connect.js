import mongoose from "mongoose";

const connection = {};
const URI =
  "mongodb+srv://cetauro:FUuhBa97REEyfX7A@cluster0.urr8sjm.mongodb.net/next?retryWrites=true&w=majority&appName=Cluster0";

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
