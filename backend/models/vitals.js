import mongoose from "mongoose";

const vitalsSchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  visitDate: { type: Date, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  bmi: { type: Number, required: true },
});

const Vitals = mongoose.model("Vitals", vitalsSchema);
export default Vitals;
