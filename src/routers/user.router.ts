import { Router } from "express";
import {isAuthenticated} from "../middlewares/isAuthenticated";
import { login } from "../controllers/user.controllers";


const router = Router();

router.post("/login", login);



export default router; 