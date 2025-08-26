import { Router } from "express";
import { getVehicles } from "../controllers/vehicles.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/getVehicles", authenticateToken, getVehicles);

export default router;
