import { Router } from "express";
import { validate } from "../../shared/middleware/validate";
import authenticate from "../../shared/middleware/authenticate";
import { authorize } from "../../shared/middleware/authorize";
import { upload } from "../../shared/utils/upload";
import {
  brandVerificationStatus,
  createBrand,
  updateBrandProfile,
} from "./brand.controller";
import {
  brandVerificationStatusSchema,
  createBrandSchema,
  updateBrandProfileSchema,
} from "./brand.validators";

const router = Router();
router.use(authenticate);

router
  .route("/")
  .post(validate(createBrandSchema), authorize("admin", "user"), createBrand);

router.patch(
  "/:brandId/profile",
  authorize("admin", "brand"),
  upload.single("logo"),
  validate(updateBrandProfileSchema),
  updateBrandProfile,
);

router.get(
  "/:brandId/verification-status",
  authorize("admin", "brand"),
  validate(brandVerificationStatusSchema),
  brandVerificationStatus,
);

export default router;
