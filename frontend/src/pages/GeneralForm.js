import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import useForm from "../hooks/useForm";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";
import "../App.css";

export default function GeneralForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientId = location.state?.patientId;

  if (!patientId) {
    alert("Patient ID is missing. Redirecting to registration.");
    navigate("/");
  }

  const [form, handleChange] = useForm({ visitDate: "", generalHealth: "", usingDrugs: "", comments: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/assessments", {
      ...form,
      patientId,
      type: "general",
    });

    navigate("/patients");
  };

  return (
    <div className="general-assessment">
      <div className="header">
        <h2>General Assessment</h2>
        <button className="patient-records-button" onClick={() => navigate("/patients")}>Patient Records</button>
      </div>
      <form onSubmit={handleSubmit} className="assessment-container">
        <div className="section">
          <h3>Visit Details</h3>
          <InputField
            label="Visit Date"
            type="date"
            name="visitDate"
            value={form.visitDate}
            onChange={handleChange}
            className="bg-slate-50 dark:bg-slate-800 text-black"
            required
          />
        </div>

        <div className="section">
          <h3>Patient Status</h3>
          <SelectField
            label="General Health"
            name="generalHealth"
            options={["Good", "Poor"]}
            value={form.generalHealth}
            onChange={handleChange}
            required
          />
          <SelectField
            label="Are you currently using any drugs"
            name="usingDrugs"
            options={["Yes", "No"]}
            value={form.usingDrugs}
            onChange={handleChange}
            required
          />
        </div>

        <div className="section">
          <h3>Clinical Observations</h3>
          <InputField
            label="Comments"
            name="comments"
            value={form.comments}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="save-finish-button">Submit</button>
        </div>
      </form>
    </div>
  );
}
