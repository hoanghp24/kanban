import { error } from "console";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}`);

    console.log(`Connect to db successfully!!!`);
  } catch (error) {
    console.log(`Can not connect to db ${error}`);
  }
};

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is stating at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

