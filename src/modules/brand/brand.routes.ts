import { Router } from "express";
import { validate } from "../../shared/middleware/validate";
import authenticate from "../../shared/middleware/authenticate";
import { authorize } from "../../shared/middleware/authorize";
import { getPublicBrandProfile, brandVerificationStatus, deleteBrandCategory } from "./brand.controller";
import { getBrandProfileSchema, brandVerificationStatusSchema, deleteBrandCategorySchema } from "./brand.validators";

const router = Router();

router.get("/:brandId",
    validate(getBrandProfileSchema),
    getPublicBrandProfile,
);

router.get("/:brandId/verification-status",
    authenticate,
    validate(brandVerificationStatusSchema),
    brandVerificationStatus,
);

router.delete("/:brandId/categories/:catId",
    authenticate,
    authorize("brand"),
    validate(deleteBrandCategorySchema),
    deleteBrandCategory,
);

export default router;