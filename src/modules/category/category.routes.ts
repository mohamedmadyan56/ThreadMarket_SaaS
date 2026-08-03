import { Router } from "express";
import { validate } from "../../shared/middleware/validate";
import authenticate from "../../shared/middleware/authenticate";
import { deleteBrandCategory } from "./category.controller";
import { deleteBrandCategorySchema } from "./category.validators";
import { authorize } from "../../shared/middleware/authorize";

const router = Router();

router.delete("/:brandId/categories/:catId",
    authenticate,
    authorize("brand"),
    validate(deleteBrandCategorySchema),
    deleteBrandCategory,
);

export default router;