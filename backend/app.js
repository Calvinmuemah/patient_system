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

// Default route for /api
app.get('/api', (req, res) => {
  res.send('API is running');
});

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

export default app;