import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  visitDate: { type: Date, required: true },
  type: { type: String, enum: ["general", "overweight"], required: true },
  generalHealth: { type: String, required: true },
  dietedBefore: Boolean,
  usingDrugs: Boolean,
  comments: { type: String, required: true },
});

const Assessment = mongoose.model("Assessment", assessmentSchema);
export default Assessment;
