import { Router } from "express";
import authenticate from "../../shared/middleware/authenticate";
import { getCurrentProfile } from "./users.controller";

const router = Router();

router.get("/me", authenticate, getCurrentProfile);

export default router;
