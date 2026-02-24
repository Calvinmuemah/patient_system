import axios from "axios";

const api = axios.create({
  baseURL: "https://patient-system-vm4s.onrender.com/api",
  // baseURL: "https://patient-system-nu.vercel.app/api",
  // baseURL: "http://localhost:5000/api",
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