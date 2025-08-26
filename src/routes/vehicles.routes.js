import { Router } from "express";
import { getVehicles } from "../controllers/vehicles.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/vehicles", verifyToken, getVehicles);

export default router;
