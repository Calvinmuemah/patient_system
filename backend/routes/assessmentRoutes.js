import express from "express";
import { addAssessment } from "../controllers/assessmentController.js";

const router = express.Router();

router.post("/", addAssessment);

export default router;
