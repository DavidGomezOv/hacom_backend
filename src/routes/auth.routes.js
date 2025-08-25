import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/session", login);

export default router;
