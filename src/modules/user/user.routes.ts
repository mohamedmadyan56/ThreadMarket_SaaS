
import { Router } from "express";
import authenticate from "../../shared/middleware/authenticate";
import { validate } from "../../shared/middleware/validate";
import { getCurrentUser, updateCurrentUser } from "./user.controller";
import { updateProfileSchema } from "./user.validators";

const router = Router();

router.get("/me", authenticate, getCurrentUser);
router.patch("/me", authenticate, validate(updateProfileSchema), updateCurrentUser);

export default router;
