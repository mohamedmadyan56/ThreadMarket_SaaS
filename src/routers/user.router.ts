import { Router } from "express";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import {
  forgetPassword,
  refreshAccessToken,
  resetPassword,
  verifyOtp,
  register,
  verifyRegisterOtp,
  logout,
} from "../controllers/user.controllers";
import {
  forgetPasswordSchema,
  otpSchema,
  registerSchema,
  resetPasswordSchema,
} from "../validators/user.validators";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { upload } from "../utils/multer";
const router = Router();

router.post(
  "/register",
  validationMiddleware(registerSchema),
  upload.single("picture"),
  register,
);
router.post(
  "/register-verify-otp",
  validationMiddleware(otpSchema),
  verifyRegisterOtp,
);
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

router.post("/logout", isAuthenticated, logout);
router.post("/refresh-accessToken", isAuthenticated, refreshAccessToken);

export default router;
