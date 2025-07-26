import express from "express";
import { createCheckoutSession } from "../controllers/coursePurchase.Controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// POST /api/purchase
router.post("/", isAuthenticated, createCheckoutSession);

export default router;
