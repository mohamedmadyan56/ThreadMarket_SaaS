import { Router } from "express";
import {isAuthenticated} from "../middlewares/isAuthenticated";
import { login } from "../controllers/user.controllers";
import {} from "../validators/user.validators";
import { validationMiddleware } from "../middlewares/validationMidleware";
import { loginSchema } from "../validators/user.validators";
const router = Router();

router.post("/login", validationMiddleware(loginSchema), login);



export default router; 