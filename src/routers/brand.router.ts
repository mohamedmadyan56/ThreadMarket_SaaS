import { Router } from "express";  
import { brandVerificationStatusSchema } from "../validators/brand.validators";
import { validationMiddleware } from "../middlewares/validationMiddleware";
import { brandVerificationStatus } from "../controllers/brand.controllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";


const router = Router();

router.get(
  "/:brandId/verification-status",
  isAuthenticated,
  validationMiddleware(brandVerificationStatusSchema),
  brandVerificationStatus
);

export default router;
