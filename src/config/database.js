import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mibasedato");
    // await mongoose.connection.dropDatabase();
    console.log("se conecto con la base de dato");
  } catch (error) {
    console.log("no se conecto con la base de datos", error);
  }
};
