import { Router } from "express";
import authenticate from "../../shared/middleware/authenticate";
import { authorize } from "../../shared/middleware/authorize";
import { getCategories } from "./category.controller";
const router = Router();

router.use(authenticate);

router.route("/").get(getCategories);

export default router;
