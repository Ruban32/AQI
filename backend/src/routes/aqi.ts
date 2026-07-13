import { Router } from "express";
import { getAQIData } from "../controllers/aqiController";

const router = Router();

// Example:
// GET http://localhost:5000/api/aqi?lat=13.0827&lon=80.2707
router.get("/", getAQIData);

export default router;
