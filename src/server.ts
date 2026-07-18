import express from "express";
import { ENV } from "./helpers/ENV";
import { connectDB } from "./utils/connectDB";
import router from "./routers/user.router";
const app = express();


connectDB();

app.use(express.json());
app.use("/api/users", router);

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
