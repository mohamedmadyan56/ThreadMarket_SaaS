import { Router } from "express";
import { validate } from "../../shared/middleware/validate";
import authenticate from "../../shared/middleware/authenticate";
import { brandVerificationStatus } from "./brand.controller";
import { brandVerificationStatusSchema } from "./brand.validators";

const router = Router();

router.get("/:brandId/verification-status",
    authenticate,
    validate(brandVerificationStatusSchema),
    brandVerificationStatus,
);

export default router;