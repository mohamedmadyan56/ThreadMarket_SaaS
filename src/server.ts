import express from "express";
import { ENV } from "./helpers/ENV";
import { connectDB } from "./utils/connectDB";
import userRouter from "./routers/user.router";
import { StatusCodes } from "http-status-codes";
const app = express();
connectDB();

app.use(express.json());
app.use("/api/v1/auth", userRouter);

app.use((err: any, req: any, res: any, next: any) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
  });
});

app.use((req: any, res: any, next: any) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "Route not found",
  });
});
app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
