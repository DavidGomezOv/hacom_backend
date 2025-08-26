import { Router } from "express";
import { getPlaces } from "../controllers/places.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js"

const router = Router();

router.get("/getPlaces", authenticateToken, getPlaces);

export default router;
