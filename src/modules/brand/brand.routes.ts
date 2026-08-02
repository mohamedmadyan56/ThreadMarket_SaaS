import { Router } from "express";
import { validate } from "../../shared/middleware/validate";
import authenticate from "../../shared/middleware/authenticate";
import { getPublicBrandProfile, brandVerificationStatus } from "./brand.controller";
import { getBrandProfileSchema, brandVerificationStatusSchema } from "./brand.validators";

const router = Router();
router.use(authenticate);

router.get("/:brandId",
    validate(getBrandProfileSchema),
    getPublicBrandProfile,
);

router.get("/:brandId/verification-status",
    authenticate,
    validate(brandVerificationStatusSchema),
    brandVerificationStatus,
);

export default router;
