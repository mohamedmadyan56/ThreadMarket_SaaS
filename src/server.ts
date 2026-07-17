import express from "express";
import { ENV } from "./helpers/ENV";
const app = express();

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
