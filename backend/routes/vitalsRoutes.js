import express from "express";
import { addVitals } from "../controllers/vitalsController.js";

const router = express.Router();

router.post("/", addVitals);

export default router;
