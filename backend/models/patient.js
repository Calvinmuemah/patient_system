import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  patientId: { type: String, required: true, unique: true },
  registrationDate: { type: Date, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
