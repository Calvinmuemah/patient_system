import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://patient-system-two.vercel.app/api",
});

export default api;

export const getPatients = async () => {
  const response = await api.get("/patients");
  return response.data;
};

export const registerPatient = async (patientData) => {
  const response = await api.post("/patients", patientData);
  return response.data;
};

export const addAssessment = async (assessmentData) => {
  const response = await api.post("/assessments", assessmentData);
  return response.data;
};

export const addVitals = async (vitalsData) => {
  const response = await api.post("/vitals", vitalsData);
  return response.data;
};