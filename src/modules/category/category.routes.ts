import { Router } from "express";
import { validate } from "../../shared/middleware/validate";
import authenticate from "../../shared/middleware/authenticate";
import { authorize } from "../../shared/middleware/authorize";
import { createCategory } from "./category.controller";
import { createCategorySchema } from "./category.validators";
const router = Router();



router.post("/:brandId/categories",
    authenticate,
    authorize("brand"),
    validate(createCategorySchema),
    createCategory,
);
export default router;
