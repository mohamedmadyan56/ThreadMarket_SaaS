import { Router } from "express";
import { validate } from "../../shared/middleware/validate";
import authenticate from "../../shared/middleware/authenticate";
import { brandVerificationStatus, createBrand } from "./brand.controller";
import {
  brandVerificationStatusSchema,
  createBrandSchema,
} from "./brand.validators";

const router = Router();
router.use(authenticate);

router.route("/").post(validate(createBrandSchema), createBrand);

router.get(
  "/:brandId/verification-status",
  validate(brandVerificationStatusSchema),
  brandVerificationStatus,
);

export default router;
