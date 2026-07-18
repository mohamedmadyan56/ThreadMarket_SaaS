import express from "express";
import { ENV } from "./helpers/ENV";
import { connectDB } from "./utils/connectDB";
const app = express();

connectDB();
app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
