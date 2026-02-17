import express from "express";
import cors from "cors";
import morgan from "morgan";

import patientRoutes from "./routes/patientRoutes.js";
import vitalsRoutes from "./routes/vitalsRoutes.js";
import assessmentRoutes from "./routes/assessmentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/patients", patientRoutes);
app.use("/api/vitals", vitalsRoutes);
app.use("/api/assessments", assessmentRoutes);

export default app;