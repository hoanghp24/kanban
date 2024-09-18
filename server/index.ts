import { error } from "console";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const PORT = process.env.PORT || 3001;

const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lhmx4.mongodb.net/`;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is starting at http://localhost:${PORT}`);
});
