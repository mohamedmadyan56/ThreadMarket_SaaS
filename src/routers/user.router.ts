import { Router } from "express";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import {
  forgetPassword,
  resetPassword,
  verifyOtp,
} from "../controllers/user.controllers";
import {
  forgetPasswordSchema,
  otpSchema,
  resetPasswordSchema,
} from "../validators/user.validators";
const router = Router();

router.post(
  "/forget-password",
  validationMiddleware(forgetPasswordSchema),
  forgetPassword,
);
router.post("/verify-otp", validationMiddleware(otpSchema), verifyOtp);

router.patch(
  "/reset-password",
  validationMiddleware(resetPasswordSchema),
  resetPassword,
);
